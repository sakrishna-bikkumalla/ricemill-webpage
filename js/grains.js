/*
 * Scroll-linked "paddy to rice" grain layer.
 *
 * A fixed, full-viewport layer of drifting grain sprites sits above each
 * section's background but below its text (see the z-index rules in
 * styles.css). As a grain descends past the middle of the hero it peels:
 * the paddy image cross-fades into milled rice and the husk spins away.
 * The whole layer is faded out before the products teaser arrives.
 *
 * Ported from the Claude Design artboard "Paddy to rice animation".
 * Desktop (> 900px) reproduces that artboard exactly; narrower viewports
 * get a lighter version of the same effect — see TUNING below.
 */
(function () {
  'use strict';

  var VARIANTS = [
    { paddy: 'assets/grains/paddy-1.png', rice: 'assets/grains/rice-1.png', ar: 38 / 63 },
    { paddy: 'assets/grains/paddy-2.png', rice: 'assets/grains/rice-2.png', ar: 45 / 55 },
    { paddy: 'assets/grains/paddy-3.png', rice: 'assets/grains/rice-3.png', ar: 35 / 61 },
  ];

  var GRAIN_OPACITY = 0.85;
  var SEED = 20250901;

  /* TUNING ----------------------------------------------------------------
   * The artboard's 70 grains are scaled for a ~1500px viewport. Dropped onto
   * a 375px phone that same count reads as clutter (roughly 4x the grains per
   * horizontal pixel) and costs 140 image layers of work every scroll frame.
   * So count and size both scale down with the viewport, on the breakpoints
   * the stylesheet already uses. Above 900px nothing changes.
   */
  var TABLET_MAX = 900;
  var PHONE_MAX = 520;

  function grainCountFor(w) {
    if (w > TABLET_MAX) return 70; // desktop — the design's own value
    if (w > PHONE_MAX) return 42;
    return 22;
  }

  // Grain height has to stay in proportion to viewport width, not to itself.
  // Desktop's largest grain is 48px on ~1500px — about 3% of the width. Left
  // unscaled on a 390px phone that same grain covers nearly 13% and competes
  // with the headline, so it is scaled back toward the desktop ratio.
  function grainScaleFor(w) {
    if (w > TABLET_MAX) return 1; // desktop — the design's own sizing
    if (w > PHONE_MAX) return 0.65;
    return 0.45;
  }

  // Seeded PRNG so the scatter is identical on every load.
  function mulberry(a) {
    return function () {
      a |= 0; a = (a + 0x6D2B79F5) | 0;
      var t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  function clamp01(v) { return v < 0 ? 0 : v > 1 ? 1 : v; }
  function smooth(v) { return v * v * (3 - 2 * v); }

  var layer = null;
  var nodes = [];
  var grains = [];
  var hero = null;
  var products = null;
  var active = false;
  var frozen = false;
  var raf = 0;

  // Cached viewport. On phones the address bar collapsing fires resize with a
  // changed height and an unchanged width; recomputing from that would shift
  // every grain mid-scroll, so the cache is only refreshed when the width
  // actually moves. See onResize.
  var vw = 0;
  var vh = 0;
  var lastW = -1;

  function buildGrains(count, scale) {
    var rnd = mulberry(SEED);
    var out = [];
    for (var i = 0; i < count; i++) {
      // The rnd() call order below is load-bearing: it is what makes the
      // desktop scatter identical to the artboard. Scale is applied to the
      // result, never to the draw order.
      var v = Math.floor(rnd() * VARIANTS.length);
      var h = (14 + rnd() * 34) * scale;
      out.push({
        i: i,
        paddy: VARIANTS[v].paddy,
        rice: VARIANTS[v].rice,
        h: h,
        w: h * VARIANTS[v].ar,
        x: rnd(),
        phase: rnd(),
        speed: 0.45 + rnd() * 0.6,
        sway: (8 + rnd() * 26) * scale,
        rot: -40 + rnd() * 80,
        spin: (rnd() < 0.5 ? -1 : 1) * (20 + rnd() * 50),
      });
    }
    return out;
  }

  function populate() {
    grains = buildGrains(grainCountFor(vw), grainScaleFor(vw));
    var html = '';
    for (var k = 0; k < grains.length; k++) {
      html +=
        '<div class="grain">' +
          '<img alt="" decoding="async" draggable="false" />' +
          '<img alt="" class="grain-rice" decoding="async" draggable="false" />' +
          '<div class="grain-husk"></div>' +
        '</div>';
    }
    layer.innerHTML = html;
    nodes = [].slice.call(layer.children);
  }

  function createLayer() {
    layer = document.createElement('div');
    layer.className = 'grain-layer';
    layer.setAttribute('aria-hidden', 'true');
    populate();
    document.body.appendChild(layer);
  }

  function hide() {
    if (!layer) return;
    layer.style.opacity = '0';
    layer.style.visibility = 'hidden';
  }

  function tick() {
    if (!layer) return;
    if (!active) { hide(); return; }

    var sy = frozen ? 0 : window.scrollY;

    // Grains live in the upper half of the page: full strength through the
    // hero and trust row, gone by the time the products teaser arrives.
    var fade = 1;
    if (products) {
      var top = products.getBoundingClientRect().top + sy;
      var a = top - vh * 1.5, b = top - vh * 0.35;
      fade = 1 - clamp01((sy - a) / Math.max(1, b - a));
    }
    layer.style.opacity = (GRAIN_OPACITY * fade).toFixed(3);
    layer.style.visibility = fade <= 0.001 ? 'hidden' : 'visible';
    if (fade <= 0.001) return;

    var heroBox = hero ? hero.getBoundingClientRect() : null;
    var heroTop = heroBox ? heroBox.top + sy : 0;
    var heroBottom = heroBox ? heroBox.bottom + sy : 0;
    var travel = vh + 200;

    // Peeling is keyed to the grain's height on the page: it begins partway
    // down the green hero and completes as the grain leaves the green, so no
    // white rice ever sits on the green background.
    var peelStart = heroTop + (heroBottom - heroTop) * 0.45;
    var peelSpan = Math.max(1, heroBottom - peelStart);

    for (var k = 0; k < grains.length; k++) {
      var g = grains[k];
      var node = nodes[g.i];
      if (!node) continue;

      if (!node._sized) {
        node.style.width = g.w.toFixed(1) + 'px';
        node.style.height = g.h.toFixed(1) + 'px';
        node.children[0].src = g.paddy;
        node.children[1].src = g.rice;
        node._sized = true;
      }

      var yr = ((g.phase + (sy * g.speed) / travel) % 1 + 1) % 1;
      var y = yr * travel - 100;
      var x = g.x * (vw - g.w) + Math.sin(yr * 6.283 + g.phase * 7) * g.sway;

      var pageY = sy + y + g.h / 2;
      var p = clamp01((pageY - peelStart) / peelSpan);
      var m = smooth(p);

      node.style.transform =
        'translate3d(' + x.toFixed(1) + 'px,' + y.toFixed(1) + 'px,0) rotate(' +
        (g.rot + yr * g.spin).toFixed(1) + 'deg)';

      var paddy = node.children[0], rice = node.children[1], husk = node.children[2];
      paddy.style.opacity = (1 - m).toFixed(3);
      rice.style.opacity = m.toFixed(3);

      // Husk peels off at the flip and falls faster than the grain.
      var hp = clamp01((p - 0.08) / 0.92);
      husk.style.opacity = (hp > 0 && hp < 1 ? Math.sin(hp * Math.PI) * 0.9 : 0).toFixed(3);
      husk.style.transform =
        'translate(' + (hp * g.h * 0.55).toFixed(1) + 'px,' + (hp * g.h * 1.6).toFixed(1) +
        'px) rotate(' + (hp * 260).toFixed(0) + 'deg) scale(' + (1 - hp * 0.4).toFixed(2) + ')';

      // Fade in and out at the wrap points so recycling is invisible.
      node.style.opacity = Math.min(1, yr / 0.09, (1 - yr) / 0.09).toFixed(3);
    }
  }

  function onScroll() {
    if (raf) return;
    raf = requestAnimationFrame(function () { raf = 0; tick(); });
  }

  function onResize() {
    var w = window.innerWidth;

    // Height-only resize on a phone is the address bar, not a real viewport
    // change — ignore it so the grains hold their positions.
    if (w === lastW && w <= TABLET_MAX) { onScroll(); return; }

    lastW = w;
    vw = w;
    vh = window.innerHeight;

    // Crossing a breakpoint changes how many grains belong on screen.
    if (grainCountFor(vw) !== grains.length) {
      populate();
      refresh();
      return;
    }
    onScroll();
  }

  // Called after every re-render: the page markup is rebuilt, so the elements
  // the fade is keyed to have to be looked up again.
  function refresh() {
    hero = document.querySelector('.hero');
    products = document.querySelector('.products-teaser');
    active = !!hero; // home page only
    tick();
  }

  function init() {
    frozen = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    vw = window.innerWidth;
    vh = window.innerHeight;
    lastW = vw;
    createLayer();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    window.addEventListener('orientationchange', onResize);
    refresh();
  }

  window.RiceGrains = { init: init, refresh: refresh };
})();
