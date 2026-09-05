# Coffee Heritage Atlas | אטלס מורשת הקפה

מוזיאון קפה דיגיטלי בעברית ובאנגלית: היסטוריה, מינים, טקסים וכלי הכנה.

An introductory bilingual coffee museum covering history, species, rituals and tools.

## Live site

https://rexram987-create.github.io/coffee-heritage-atlas/

## Features

- Hebrew and English, including translated screen-reader labels and image descriptions
- RTL/LTR switching with saved language preference (works without storage permission too)
- Six historical milestones and three coffee traditions
- Keyboard tabs: Left/Right (following reading direction), Home/End, and Tab into the panel
- Four species profiles, with scientific names and the current Kew classification of Excelsa
- Six tool dialogs with native Escape-to-close and focus return
- Responsive navigation, skip link, visible focus indicators and reduced-motion support
- Optimized local WebP photos, responsive Arabica image and full-object Dallah display
- Sources and linked image credits available from the site navigation

## Development

No dependencies, build pipeline, server API or secrets are needed. GitHub Pages serves the files directly.

```sh
python -m http.server 8765
node --check data.js
node --check script.js
```

- `index.html`: structure and bilingual static copy
- `data.js`: editorial content, both languages together
- `script.js`: accessible interactions and language handling
- `styles.css`: responsive design
- `assets/images/CREDITS.md`: image provenance and derivative details

## Content and media policy

Species are distinguished from cultivated varieties. The four cards are a selection, not a full botanical inventory. Excelsa follows Kew's accepted Coffea dewevrei classification, checked September 5, 2026. Early discovery legends are not presented as documented dates. Ritual summaries describe examples rather than universal rules.

The site links history, botanical and cultural references. Tool etymologies remain introductory and are explicitly marked as needing additional linguistic references. They should not be treated as a fully verified etymological dictionary. Only two photographs are currently included; other tool icons are illustrative placeholders.

Code is licensed under MIT (see LICENSE). Photos retain their own licenses, documented in assets/images/CREDITS.md. Existing JPEG originals remain available; WebP derivatives are served on the website.

## Future work

Additional verified tool photos and linguistic references; world coffee map; expanded variety encyclopedia; production simulator; flavor wheel; brewing methods; optional PWA/offline support.

## Manual regression checklist

- Both languages: tabs update the correct panel and retain focus; arrows and Home/End work.
- Dialogs have a name, display content, close with Escape/button and return focus to the opener.
- Language survives reload; image descriptions and navigation labels match the chosen language.
- Narrow screens: open/close menu, follow section links, scroll tabs and inspect full tool images.
- Verify sources, local image loading and no page-wide horizontal overflow.
