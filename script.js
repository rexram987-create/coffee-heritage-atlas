'use strict';

const { timeline, varieties, rituals, tools } = coffeeData;
const state = { lang: 'he', timeline: 0, ritual: 0 };
try {
  const saved = localStorage.getItem('coffee-atlas-language');
  if (saved === 'he' || saved === 'en') state.lang = saved;
} catch { /* Browsing with storage disabled still works. */ }
const $ = selector => document.querySelector(selector);
const text = (he, en) => state.lang === 'he' ? he : en;
const t = item => item[state.lang];
const escapeHTML = value => String(value).replace(/[&<>"']/g, char => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
}[char]));

// One observer for the lifetime of the page. Content remains visible without JS.
const revealObserver = 'IntersectionObserver' in window
  ? new IntersectionObserver(entries => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    }
  }, { threshold: 0.12 }) : null;
function observeReveals() {
  if (!revealObserver) return;
  document.querySelectorAll('.reveal:not(.visible)').forEach(el => revealObserver.observe(el));
}

// Selection updates existing buttons, preserving focus and horizontal scroll.
function setupTabs(listSelector, panelSelector, items, key, label, renderPanel) {
  const list = $(listSelector);
  const panel = $(panelSelector);
  const prefix = key + '-tab-';
  function select(index, focus = false) {
    state[key] = index;
    [...list.children].forEach((button, i) => {
      button.classList.toggle('active', i === index);
      button.setAttribute('aria-selected', String(i === index));
      button.tabIndex = i === index ? 0 : -1;
    });
    panel.setAttribute('aria-labelledby', prefix + index);
    renderPanel(items[index], panel);
    if (focus) list.children[index].focus();
  }
  function render() {
    list.replaceChildren(...items.map((item, i) => {
      const button = document.createElement('button');
      button.type = 'button';
      button.id = prefix + i;
      button.className = key === 'timeline' ? 'timeline-button' : 'ritual-tab';
      button.setAttribute('role', 'tab');
      button.setAttribute('aria-controls', panel.id);
      button.innerHTML = label(item);
      button.addEventListener('click', () => select(i));
      button.addEventListener('keydown', event => {
        let next = i;
        const direction = state.lang === 'he' ? -1 : 1;
        if (event.key === 'ArrowRight') next += direction;
        else if (event.key === 'ArrowLeft') next -= direction;
        else if (event.key === 'Home') next = 0;
        else if (event.key === 'End') next = items.length - 1;
        else return;
        event.preventDefault();
        select((next + items.length) % items.length, true);
      });
      return button;
    }));
    select(state[key]);
  }
  return render;
}
const renderTimeline = setupTabs('#timeline-buttons', '#timeline-panel', timeline, 'timeline',
  item => escapeHTML(t(item).year), (item, panel) => {
    const c = t(item);
    panel.innerHTML = `<div class="timeline-year">${escapeHTML(c.year)}</div><div><h3>${escapeHTML(c.title)}</h3><p>${escapeHTML(c.text)}</p><a class="source-link" href="#sources">${text('מקורות להיסטוריה', 'History references')}</a></div>`;
  });
const renderRituals = setupTabs('#ritual-list', '#ritual-panel', rituals, 'ritual',
  item => `<span aria-hidden="true">${item.icon}</span> ${escapeHTML(t(item).name)}<small>${escapeHTML(t(item).place)}</small>`,
  (item, panel) => {
    const c = t(item);
    panel.innerHTML = `<h3>${escapeHTML(c.name)}</h3><p>${escapeHTML(c.text)}</p><div class="ritual-steps">${c.steps.map(step => `<span>${escapeHTML(step)}</span>`).join('')}</div><p class="ritual-note">${text('המנהגים משתנים בין אזורים, משפחות וקהילות.', 'Practices vary between regions, families and communities.')}</p><a class="source-link" href="#sources">${text('מקורות וקריאה נוספת', 'References and further reading')}</a>`;
  });
function renderVarieties() {
  $('#variety-grid').innerHTML = varieties.map(item => {
    const c = t(item);
    return `<article class="museum-card"><div class="icon" aria-hidden="true">${item.icon}</div><h3>${escapeHTML(c.name)}</h3><p class="scientific-name" lang="la" dir="ltr">${escapeHTML(item.scientificName)}</p><p>${escapeHTML(c.desc)}</p><span class="tag">${escapeHTML(text(item.tagHe, item.tagEn))}</span>${item.source ? `<a class="source-link" href="${escapeHTML(item.source)}">${text('סיווג בוטני — Kew', 'Botanical classification — Kew')}</a>` : ''}</article>`;
  }).join('');
}
function toolImage(item, expanded = false) {
  if (!item.image) return `<div class="${expanded ? 'dialog-icon' : 'icon'}" aria-hidden="true">${item.icon}</div>`;
  const img = `<img class="tool-image${expanded ? ' expanded' : ''}" src="${escapeHTML(item.image)}" alt="${escapeHTML(text(item.altHe, item.altEn))}" width="${item.width}" height="${item.height}" loading="${expanded ? 'eager' : 'lazy'}" decoding="async">`;
  return expanded ? `<a href="${escapeHTML(item.image)}" target="_blank" rel="noopener">${img}<span class="image-hint">${text('פתחו את התמונה המלאה בלשונית חדשה', 'Open the full image in a new tab')}</span></a>` : img;
}
function renderTools() {
  $('#tool-grid').innerHTML = tools.map((item, i) => {
    const c = t(item);
    return `<button class="museum-card tool-card" data-index="${i}" type="button" aria-haspopup="dialog">${toolImage(item)}<h3>${escapeHTML(c.name)}</h3><p>${escapeHTML(c.short)}</p><span class="tag">${text('פתחו כרטיס', 'Open card')}</span></button>`;
  }).join('');
  $('#tool-grid').querySelectorAll('button').forEach(button => button.addEventListener('click', () => openTool(Number(button.dataset.index))));
}
const dialog = $('#museum-dialog');
let activeTool = null;
function renderDialog() {
  const item = tools[activeTool];
  const c = t(item);
  $('#dialog-content').innerHTML = `<div class="dialog-hero">${toolImage(item, true)}${item.credit ? `<p class="image-credit"><a href="${escapeHTML(item.source)}">${escapeHTML(item.credit)}</a></p>` : ''}<h2 id="dialog-title">${escapeHTML(c.name)}</h2><p>${escapeHTML(c.short)}</p></div><div class="dialog-body"><h3>${text('מקור השם — מבוא', 'Name origin — introduction')}</h3><p>${escapeHTML(c.origin)}</p><p class="editorial-note">${text('הסבר זה עדיין דורש השלמת אסמכתאות לשוניות.', 'This explanation still needs additional linguistic references.')}</p><h3>${text('אופן השימוש', 'How it is used')}</h3><p>${escapeHTML(c.use)}</p></div>`;
}
function openTool(index) {
  activeTool = index;
  renderDialog();
  dialog.showModal();
}
$('.dialog-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  const rect = dialog.getBoundingClientRect();
  if (event.target === dialog && (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)) dialog.close();
});
dialog.addEventListener('close', () => { activeTool = null; });

const menuButton = $('.menu-button');
const nav = $('#main-nav');
function setMenu(open, restoreFocus = false) {
  nav.classList.toggle('open', open);
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? text('סגירת תפריט', 'Close menu') : text('פתיחת תפריט', 'Open menu'));
  if (restoreFocus) menuButton.focus();
}
menuButton.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  setMenu(false);
  // Move keyboard focus out of the now-hidden mobile navigation.
  const section = $(link.getAttribute('href'));
  if (section) {
    section.tabIndex = -1;
    section.focus({ preventScroll: true });
  }
}));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && nav.classList.contains('open') && !dialog.open) setMenu(false, true);
});
document.addEventListener('click', event => {
  if (!nav.contains(event.target) && !menuButton.contains(event.target) && nav.classList.contains('open')) setMenu(false);
});
function applyLanguage() {
  document.documentElement.lang = state.lang;
  document.documentElement.dir = text('rtl', 'ltr');
  document.body.classList.toggle('lang-en', state.lang === 'en');
  document.querySelectorAll('[data-he][data-en]').forEach(el => { el.textContent = el.dataset[state.lang]; });
  document.querySelectorAll('[data-label-he][data-label-en]').forEach(el => el.setAttribute('aria-label', text(el.dataset.labelHe, el.dataset.labelEn)));
  document.querySelectorAll('[data-alt-he][data-alt-en]').forEach(el => { el.alt = text(el.dataset.altHe, el.dataset.altEn); });
  const toggle = $('#language-toggle');
  toggle.textContent = text('EN', 'עב');
  toggle.setAttribute('aria-label', text('Switch to English', 'מעבר לעברית'));
  $('.dialog-close').setAttribute('aria-label', text('סגירה', 'Close'));
  setMenu(nav.classList.contains('open'));
  renderTimeline();
  renderRituals();
  renderVarieties();
  renderTools();
  if (dialog.open && activeTool !== null) renderDialog();
}
$('#language-toggle').addEventListener('click', () => {
  state.lang = text('en', 'he');
  try { localStorage.setItem('coffee-atlas-language', state.lang); } catch { /* Optional persistence. */ }
  applyLanguage();
});
$('#year').textContent = new Date().getFullYear();
applyLanguage();
if (revealObserver) {
  document.documentElement.classList.add('motion-ready');
  observeReveals();
}
