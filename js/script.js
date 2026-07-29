(function () {
  'use strict';

  var CONTENT = {
    en: {
      nav: { home: 'Home', about: 'About', products: 'Products', contact: 'Contact' },
      brandName: 'Sri Venkata Krishna Modern Ricemill',
      brandTag: 'Since 1981',
      hero: {
        title: 'Premium Rice, Milled with Trust Since 1981',
        subtitle: 'Four decades of family tradition, modern milling, and uncompromising quality — from our mill in Shadnagar to your table.',
        cta1: 'Explore Products',
        cta2: 'Get in Touch',
      },
      trust: [
        { mark: '40+', title: 'Since 1981', desc: '40+ years of milling experience.' },
        { mark: '01', title: 'Premium Quality', desc: 'Carefully selected, best-quality rice.' },
        { mark: '02', title: 'Quality Assured', desc: 'Every step, quality checked.' },
        { mark: '03', title: 'Bulk Supply', desc: 'Wholesale & retail available.' },
      ],
      aboutTeaser: {
        title: 'A Legacy Since 1981',
        text: "Sri Venkata Krishna Modern Ricemill has been a trusted name in Shadnagar, Telangana for over four decades, run by the Bikkumalla family with a commitment to purity and quality in every grain.",
        cta: 'Read Our Story',
      },
      productsTeaser: { title: 'What We Mill', cta: 'View All Products' },
      ctaBanner: 'Ready to bring premium rice to your business?',
      about: {
        title: 'About Us',
        storyTitle: 'Our Story',
        story: "Founded in 1981, Sri Venkata Krishna Modern Ricemill began as a small family enterprise on Keshampet Road, Shadnagar. Over four decades, we've grown into a modern rice milling operation — without ever losing sight of the values we started with: honest sourcing, careful processing, and consistent quality. Today, the mill is run by Sriman Narayana Bikkumalla and Sai Krishna Bikkumalla, continuing the family's commitment to serving households, businesses, and institutions across Telangana with rice they can trust.",
        founders: [
          { name: 'Sriman Narayana Bikkumalla', role: 'Managing Partner', initials: 'SNB' },
          { name: 'Sai Krishna Bikkumalla', role: 'Managing Partner', initials: 'SKB' },
        ],
        valuesTitle: 'What We Stand For',
        values: [
          { title: 'Purity First', desc: 'Every batch is cleaned and sorted with care before milling.' },
          { title: 'Modern Milling', desc: 'Contemporary machinery paired with traditional know-how.' },
          { title: 'Zero Waste', desc: 'Husk, bran, and by-products are repurposed as cattle feed.' },
          { title: 'Family Trust', desc: 'Generations of relationships with our customers.' },
        ],
        serveTitle: 'Who We Serve',
        serve: ['Retail Stores', 'Wholesale Dealers', 'Super Markets', 'Restaurants', 'Hotels', 'Caterers', 'Institutions', 'Corporate Offices'],
      },
      products: {
        title: 'Our Products',
        subtitle: 'From premium rice to byproducts for feed and industry — quality at every stage of the mill.',
        items: [
          { name: 'Rice', desc: 'Premium, clean, ready-to-cook rice in multiple grades.', photoLabel: 'rice grains' },
          { name: 'Broken Rice', desc: 'Ideal for various culinary and industrial uses.', photoLabel: 'broken rice' },
          { name: 'Paddy Husk', desc: 'Byproduct used as fuel and organic material.', photoLabel: 'paddy husk' },
          { name: 'Rice Bran', desc: 'Nutrient-rich bran for feed and oil extraction.', photoLabel: 'rice bran' },
          { name: 'Cattle Feed', desc: 'Wholesome feed made from rice byproducts.', photoLabel: 'cattle feed' },
        ],
        brands: ['Gajraj Evergreen HMT Rice', 'No.1 Kurnool Special', 'Bell Brand', 'Cycle Brand', 'Tomato Gold', '999 Gold Premium', 'Pure Basmati Rice', 'Amulya Finest Selection'],
        brandsTitle: 'Brands We Mill',
        brandsMore: 'Many more...',
        packagingTitle: 'Packaging Sizes',
        packagingNote: 'Packed for freshness, available in bulk and retail sizes.',
        sizes: [{ size: '5 KG' }, { size: '10 KG' }, { size: '25 KG' }, { size: '50 KG' }],
      },
      contact: {
        title: 'Get in Touch',
        subtitle: "Have a question about our products, bulk orders, or partnerships? Reach out — we'd love to hear from you.",
        formName: 'Your Name', formPhone: 'Phone Number', formProduct: 'Product of Interest', formMessage: 'Message',
        formSubmit: 'Send Enquiry',
        formThanks: "Thank you! We've received your enquiry and will get back to you shortly.",
        phoneTitle: 'Call Us',
        people: [
          { name: 'Sriman Narayana Bikkumalla', phone: '98485 76711', tel: 'tel:9848576711' },
          { name: 'Sai Krishna Bikkumalla', phone: '89193 32393', tel: 'tel:8919332393' },
        ],
        addressTitle: 'Visit Us',
        address: 'Keshampet Road, Shadnagar, 509216, Telangana',
        directions: 'Get Directions',
      },
      footer: {
        tagline: 'Serving Shadnagar and all of Telangana with rice you can trust.',
        quickLinks: 'Quick Links',
        rights: '© 2026 Sri Venkata Krishna Modern Ricemill. All rights reserved.',
      },
    },
    te: {
      nav: { home: 'హోమ్', about: 'మా గురించి', products: 'ఉత్పత్తులు', contact: 'సంప్రదించండి' },
      brandName: 'శ్రీ వేంకట కృష్ణ ఆధునిక బియ్యం మిల్లు',
      brandTag: '1981 నుండి',
      hero: {
        title: '1981 నుండి నమ్మకంతో మిల్లింగ్ చేసిన ప్రీమియం బియ్యం',
        subtitle: 'షాద్‌నగర్‌లోని మా మిల్లు నుండి మీ ఇంటి వరకు — నాలుగు దశాబ్దాల కుటుంబ సంప్రదాయం, ఆధునిక మిల్లింగ్, రాజీలేని నాణ్యత.',
        cta1: 'ఉత్పత్తులు చూడండి',
        cta2: 'సంప్రదించండి',
      },
      trust: [
        { mark: '40+', title: '1981 నుండి', desc: '40+ సంవత్సరాల మిల్లింగ్ అనుభవం.' },
        { mark: '01', title: 'ప్రీమియం నాణ్యత', desc: 'జాగ్రత్తగా ఎంపిక చేసిన ఉత్తమ నాణ్యత బియ్యం.' },
        { mark: '02', title: 'నాణ్యత హామీ', desc: 'ప్రతి దశలో నాణ్యత తనిఖీ.' },
        { mark: '03', title: 'పెద్దమొత్తంలో సరఫరా', desc: 'టోకు & చిల్లర సరఫరా అందుబాటులో.' },
      ],
      aboutTeaser: {
        title: '1981 నుండి ఒక వారసత్వం',
        text: 'శ్రీ వేంకట కృష్ణ ఆధునిక బియ్యం మిల్లు నాలుగు దశాబ్దాలకు పైగా షాద్‌నగర్, తెలంగాణలో నమ్మకమైన పేరుగా నిలిచింది. బిక్కుమళ్ల కుటుంబం ప్రతి గింజలో స్వచ్ఛత, నాణ్యతకు కట్టుబడి ఉంది.',
        cta: 'మా కథ చదవండి',
      },
      productsTeaser: { title: 'మేము మిల్లింగ్ చేసేవి', cta: 'అన్ని ఉత్పత్తులు చూడండి' },
      ctaBanner: 'మీ వ్యాపారానికి ప్రీమియం బియ్యం కావాలా?',
      about: {
        title: 'మా గురించి',
        storyTitle: 'మా కథ',
        story: '1981లో స్థాపించబడిన శ్రీ వేంకట కృష్ణ ఆధునిక బియ్యం మిల్లు, షాద్‌నగర్‌లోని కేశంపేట రోడ్డులో ఒక చిన్న కుటుంబ వ్యాపారంగా ప్రారంభమైంది. నాలుగు దశాబ్దాలలో, మేము ఆధునిక బియ్యం మిల్లింగ్ సంస్థగా ఎదిగాము — ప్రారంభంలో ఉన్న విలువలను వదలకుండా: నిజాయితీతో కూడిన సేకరణ, జాగ్రత్తగా ప్రాసెసింగ్, స్థిరమైన నాణ్యత. నేడు, ఈ మిల్లును శ్రీమాన్ నారాయణ బిక్కుమళ్ల మరియు సాయి కృష్ణ బిక్కుమళ్ల నిర్వహిస్తున్నారు, తెలంగాణ అంతటా కుటుంబాలు, వ్యాపారాలు, సంస్థలకు నమ్మదగిన బియ్యం అందించే కుటుంబ నిబద్ధతను కొనసాగిస్తున్నారు.',
        founders: [
          { name: 'శ్రీమాన్ నారాయణ బిక్కుమళ్ల', role: 'మేనేజింగ్ పార్టనర్', initials: 'SNB' },
          { name: 'సాయి కృష్ణ బిక్కుమళ్ల', role: 'మేనేజింగ్ పార్టనర్', initials: 'SKB' },
        ],
        valuesTitle: 'మా విలువలు',
        values: [
          { title: 'స్వచ్ఛతకు ప్రాధాన్యం', desc: 'ప్రతి బ్యాచ్‌ను మిల్లింగ్‌కు ముందు జాగ్రత్తగా శుభ్రం చేసి, వేరు చేస్తారు.' },
          { title: 'ఆధునిక మిల్లింగ్', desc: 'సాంప్రదాయ నైపుణ్యంతో పాటు ఆధునిక యంత్రాలు.' },
          { title: 'వ్యర్థం లేని విధానం', desc: 'పొట్టు, తవుడు, ఉప-ఉత్పత్తులను పశువుల దాణాగా ఉపయోగిస్తారు.' },
          { title: 'కుటుంబ నమ్మకం', desc: 'మా వినియోగదారులతో తరతరాల సంబంధాలు.' },
        ],
        serveTitle: 'మేము సేవలందించే వారు',
        serve: ['రిటైల్ దుకాణాలు', 'టోకు వ్యాపారులు', 'సూపర్ మార్కెట్లు', 'రెస్టారెంట్లు', 'హోటళ్లు', 'క్యాటరర్లు', 'సంస్థలు', 'కార్పొరేట్ కార్యాలయాలు'],
      },
      products: {
        title: 'మా ఉత్పత్తులు',
        subtitle: 'ప్రీమియం బియ్యం నుండి దాణా, పరిశ్రమల కోసం ఉప-ఉత్పత్తుల వరకు — మిల్లులోని ప్రతి దశలోనూ నాణ్యత.',
        items: [
          { name: 'బియ్యం', desc: 'బహుళ రకాల్లో ప్రీమియం, శుభ్రమైన, వండటానికి సిద్ధంగా ఉన్న బియ్యం.', photoLabel: 'rice grains' },
          { name: 'నూకలు', desc: 'వివిధ వంటకాలు మరియు పారిశ్రామిక అవసరాలకు అనువైనది.', photoLabel: 'broken rice' },
          { name: 'వరి పొట్టు', desc: 'ఇంధనం మరియు సేంద్రీయ పదార్థంగా ఉపయోగించే ఉప-ఉత్పత్తి.', photoLabel: 'paddy husk' },
          { name: 'వరి తవుడు', desc: 'దాణా మరియు నూనె తీయడానికి పోషకాలు అధికంగా ఉన్న తవుడు.', photoLabel: 'rice bran' },
          { name: 'పశువుల దాణా', desc: 'బియ్యం ఉప-ఉత్పత్తులతో తయారు చేసిన ఆరోగ్యకరమైన దాణా.', photoLabel: 'cattle feed' },
        ],
        brands: ['Gajraj Evergreen HMT Rice', 'No.1 Kurnool Special', 'Bell Brand', 'Cycle Brand', 'Tomato Gold', '999 Gold Premium', 'Pure Basmati Rice', 'Amulya Finest Selection'],
        brandsTitle: 'మేము మిల్లింగ్ చేసే బ్రాండ్లు',
        brandsMore: 'మరిన్ని...',
        packagingTitle: 'ప్యాకేజింగ్ పరిమాణాలు',
        packagingNote: 'తాజాదనం కోసం ప్యాక్ చేయబడింది, టోకు మరియు చిల్లర పరిమాణాల్లో అందుబాటులో ఉంది.',
        sizes: [{ size: '5 KG' }, { size: '10 KG' }, { size: '25 KG' }, { size: '50 KG' }],
      },
      contact: {
        title: 'మమ్మల్ని సంప్రదించండి',
        subtitle: 'మా ఉత్పత్తులు, పెద్దమొత్తంలో ఆర్డర్లు లేదా భాగస్వామ్యాల గురించి ప్రశ్నలు ఉన్నాయా? మమ్మల్ని సంప్రదించండి.',
        formName: 'మీ పేరు', formPhone: 'ఫోన్ నంబర్', formProduct: 'మీకు కావాల్సిన ఉత్పత్తి', formMessage: 'సందేశం',
        formSubmit: 'విచారణ పంపండి',
        formThanks: 'ధన్యవాదాలు! మీ విచారణ అందింది, త్వరలో మిమ్మల్ని సంప్రదిస్తాము.',
        phoneTitle: 'మాకు కాల్ చేయండి',
        people: [
          { name: 'శ్రీమాన్ నారాయణ బిక్కుమళ్ల', phone: '98485 76711', tel: 'tel:9848576711' },
          { name: 'సాయి కృష్ణ బిక్కుమళ్ల', phone: '89193 32393', tel: 'tel:8919332393' },
        ],
        addressTitle: 'మమ్మల్ని సందర్శించండి',
        address: 'కేశంపేట రోడ్డు, షాద్‌నగర్, 509216, తెలంగాణ',
        directions: 'దారి చూపండి',
      },
      footer: {
        tagline: 'షాద్‌నగర్ మరియు తెలంగాణ అంతటికీ నమ్మదగిన బియ్యం అందిస్తున్నాం.',
        quickLinks: 'త్వరిత లింకులు',
        rights: '© 2026 శ్రీ వేంకట కృష్ణ ఆధునిక బియ్యం మిల్లు. అన్ని హక్కులు రక్షించబడ్డాయి.',
      },
    },
  };

  var HERO_SLIDE_LABELS = ['mill exterior photo', 'rice fields photo', 'rice grains close-up', 'packaging photo'];
  var MAPS_URL = 'https://www.google.com/maps/search/?api=1&query=Keshampet+Road,+Shadnagar,+509216,+Telangana';

  var SERVE_ICON_CLASSES = ['icon-store', 'icon-warehouse', 'icon-cart', 'icon-ring', 'icon-hotel', 'icon-caterer', 'icon-institution', 'icon-corporate'];
  var SERVE_ICON_HTML = [
    '<div class="tri"></div><div class="body"></div><div class="door"></div>',
    '<div class="roof"></div><div class="body"></div><div class="win1"></div><div class="win2"></div>',
    '<div class="basket"></div><div class="wheel1"></div><div class="wheel2"></div>',
    '<div class="circle"></div>',
    '<div class="base"></div><div class="pillow"></div><div class="leg1"></div><div class="leg2"></div>',
    '<div class="dome"></div><div class="tray"></div><div class="knob"></div>',
    '<div class="diamond"></div><div class="stem"></div>',
    '<div class="building"></div><div class="roofline"></div><div class="doorway"></div>',
  ];

  var state = {
    page: 'home',
    lang: 'en',
    form: { name: '', phone: '', product: 'Rice', message: '' },
    formSubmitted: false,
    heroSlideIndex: 0,
  };

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function t() { return CONTENT[state.lang] || CONTENT.en; }

  function renderNav() {
    var c = t();
    function link(page, label) {
      return '<button class="nav-link' + (state.page === page ? ' active' : '') + '" data-action="goto" data-value="' + page + '">' + esc(label) + '</button>';
    }
    return (
      '<div class="navbar">' +
        '<img src="assets/logo-full.png" alt="Sri Venkata Krishna Modern Ricemill" class="navbar-logo" data-action="goto" data-value="home" />' +
        '<div class="nav-right">' +
          link('home', c.nav.home) +
          link('about', c.nav.about) +
          link('products', c.nav.products) +
          link('contact', c.nav.contact) +
          '<div class="lang-toggle">' +
            '<button class="lang-btn' + (state.lang === 'en' ? ' active' : '') + '" data-action="lang" data-value="en">EN</button>' +
            '<button class="lang-btn' + (state.lang === 'te' ? ' active' : '') + '" data-action="lang" data-value="te">తె</button>' +
          '</div>' +
        '</div>' +
      '</div>'
    );
  }

  function renderHero(c) {
    var slides = HERO_SLIDE_LABELS.map(function (label, i) {
      return '<div class="hero-slide' + (i === state.heroSlideIndex ? ' active' : '') + '"><span>' + esc(label) + '</span></div>';
    }).join('');
    var dots = HERO_SLIDE_LABELS.map(function (_, i) {
      return '<span class="hero-dot' + (i === state.heroSlideIndex ? ' active' : '') + '"></span>';
    }).join('');
    return (
      '<div class="hero">' +
        '<div>' +
          '<div class="hero-kicker">' + esc(c.brandName) + ' · ' + esc(c.brandTag) + '</div>' +
          '<div class="hero-title">' + esc(c.hero.title) + '</div>' +
          '<div class="hero-subtitle">' + esc(c.hero.subtitle) + '</div>' +
          '<div class="hero-ctas">' +
            '<span class="btn btn-gold" data-action="goto" data-value="products">' + esc(c.hero.cta1) + '</span>' +
            '<span class="btn btn-outline" data-action="goto" data-value="contact">' + esc(c.hero.cta2) + '</span>' +
          '</div>' +
        '</div>' +
        '<div class="hero-visual">' + slides + '<div class="hero-dots">' + dots + '</div></div>' +
      '</div>'
    );
  }

  function renderHome(c) {
    var trust = c.trust.map(function (item) {
      return (
        '<div>' +
          '<div class="trust-mark">' + esc(item.mark) + '</div>' +
          '<div class="trust-title">' + esc(item.title) + '</div>' +
          '<div class="trust-desc">' + esc(item.desc) + '</div>' +
        '</div>'
      );
    }).join('');

    var productMini = c.products.items.map(function (p) {
      return (
        '<div class="product-mini-card">' +
          '<div class="product-mini-photo"><span>[ ' + esc(p.photoLabel) + ' ]</span></div>' +
          '<div class="product-mini-name">' + esc(p.name) + '</div>' +
        '</div>'
      );
    }).join('');

    return (
      renderHero(c) +
      '<div class="trust-grid">' + trust + '</div>' +
      '<div class="about-teaser">' +
        '<div class="placeholder-photo"><span>[ founders / family photo ]</span></div>' +
        '<div>' +
          '<div class="eyebrow">' + esc(c.about.storyTitle) + '</div>' +
          '<div class="about-teaser-title">' + esc(c.aboutTeaser.title) + '</div>' +
          '<div class="about-teaser-text">' + esc(c.aboutTeaser.text) + '</div>' +
          '<span class="link-cta" data-action="goto" data-value="about">' + esc(c.aboutTeaser.cta) + ' &rarr;</span>' +
        '</div>' +
      '</div>' +
      '<div class="products-teaser">' +
        '<div class="section-title-center">' + esc(c.productsTeaser.title) + '</div>' +
        '<div class="products-teaser-grid">' + productMini + '</div>' +
        '<div class="center"><span class="btn btn-dark" data-action="goto" data-value="products">' + esc(c.productsTeaser.cta) + '</span></div>' +
      '</div>' +
      '<div class="cta-banner">' +
        '<div class="cta-banner-text">' + esc(c.ctaBanner) + '</div>' +
        '<span class="btn btn-dark" data-action="goto" data-value="contact">' + esc(c.hero.cta2) + '</span>' +
      '</div>'
    );
  }

  function renderAbout(c) {
    var founders = c.about.founders.map(function (f) {
      return (
        '<div class="founder-card">' +
          '<div class="founder-avatar">' + esc(f.initials) + '</div>' +
          '<div class="founder-name">' + esc(f.name) + '</div>' +
          '<div class="founder-role">' + esc(f.role) + '</div>' +
        '</div>'
      );
    }).join('');

    var values = c.about.values.map(function (v) {
      return (
        '<div class="value-card">' +
          '<div class="value-title">' + esc(v.title) + '</div>' +
          '<div class="value-desc">' + esc(v.desc) + '</div>' +
        '</div>'
      );
    }).join('');

    var serve = c.about.serve.map(function (label, i) {
      return (
        '<div class="serve-item">' +
          '<div class="serve-icon-circle"><div class="serve-icon-inner ' + SERVE_ICON_CLASSES[i] + '">' + SERVE_ICON_HTML[i] + '</div></div>' +
          '<span class="label">' + esc(label) + '</span>' +
        '</div>'
      );
    }).join('');

    return (
      '<div class="header-band"><div class="page-title">' + esc(c.about.title) + '</div></div>' +
      '<div class="about-story-section">' +
        '<div class="placeholder-photo"><span>[ mill facility photo ]</span></div>' +
        '<div>' +
          '<div class="eyebrow">' + esc(c.about.storyTitle) + '</div>' +
          '<div class="about-story-text">' + esc(c.about.story) + '</div>' +
        '</div>' +
      '</div>' +
      '<div class="founders-section"><div class="founders-grid">' + founders + '</div></div>' +
      '<div class="values-section">' +
        '<div class="section-title-center">' + esc(c.about.valuesTitle) + '</div>' +
        '<div class="values-grid">' + values + '</div>' +
      '</div>' +
      '<div class="serve-section">' +
        '<div class="serve-title">' + esc(c.about.serveTitle) + '</div>' +
        '<div class="serve-underline"></div>' +
        '<div class="serve-grid">' + serve + '</div>' +
      '</div>'
    );
  }

  function renderProducts(c) {
    var cards = c.products.items.map(function (p) {
      return (
        '<div class="product-card">' +
          '<div class="product-card-photo"><span>[ ' + esc(p.photoLabel) + ' ]</span></div>' +
          '<div class="product-card-body">' +
            '<div class="product-card-name">' + esc(p.name) + '</div>' +
            '<div class="product-card-desc">' + esc(p.desc) + '</div>' +
          '</div>' +
        '</div>'
      );
    }).join('');

    function brandItem(b) {
      return (
        '<div class="brand-item">' +
          '<div class="brand-logo"><span>[ logo ]</span></div>' +
          '<span class="brand-name">' + esc(b) + '</span>' +
        '</div>'
      );
    }
    var row1 = c.products.brands.slice(0, 4);
    var row2 = c.products.brands.slice(4, 8);
    var row1html = row1.concat(row1).map(brandItem).join('');
    var row2html = row2.concat(row2).map(brandItem).join('');

    var sizes = c.products.sizes.map(function (sz) {
      return (
        '<div class="size-item">' +
          '<div class="size-label">' + esc(sz.size) + '</div>' +
          '<div class="bag-tie"></div>' +
          '<div class="bag-body">' +
            '<div class="bag-seal"><img src="assets/logo-mark.png" alt="" /></div>' +
            '<div class="bag-label">PACKED FOR<br/>FRESHNESS</div>' +
          '</div>' +
          '<div class="bag-shadow"></div>' +
        '</div>'
      );
    }).join('');

    return (
      '<div class="header-band">' +
        '<div class="page-title">' + esc(c.products.title) + '</div>' +
        '<div class="page-subtitle">' + esc(c.products.subtitle) + '</div>' +
      '</div>' +
      '<div class="products-page-grid"><div class="grid-inner">' + cards + '</div></div>' +
      '<div class="brands-section">' +
        '<div class="brands-title">' + esc(c.products.brandsTitle) + '</div>' +
        '<div class="brands-rows">' +
          '<div class="marquee-mask"><div class="marquee-track marquee-ltr">' + row1html + '</div></div>' +
          '<div class="marquee-mask"><div class="marquee-track marquee-rtl">' + row2html + '</div></div>' +
          '<div class="center"><span class="brands-more">' + esc(c.products.brandsMore) + '</span></div>' +
        '</div>' +
      '</div>' +
      '<div class="packaging-section">' +
        '<div class="packaging-title">' + esc(c.products.packagingTitle) + '</div>' +
        '<div class="packaging-note">' + esc(c.products.packagingNote) + '</div>' +
        '<div class="packaging-sizes">' + sizes + '</div>' +
      '</div>'
    );
  }

  function renderContact(c) {
    var productOptions = c.products.items.map(function (p) {
      return '<option value="' + esc(p.name) + '"' + (state.form.product === p.name ? ' selected' : '') + '>' + esc(p.name) + '</option>';
    }).join('');

    var formBlock;
    if (state.formSubmitted) {
      formBlock =
        '<div class="form-thanks">' +
          '<div class="form-thanks-text">' + esc(c.contact.formThanks) + '</div>' +
          '<button class="form-reset" data-action="reset-form">&#8634;</button>' +
        '</div>';
    } else {
      formBlock =
        '<form id="contact-form">' +
          '<div class="form-group">' +
            '<div class="form-label">' + esc(c.contact.formName) + '</div>' +
            '<input type="text" class="form-input" id="field-name" value="' + esc(state.form.name) + '" required />' +
          '</div>' +
          '<div class="form-group">' +
            '<div class="form-label">' + esc(c.contact.formPhone) + '</div>' +
            '<input type="tel" class="form-input" id="field-phone" value="' + esc(state.form.phone) + '" required />' +
          '</div>' +
          '<div class="form-group">' +
            '<div class="form-label">' + esc(c.contact.formProduct) + '</div>' +
            '<select class="form-select" id="field-product">' + productOptions + '</select>' +
          '</div>' +
          '<div class="form-group">' +
            '<div class="form-label">' + esc(c.contact.formMessage) + '</div>' +
            '<textarea class="form-textarea" id="field-message" rows="4">' + esc(state.form.message) + '</textarea>' +
          '</div>' +
          '<button type="submit" class="form-submit">' + esc(c.contact.formSubmit) + '</button>' +
        '</form>';
    }

    var people = c.contact.people.map(function (p) {
      return (
        '<div class="call-person">' +
          '<div class="call-person-name">' + esc(p.name) + '</div>' +
          '<a class="call-person-phone" href="' + esc(p.tel) + '">' + esc(p.phone) + '</a>' +
        '</div>'
      );
    }).join('');

    return (
      '<div class="header-band">' +
        '<div class="page-title">' + esc(c.contact.title) + '</div>' +
        '<div class="page-subtitle">' + esc(c.contact.subtitle) + '</div>' +
      '</div>' +
      '<div class="contact-grid">' +
        '<div class="contact-form-card">' + formBlock + '</div>' +
        '<div class="contact-side">' +
          '<div class="call-card">' +
            '<div class="call-card-title">' + esc(c.contact.phoneTitle) + '</div>' +
            people +
          '</div>' +
          '<div class="address-card">' +
            '<div class="address-card-title">' + esc(c.contact.addressTitle) + '</div>' +
            '<div class="address-text">' + esc(c.contact.address) + '</div>' +
            '<a class="directions-btn" href="' + MAPS_URL + '" target="_blank" rel="noopener">' + esc(c.contact.directions) + ' &rarr;</a>' +
          '</div>' +
        '</div>' +
      '</div>'
    );
  }

  function renderFooter(c) {
    return (
      '<div class="footer">' +
        '<div class="footer-grid">' +
          '<div>' +
            '<img src="assets/logo-mark.png" alt="logo" class="footer-logo" />' +
            '<div class="footer-brand-name">' + esc(c.brandName) + '</div>' +
            '<div class="footer-tagline">' + esc(c.footer.tagline) + '</div>' +
          '</div>' +
          '<div>' +
            '<div class="footer-col-title">' + esc(c.footer.quickLinks) + '</div>' +
            '<div class="footer-links">' +
              '<span data-action="goto" data-value="home">' + esc(c.nav.home) + '</span>' +
              '<span data-action="goto" data-value="about">' + esc(c.nav.about) + '</span>' +
              '<span data-action="goto" data-value="products">' + esc(c.nav.products) + '</span>' +
              '<span data-action="goto" data-value="contact">' + esc(c.nav.contact) + '</span>' +
            '</div>' +
          '</div>' +
          '<div>' +
            '<div class="footer-col-title">' + esc(c.contact.phoneTitle) + '</div>' +
            '<div class="footer-contact-lines">' +
              '<div>' + esc(c.contact.people[0].phone) + '</div>' +
              '<div>' + esc(c.contact.people[1].phone) + '</div>' +
              '<div style="margin-top:10px;">' + esc(c.contact.address) + '</div>' +
            '</div>' +
          '</div>' +
        '</div>' +
        '<div class="footer-bottom">' + esc(c.footer.rights) + '</div>' +
      '</div>'
    );
  }

  function render() {
    var c = t();
    document.documentElement.lang = state.lang === 'te' ? 'te' : 'en';
    var pageHtml;
    if (state.page === 'about') pageHtml = renderAbout(c);
    else if (state.page === 'products') pageHtml = renderProducts(c);
    else if (state.page === 'contact') pageHtml = renderContact(c);
    else pageHtml = renderHome(c);

    var app = document.getElementById('app');
    app.innerHTML =
      '<div class="site-wrap">' +
        renderNav() +
        '<div>' + pageHtml + '</div>' +
        renderFooter(c) +
      '</div>';
  }

  function bindFormEvents() {
    var nameEl = document.getElementById('field-name');
    var phoneEl = document.getElementById('field-phone');
    var productEl = document.getElementById('field-product');
    var messageEl = document.getElementById('field-message');
    var formEl = document.getElementById('contact-form');
    if (nameEl) nameEl.addEventListener('input', function (e) { state.form.name = e.target.value; });
    if (phoneEl) phoneEl.addEventListener('input', function (e) { state.form.phone = e.target.value; });
    if (productEl) productEl.addEventListener('change', function (e) { state.form.product = e.target.value; });
    if (messageEl) messageEl.addEventListener('input', function (e) { state.form.message = e.target.value; });
    if (formEl) {
      formEl.addEventListener('submit', function (e) {
        e.preventDefault();
        state.formSubmitted = true;
        render();
        bindFormEvents();
      });
    }
  }

  var VALID_PAGES = ['home', 'about', 'products', 'contact'];

  function applyHash(forceRender) {
    var h = (window.location.hash || '').replace('#', '');
    var page = VALID_PAGES.indexOf(h) !== -1 ? h : 'home';
    var changed = page !== state.page;
    state.page = page;
    if (changed || forceRender) {
      render();
      if (state.page === 'contact') bindFormEvents();
    }
  }

  window.addEventListener('hashchange', function () {
    applyHash(false);
    window.scrollTo(0, 0);
  });

  document.addEventListener('click', function (e) {
    var target = e.target.closest('[data-action]');
    if (!target) return;
    var action = target.getAttribute('data-action');
    var value = target.getAttribute('data-value');

    if (action === 'goto') {
      if (window.location.hash.replace('#', '') === value) {
        window.scrollTo(0, 0);
      } else {
        window.location.hash = value;
        window.scrollTo(0, 0);
      }
    } else if (action === 'lang') {
      state.lang = value;
      render();
      if (state.page === 'contact') bindFormEvents();
    } else if (action === 'reset-form') {
      state.formSubmitted = false;
      state.form = { name: '', phone: '', product: 'Rice', message: '' };
      render();
      bindFormEvents();
    }
  });

  setInterval(function () {
    state.heroSlideIndex = (state.heroSlideIndex + 1) % HERO_SLIDE_LABELS.length;
    if (state.page === 'home') {
      var visual = document.querySelector('.hero-visual');
      if (visual) {
        var slides = visual.querySelectorAll('.hero-slide');
        var dots = visual.querySelectorAll('.hero-dot');
        slides.forEach(function (s, i) { s.classList.toggle('active', i === state.heroSlideIndex); });
        dots.forEach(function (d, i) { d.classList.toggle('active', i === state.heroSlideIndex); });
      }
    }
  }, 5000);

  applyHash(true);
})();
