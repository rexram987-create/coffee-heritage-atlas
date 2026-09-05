// Editorial content; keep both language versions together.
const coffeeData = {
  "timeline": [
    {
      "he": {
        "title": "מאתיופיה אל תימן",
        "text": "מקורותיו של הקפה באפריקה. במאה ה־15 כבר גידלו קפה בתימן וסחרו בו. סיפורי גילוי מוקדמים, ובהם אגדת הרועה קאלדי, אינם תיעוד היסטורי ודאי.",
        "year": "המאה ה־15"
      },
      "en": {
        "title": "From Ethiopia to Yemen",
        "text": "Coffee originated in Africa. By the 15th century, coffee was cultivated and traded in Yemen. Earlier discovery stories, including the legend of the herder Kaldi, are not firm historical documentation.",
        "year": "15th century"
      }
    },
    {
      "he": {
        "title": "בתי הקפה בעולם העות׳מאני",
        "text": "בתי קפה באיסטנבול ובערים אחרות הפכו למקומות מפגש, שיחה, משחקים, מוזיקה והחלפת חדשות.",
        "year": "המאה ה־16"
      },
      "en": {
        "title": "Coffeehouses in the Ottoman world",
        "text": "Coffeehouses in Istanbul and other cities became places for conversation, games, music and the exchange of news.",
        "year": "16th century"
      }
    },
    {
      "he": {
        "title": "הקפה מגיע לאירופה",
        "text": "נמלים, סוחרים ובתי קפה הפיצו את המשקה בוונציה, לונדון, פריז ווינה. בתי הקפה הפכו למוקדי מסחר ורעיונות.",
        "year": "המאה ה־17"
      },
      "en": {
        "title": "Coffee reaches Europe",
        "text": "Ports, merchants and coffeehouses spread the drink through Venice, London, Paris and Vienna, where cafés became hubs of commerce and ideas.",
        "year": "17th century"
      }
    },
    {
      "he": {
        "title": "מטעים וסחר עולמי",
        "text": "הקפה הועבר לאסיה, לאיים הקריביים ולאמריקה הלטינית. התרחבות זו הייתה כרוכה גם בקולוניאליזם ובעבודת כפייה.",
        "year": "המאות ה־17–19"
      },
      "en": {
        "title": "Plantations and global trade",
        "text": "Coffee spread to Asia, the Caribbean and Latin America. This expansion was also deeply tied to colonialism and coerced labor.",
        "year": "17th–19th centuries"
      }
    },
    {
      "he": {
        "title": "אספרסו, קפה נמס ותרבות המונים",
        "text": "טכנולוגיות חדשות קיצרו את ההכנה, שינו את בתי הקפה והכניסו את הקפה כמעט לכל בית.",
        "year": "המאה ה־20"
      },
      "en": {
        "title": "Espresso, instant coffee and mass culture",
        "text": "New technologies shortened preparation, transformed cafés and brought coffee into homes around the world.",
        "year": "20th century"
      }
    },
    {
      "he": {
        "title": "גל של מקור, איכות וקיימות",
        "text": "צרכנים ובתי קלייה מתעניינים בזן, בחווה, בגובה, בעיבוד ובסחר הוגן — ומבקשים להכיר את הסיפור שמאחורי הכוס.",
        "year": "כיום"
      },
      "en": {
        "title": "A focus on origin, quality and sustainability",
        "text": "Drinkers and roasters increasingly care about variety, farm, altitude, processing and fairness—and the story behind the cup.",
        "year": "Today"
      }
    }
  ],
  "varieties": [
    {
      "icon": "🌿",
      "tagHe": "עדין וארומטי",
      "tagEn": "Delicate & aromatic",
      "he": {
        "name": "ערביקה",
        "desc": "המין הנפוץ ביותר בקפה איכותי; גדל לרוב בגבהים ומציע מגוון רחב של ארומות."
      },
      "en": {
        "name": "Arabica",
        "desc": "The dominant species in specialty coffee, often grown at elevation with a broad aromatic range."
      },
      "scientificName": "Coffea arabica"
    },
    {
      "icon": "⚡",
      "tagHe": "עוצמתי ועשיר בקפאין",
      "tagEn": "Bold & high caffeine",
      "he": {
        "name": "קנפורה — רובוסטה",
        "desc": "עמיד יותר לחום ולמחלות, בעל גוף כבד ומרירות מודגשת. נפוץ בתערובות אספרסו."
      },
      "en": {
        "name": "Canephora — Robusta",
        "desc": "More tolerant of heat and disease, with heavier body and stronger bitterness. Common in espresso blends."
      },
      "scientificName": "Coffea canephora"
    },
    {
      "icon": "🍃",
      "tagHe": "נדיר ובעל אופי",
      "tagEn": "Rare & distinctive",
      "he": {
        "name": "ליבריקה",
        "desc": "עץ גבוה בעל פולים גדולים ופרופיל טעם יוצא דופן, המזוהה במיוחד עם דרום־מזרח אסיה."
      },
      "en": {
        "name": "Liberica",
        "desc": "A tall tree with large beans and an unusual flavor profile, especially associated with Southeast Asia."
      },
      "scientificName": "Coffea liberica"
    },
    {
      "icon": "✦",
      "tagHe": "מורשת וטעם ייחודי",
      "tagEn": "Heritage & unique flavor",
      "he": {
        "name": "אקסלסה",
        "desc": "אקסלסה מוכרת כיום במאגר Kew כמין Coffea dewevrei. בעבר נכללה בחלק מהסיווגים בליבריקה; לכן אפשר למצוא בספרות שמות וסיווגים שונים."
      },
      "en": {
        "name": "Excelsa",
        "desc": "Kew currently accepts Excelsa as Coffea dewevrei. Earlier classifications sometimes placed it within Liberica, so older references use different names and classifications."
      },
      "scientificName": "Coffea dewevrei",
      "source": "https://powo.science.kew.org/taxon/urn:lsid:ipni.org:names:747092-1"
    }
  ],
  "rituals": [
    {
      "icon": "🇪🇹",
      "he": {
        "name": "הטקס האתיופי",
        "place": "אתיופיה ואריתריאה",
        "text": "הכנת הקפה נעשית לעיני האורחים: קלייה, כתישה, חליטה בג׳בנה ומזיגה לספלים קטנים. הזמן הממושך מדגיש כבוד, קהילה ושיחה.",
        "steps": [
          "קלייה",
          "כתישה",
          "חליטה בג׳בנה",
          "שלושה סבבים"
        ]
      },
      "en": {
        "name": "Ethiopian coffee ceremony",
        "place": "Ethiopia and Eritrea",
        "text": "Coffee is prepared before the guests: roasting, grinding, brewing in a jebena and serving in small cups. The unhurried process honors community and conversation.",
        "steps": [
          "Roasting",
          "Grinding",
          "Jebena brewing",
          "Three rounds"
        ]
      }
    },
    {
      "icon": "🏜️",
      "he": {
        "name": "הקפה הערבי",
        "place": "חצי האי ערב והמרחב הבדואי",
        "text": "הדלה והפנג׳אן עומדים במרכז שפה חברתית של הכנסת אורחים. סדר ההגשה, היד הימנית והכמות הקטנה בכוס מבטאים כבוד ונימוס.",
        "steps": [
          "קלייה בהירה",
          "תבלינים",
          "מזיגה בדלה",
          "הגשה ביד ימין"
        ]
      },
      "en": {
        "name": "Arabic coffee hospitality",
        "place": "Arabian Peninsula and Bedouin communities",
        "text": "The dallah and finjan form part of a social language of hospitality. Serving order, the right hand and the small pour all communicate respect.",
        "steps": [
          "Light roast",
          "Spices",
          "Dallah pouring",
          "Right-hand service"
        ]
      }
    },
    {
      "icon": "🇹🇷",
      "he": {
        "name": "המסורת הטורקית",
        "place": "טורקיה והעולם העות׳מאני",
        "text": "קפה טחון דק מבושל בג׳זווה ומוגש עם המשקע. הוא קשור לאירוח, למפגש חברתי ולמנהגים עממיים של קריאה במשקעי הקפה.",
        "steps": [
          "טחינה דקה",
          "בישול בג׳זווה",
          "קצף",
          "הגשה עם המשקע"
        ]
      },
      "en": {
        "name": "Turkish coffee tradition",
        "place": "Türkiye and the Ottoman world",
        "text": "Finely ground coffee is brewed in a cezve and served with its sediment. It is tied to hospitality, social life and folk traditions of reading the grounds.",
        "steps": [
          "Fine grind",
          "Cezve brewing",
          "Foam",
          "Served unfiltered"
        ]
      }
    }
  ],
  "tools": [
    {
      "icon": "🏺",
      "he": {
        "name": "ג׳בנה",
        "short": "קנקן חרס מסורתי מקרן אפריקה.",
        "origin": "השם נפוץ באמהרית ובשפות האזור; מסלולו האטימולוגי המדויק אינו מוסכם לחלוטין.",
        "use": "משמש לחליטת קפה בטקס האתיופי, לרוב מעל מקור חום ישיר."
      },
      "en": {
        "name": "Jebena",
        "short": "A traditional clay pot from the Horn of Africa.",
        "origin": "The name is common in Amharic and regional languages; its deeper etymology is not fully settled.",
        "use": "Used to brew coffee during the Ethiopian ceremony, commonly over direct heat."
      },
      "title": "Ethiopian traditional coffee pot( Jebena).jpg",
      "author": "Abyssinian cat",
      "source": "https://commons.wikimedia.org/wiki/File:Ethiopian_traditional_coffee_pot(_Jebena).jpg",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0/",
      "altHe": "ג׳בנה כהה מחימר על כירת פחמים, במבט מלמעלה",
      "altEn": "A dark clay jebena on a charcoal stove, viewed from above",
      "image": "assets/images/tools/jebena.webp",
      "width": 750,
      "height": 1000,
      "credit": "Abyssinian cat · Wikimedia Commons · CC BY-SA 4.0",
      "modified": true
    },
    {
      "icon": "🫖",
      "image": "assets/images/tools/arabic-dallah-coffee-pot.webp",
      "altHe": "שני קנקני דלה ערביים מעוטרים ממתכת",
      "altEn": "Two ornate metal Arabic dallah coffee pots",
      "credit": "Bluehillies · Wikimedia Commons · CC0",
      "he": {
        "name": "דלה",
        "short": "קנקן הקפה המזוהה עם חצי האי ערב.",
        "origin": "המילה הערבית دَلَّة‎ מציינת את קנקן הקפה בעל הזרבובית הארוכה.",
        "use": "להכנה, שמירה והגשה של קפה ערבי לספלי פנג׳אן קטנים."
      },
      "en": {
        "name": "Dallah",
        "short": "The coffee pot strongly associated with the Arabian Peninsula.",
        "origin": "The Arabic word دَلَّة refers to the long-spouted coffee pot.",
        "use": "Used to prepare, hold and pour Arabic coffee into small finjan cups."
      },
      "source": "https://commons.wikimedia.org/wiki/File:Arabic_dallah_(coffee_pot).jpg",
      "width": 803,
      "height": 1200,
      "author": "Bluehillies",
      "title": "Arabic dallah (coffee pot).jpg",
      "license": "CC0 1.0",
      "licenseUrl": "https://creativecommons.org/publicdomain/zero/1.0/",
      "modified": true
    },
    {
      "icon": "🥛",
      "he": {
        "name": "פנג׳אן",
        "short": "ספל קטן, בדרך כלל ללא ידית.",
        "origin": "המילה עברה בין פרסית, ערבית וטורקית. בשפות שונות היא יכולה לציין ספל, כוס או כלי קטן.",
        "use": "להגשת מנות קטנות של קפה ערבי או טורקי."
      },
      "en": {
        "name": "Finjan",
        "short": "A small cup, usually without a handle.",
        "origin": "The word traveled through Persian, Arabic and Turkish, with meanings including cup or small vessel.",
        "use": "Used for small servings of Arabic or Turkish coffee."
      },
      "title": "Finjan Arabic coffee.jpg",
      "author": "أدوّن وأوثق أيامي بالصور",
      "source": "https://commons.wikimedia.org/wiki/File:Finjan_Arabic_coffee.jpg",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0/",
      "altHe": "ספל פנג׳אן קטן ובו קפה ערבי",
      "altEn": "A small finjan cup containing Arabic coffee",
      "image": "assets/images/tools/finjan.webp",
      "width": 1000,
      "height": 664,
      "credit": "أدوّن وأوثق أيامي بالصور · Wikimedia Commons · CC BY 2.0",
      "modified": true
    },
    {
      "icon": "♨️",
      "he": {
        "name": "ג׳זווה",
        "short": "כלי קטן בעל ידית ארוכה להכנת קפה טורקי.",
        "origin": "השם הטורקי cezve קשור למונח עות׳מאני שמקורו בערבית, לציון כלי בישול קטן.",
        "use": "מחממים בו מים וקפה טחון דק עד להיווצרות קצף."
      },
      "en": {
        "name": "Cezve",
        "short": "A small long-handled pot for Turkish coffee.",
        "origin": "The Turkish word cezve comes through Ottoman usage from an Arabic term for a small cooking vessel.",
        "use": "Water and finely ground coffee are heated in it until foam forms."
      },
      "title": "TurkishCoffeePot.jpg",
      "author": "Noumenon",
      "source": "https://commons.wikimedia.org/wiki/File:TurkishCoffeePot.jpg",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
      "altHe": "ג׳זווה מנחושת עם ידית עץ ארוכה",
      "altEn": "A copper cezve with a long wooden handle",
      "image": "assets/images/tools/cezve.webp",
      "width": 662,
      "height": 1000,
      "credit": "Noumenon · Wikimedia Commons · CC BY-SA 3.0",
      "modified": true
    },
    {
      "icon": "⬡",
      "he": {
        "name": "מקינטה",
        "short": "קנקן איטלקי לכיריים המשתמש בלחץ אדים.",
        "origin": "הכינוי העברי־איטלקי קשור ל־macchinetta, “מכונה קטנה”. Moka מפנה לנמל מוח׳א שבתימן.",
        "use": "מים עולים דרך הקפה הטחון אל התא העליון; התוצאה מרוכזת אך אינה אספרסו אמיתי."
      },
      "en": {
        "name": "Moka pot",
        "short": "An Italian stovetop brewer driven by steam pressure.",
        "origin": "Macchinetta means “small machine”; Moka refers to the Yemeni port of Mocha.",
        "use": "Water rises through the grounds into the upper chamber, producing concentrated coffee rather than true espresso."
      },
      "title": "Moka2.jpg",
      "author": "Imm808",
      "source": "https://commons.wikimedia.org/wiki/File:Moka2.jpg",
      "license": "CC BY 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/3.0/",
      "altHe": "מקינטה מתכתית להכנת קפה על הכיריים",
      "altEn": "A metal moka pot for brewing coffee on a stovetop",
      "image": "assets/images/tools/moka.webp",
      "width": 835,
      "height": 1000,
      "credit": "Imm808 · Wikimedia Commons · CC BY 3.0",
      "modified": true
    },
    {
      "icon": "⌛",
      "he": {
        "name": "פרנץ׳ פרס",
        "short": "כלי חליטה עם בוכנה ומסנן מתכתי.",
        "origin": "השם האנגלי פירושו “מכבש צרפתי”, אף שהיסטוריית ההמצאה כוללת גם פטנטים איטלקיים.",
        "use": "משרים קפה גס במים ולאחר מכן מורידים את הבוכנה להפרדת המשקה."
      },
      "en": {
        "name": "French press",
        "short": "An immersion brewer with a plunger and metal filter.",
        "origin": "The English name means “French press,” though its invention history also includes Italian patents.",
        "use": "Coarse coffee steeps in water before the plunger separates the brew."
      },
      "title": "Frenchpress-wiki.jpg",
      "author": "Yongbin",
      "source": "https://commons.wikimedia.org/wiki/File:Frenchpress-wiki.jpg",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0/",
      "altHe": "כלי פרנץ׳ פרס מזכוכית עם בוכנה",
      "altEn": "A glass French press coffee maker with a plunger",
      "image": "assets/images/tools/french-press.webp",
      "width": 1000,
      "height": 800,
      "credit": "Yongbin · Wikimedia Commons · CC BY-SA 3.0",
      "modified": true
    }
  ]
};
