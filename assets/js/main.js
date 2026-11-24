/* =========================================================
   Portfólio — interações e animações
   GSAP + ScrollTrigger (com fallback total se a CDN falhar)
   ========================================================= */
(function () {
  "use strict";

  var root = document.documentElement;
  var hasGSAP = typeof window.gsap !== "undefined" && typeof window.ScrollTrigger !== "undefined";
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  var animate = hasGSAP && !reduceMotion;

  window.__animReady = true;
  if (!animate) root.classList.add("no-anim");

  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };

  /* ---------------- Idioma ---------------- */
  var lang = "pt";
  try { lang = localStorage.getItem("lang") || (navigator.language || "pt").slice(0, 2); } catch (e) { /* ignorado */ }
  if (lang !== "en") lang = "pt";

  var ptText = {};
  $$("[data-i18n]").forEach(function (el) { ptText[el.dataset.i18n] = el.textContent; });
  $$("[data-i18n-html]").forEach(function (el) { ptText[el.dataset.i18nHtml] = el.innerHTML; });

  function t(key) {
    if (lang === "en" && window.I18N_EN && window.I18N_EN[key] != null) return window.I18N_EN[key];
    if (window.I18N_PT_UI && window.I18N_PT_UI[key] != null) return window.I18N_PT_UI[key];
    return ptText[key] != null ? ptText[key] : key;
  }
  function tv(v) { return v && typeof v === "object" ? (v[lang] != null ? v[lang] : v.pt) : (v || ""); }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function applyLang(next, firstRun) {
    lang = next;
    root.lang = lang === "en" ? "en" : "pt-BR";
    try { localStorage.setItem("lang", lang); } catch (e) { /* ignorado */ }

    $$("[data-i18n]").forEach(function (el) { el.textContent = t(el.dataset.i18n); });
    $$("[data-i18n-html]").forEach(function (el) { el.innerHTML = t(el.dataset.i18nHtml); });
    $$(".lang__btn").forEach(function (b) {
      var on = b.dataset.lang === lang;
      b.classList.toggle("is-active", on);
      b.setAttribute("aria-pressed", on ? "true" : "false");
    });
    burger.setAttribute("aria-label", t(nav.classList.contains("is-open") ? "ui.menuClose" : "ui.menuOpen"));

    renderTabs();
    renderProject(current, !firstRun);
    if (!firstRun) {
      typeKicker();
      if (hasGSAP) ScrollTrigger.refresh();
    }
  }

  /* ---------------- Menu mobile ---------------- */
  var burger = $("#burger");
  var nav = $("#nav");
  function setMenu(open) {
    nav.classList.toggle("is-open", open);
    burger.setAttribute("aria-expanded", open ? "true" : "false");
    burger.setAttribute("aria-label", t(open ? "ui.menuClose" : "ui.menuOpen"));
  }
  burger.addEventListener("click", function () { setMenu(!nav.classList.contains("is-open")); });
  $$("a", nav).forEach(function (a) { a.addEventListener("click", function () { setMenu(false); }); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") setMenu(false); });

  /* ---------------- Rolagem suave nos links internos ---------------- */
  document.addEventListener("click", function (e) {
    var a = e.target.closest('a[href^="#"]');
    if (!a || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey) return;
    var id = a.getAttribute("href").slice(1);
    var target = id ? document.getElementById(id) : null;
    if (!target) return;
    e.preventDefault();
    var offset = id === "inicio" ? 0 : $("#header").offsetHeight;
    var top = id === "inicio" ? 0 : target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: Math.max(0, top), behavior: reduceMotion ? "auto" : "smooth" });
    if (history.pushState) history.pushState(null, "", "#" + id);
    if (id === "main") target.focus({ preventScroll: true });
  });

  /* ---------------- Header / progresso / nav ativa ---------------- */
  var header = $("#header");
  var progress = $(".progress");
  var lastY = window.scrollY;
  var ticking = false;
  function onScroll() {
    var y = window.scrollY;
    var max = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.transform = "scaleX(" + (max > 0 ? y / max : 0) + ")";
    var hide = y > lastY && y > 300 && !nav.classList.contains("is-open");
    header.classList.toggle("is-hidden", hide);
    lastY = y;
    ticking = false;
  }
  window.addEventListener("scroll", function () {
    if (!ticking) { ticking = true; requestAnimationFrame(onScroll); }
  }, { passive: true });
  onScroll();

  if ("IntersectionObserver" in window) {
    var links = $$(".nav a");
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        links.forEach(function (a) { a.classList.toggle("is-active", a.getAttribute("href") === "#" + en.target.id); });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    ["sobre", "trajetoria", "projetos", "contato"].forEach(function (id) {
      var s = document.getElementById(id); if (s) io.observe(s);
    });
  }

  /* ---------------- Projetos (abas) ---------------- */
  var projects = window.PROJECTS || [];
  var tabsEl = $("#project-tabs");
  var panel = $("#project-panel");
  var current = 0;

  var icoCode = '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M8 7l-5 5 5 5M16 7l5 5-5 5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  var icoPlay = '<svg viewBox="0 0 24 24" width="34" height="34" aria-hidden="true"><path d="M7 4l13 8-13 8z" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/></svg>';
  var icoChev = '<svg viewBox="0 0 24 24" width="14" height="14" aria-hidden="true"><path d="M9 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  function renderTabs() {
    tabsEl.innerHTML = projects.map(function (p, i) {
      var sel = i === current;
      return '<button type="button" class="tab" role="tab" id="tab-' + i + '" aria-controls="project-panel"' +
        ' aria-selected="' + sel + '" tabindex="' + (sel ? 0 : -1) + '" data-i="' + i + '">' +
        esc(t("ui.project")) + " " + (i + 1) + "</button>";
    }).join("");
  }

  function mediaHTML(p) {
    var src = p.media;
    if (!src) return '<div class="media__ph">' + icoPlay + "<span>" + esc(t("ui.media")) + "</span></div>";
    if (/\.(mp4|webm)$/i.test(src)) return '<video src="' + esc(src) + '" autoplay muted loop playsinline></video>';
    return '<img src="' + esc(src) + '" alt="' + esc(tv(p.caption)) + '" loading="lazy">';
  }

  function accHTML(list, prefix) {
    return list.map(function (s, i) {
      var id = prefix + "-" + i;
      return '<div class="acc">' +
        '<button type="button" class="acc__btn" aria-expanded="false" aria-controls="' + id + '">' +
        "<span>" + esc(tv(s.name)) + '</span><span class="acc__more">' + esc(t("ui.more")) + " " + icoChev + "</span></button>" +
        '<div class="acc__panel" id="' + id + '" role="region"><div><p>' + esc(tv(s.detail)) + "</p></div></div></div>";
    }).join("");
  }

  function projectHTML(p) {
    return '<div class="project__top">' +
        '<div><span class="project__date mono" data-anim>' + esc(tv(p.period)) + "</span>" +
        '<h3 class="project__name" data-anim>' + esc(tv(p.name)) + "</h3>" +
        '<p class="project__role" data-anim>' + esc(t("ui.role")) + ": <strong>" + esc(tv(p.role)) + "</strong></p></div>" +
        '<a class="btn btn--outline project__repo magnetic" data-anim href="' + esc(p.repo || "#") + '" target="_blank" rel="noopener">' + icoCode + esc(t("ui.repo")) + "</a>" +
      "</div>" +
      '<div class="project__grid">' +
        '<div class="project__copy" data-anim><h4>' + esc(t("ui.challenge")) + "</h4><p>" + tv(p.challenge) + "</p>" +
        "<h4>" + esc(t("ui.contrib")) + "</h4><p>" + tv(p.contributions) + "</p></div>" +
        '<figure style="margin:0" data-anim><div class="media">' + mediaHTML(p) + '</div><figcaption class="media-caption">' + esc(tv(p.caption)) + "</figcaption></figure>" +
      "</div>" +
      "<h4 data-anim>" + esc(t("ui.tech")) + "</h4>" +
      '<ul class="techs">' + (p.techs || []).map(function (x) {
        return "<li data-anim><strong>" + esc(tv(x.name)) + "</strong> <span>— " + esc(tv(x.use)) + "</span></li>";
      }).join("") + "</ul>" +
      '<div class="skillsets">' +
        "<div data-anim><h4>" + esc(t("ui.hard")) + "</h4>" + accHTML(p.hard || [], "hard") + "</div>" +
        "<div data-anim><h4>" + esc(t("ui.soft")) + "</h4>" + accHTML(p.soft || [], "soft") + "</div>" +
      "</div>";
  }

  function renderProject(i, withAnim) {
    if (!projects[i]) return;
    var draw = function () {
      current = i;
      panel.innerHTML = projectHTML(projects[i]);
      panel.setAttribute("aria-labelledby", "tab-" + i);
      bindMagnetic(panel);
      if (animate && withAnim) {
        gsap.fromTo(panel, { rotateX: 6, y: 24, autoAlpha: 0 }, { rotateX: 0, y: 0, autoAlpha: 1, duration: .6, ease: "power3.out", clearProps: "transform" });
        gsap.fromTo($$("[data-anim]", panel), { y: 18, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: .5, stagger: .035, ease: "power2.out", delay: .08 });
      }
    };
    if (animate && withAnim && panel.innerHTML) {
      gsap.to(panel, { y: -14, autoAlpha: 0, duration: .22, ease: "power2.in", onComplete: draw });
    } else {
      draw();
    }
  }

  function selectTab(i, focus) {
    if (i === current) return;
    $$(".tab", tabsEl).forEach(function (b, k) {
      b.setAttribute("aria-selected", k === i ? "true" : "false");
      b.tabIndex = k === i ? 0 : -1;
    });
    if (focus) tabsEl.children[i].focus();
    renderProject(i, true);
  }

  tabsEl.addEventListener("click", function (e) {
    var b = e.target.closest(".tab");
    if (b) selectTab(+b.dataset.i);
  });
  tabsEl.addEventListener("keydown", function (e) {
    var n = projects.length, i = current;
    if (e.key === "ArrowRight") i = (current + 1) % n;
    else if (e.key === "ArrowLeft") i = (current - 1 + n) % n;
    else if (e.key === "Home") i = 0;
    else if (e.key === "End") i = n - 1;
    else return;
    e.preventDefault();
    selectTab(i, true);
  });
  panel.addEventListener("click", function (e) {
    var b = e.target.closest(".acc__btn");
    if (!b) return;
    var acc = b.parentElement;
    var open = !acc.classList.contains("is-open");
    acc.classList.toggle("is-open", open);
    b.setAttribute("aria-expanded", open ? "true" : "false");
  });

  /* ---------------- Botões magnéticos ---------------- */
  function clamp(v, max) { return Math.max(-max, Math.min(max, v)); }
  function bindMagnetic(scope) {
    if (!animate || !finePointer) return;
    $$(".magnetic", scope).forEach(function (el) {
      if (el.__mag) return; el.__mag = true;
      var xTo = gsap.quickTo(el, "x", { duration: .4, ease: "power3.out" });
      var yTo = gsap.quickTo(el, "y", { duration: .4, ease: "power3.out" });
      el.addEventListener("mousemove", function (e) {
        var r = el.getBoundingClientRect();
        xTo(clamp((e.clientX - r.left - r.width / 2) * .15, 10));   // máx. 10px para não encostar no vizinho
        yTo(clamp((e.clientY - r.top - r.height / 2) * .3, 6));
      });
      el.addEventListener("mouseleave", function () { xTo(0); yTo(0); });
    });
  }

  /* ---------------- Digitação do "> olá, mundo" ---------------- */
  // Digita, pausa, apaga e digita o próximo "olá, mundo" — em loop.
  // A primeira saudação é sempre a do idioma escolhido (PT/EN).
  var GREETINGS = [
    { text: "olá, mundo", lang: "pt" },
    { text: "hello, world", lang: "en" },
    { text: "hola, mundo", lang: "es" },
    { text: "bonjour, le monde", lang: "fr" },
    { text: "hallo, welt", lang: "de" },
    { text: "ciao, mondo", lang: "it" },
    { text: "こんにちは、世界", lang: "ja" },
    { text: "привет, мир", lang: "ru" },
    { text: "你好，世界", lang: "zh" },
    { text: "merhaba, dünya", lang: "tr" },
    { text: "안녕, 세상", lang: "ko" },
    { text: "hej, världen", lang: "sv" },
    { text: "γεια σου, κόσμε", lang: "el" },
    { text: "नमस्ते, दुनिया", lang: "hi" }
  ];
  var typedEl = $(".typed");
  var caretEl = $(".caret");
  var typeTimer = null;
  var segmenter = window.Intl && Intl.Segmenter ? new Intl.Segmenter(undefined, { granularity: "grapheme" }) : null;
  function chars(s) {
    // separa por grafemas, para acentos e escritas como o hindi não quebrarem
    return segmenter ? Array.from(segmenter.segment(s), function (x) { return x.segment; }) : Array.from(s);
  }

  function typeKicker() {
    clearTimeout(typeTimer);
    var first = t("hero.kicker");
    if (!animate) { typedEl.textContent = first; return; }

    var list = [{ text: first, lang: lang }].concat(GREETINGS.filter(function (g) { return g.lang !== lang; }));
    var idx = 0, pos = 0, deleting = false, parts = chars(list[0].text);
    typedEl.textContent = "";

    function tick() {
      var delay;
      if (!deleting) {
        pos++;
        delay = 70 + Math.random() * 70;              // ritmo de digitação "humano"
        if (pos >= parts.length) { deleting = true; delay = 2200; } // pausa com a frase completa
      } else {
        pos--;
        delay = 35;                                   // apagar é mais rápido
        if (pos <= 0) {
          deleting = false;
          idx = (idx + 1) % list.length;
          parts = chars(list[idx].text);
          delay = 450;                                // pausa com o campo vazio
        }
      }
      typedEl.textContent = parts.slice(0, pos).join("");
      typedEl.setAttribute("lang", list[idx].lang);
      // cursor fica sólido enquanto digita/apaga e pisca nas pausas
      caretEl.classList.toggle("is-typing", delay < 400);
      typeTimer = setTimeout(tick, delay);
    }
    typeTimer = setTimeout(tick, 300);
  }

  /* ---------------- Partículas do hero ---------------- */
  function heroParticles() {
    var canvas = $(".hero__canvas");
    if (!canvas || reduceMotion || !canvas.getContext) return;
    var ctx = canvas.getContext("2d");
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var w, h, dots = [], running = true, mx = -9999, my = -9999;

    function resize() {
      w = canvas.clientWidth; h = canvas.clientHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      var count = Math.round(Math.min(90, (w * h) / 16000));
      dots = [];
      for (var i = 0; i < count; i++) {
        dots.push({
          x: Math.random() * w, y: Math.random() * h,
          vx: (Math.random() - .5) * .25, vy: (Math.random() - .5) * .25,
          r: Math.random() * 1.6 + .4, a: Math.random() * .5 + .15
        });
      }
    }
    function step() {
      if (!running) return;
      ctx.clearRect(0, 0, w, h);
      for (var i = 0; i < dots.length; i++) {
        var d = dots[i];
        d.x += d.vx; d.y += d.vy;
        if (d.x < 0) d.x = w; if (d.x > w) d.x = 0;
        if (d.y < 0) d.y = h; if (d.y > h) d.y = 0;
        var dx = d.x - mx, dy = d.y - my, dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) { d.x += dx / dist * .8; d.y += dy / dist * .8; }
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(127,179,38," + d.a + ")";
        ctx.fill();
        for (var j = i + 1; j < dots.length; j++) {
          var e = dots[j], ex = d.x - e.x, ey = d.y - e.y, dd = ex * ex + ey * ey;
          if (dd < 9000) {
            ctx.strokeStyle = "rgba(107,154,31," + (0.12 * (1 - dd / 9000)) + ")";
            ctx.lineWidth = 1;
            ctx.beginPath(); ctx.moveTo(d.x, d.y); ctx.lineTo(e.x, e.y); ctx.stroke();
          }
        }
      }
      requestAnimationFrame(step);
    }
    resize();
    window.addEventListener("resize", resize);
    canvas.parentElement.parentElement.addEventListener("mousemove", function (e) {
      var r = canvas.getBoundingClientRect(); mx = e.clientX - r.left; my = e.clientY - r.top;
    });
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(function (en) {
        var vis = en[0].isIntersecting;
        if (vis && !running) { running = true; requestAnimationFrame(step); }
        running = vis;
      }).observe(canvas);
    }
    requestAnimationFrame(step);
  }

  /* ---------------- Glow que segue o cursor ---------------- */
  function cursorGlow() {
    var g = $(".cursor-glow");
    if (!animate || !finePointer) return;
    var xTo = gsap.quickTo(g, "x", { duration: .6, ease: "power3.out" });
    var yTo = gsap.quickTo(g, "y", { duration: .6, ease: "power3.out" });
    window.addEventListener("mousemove", function (e) { g.classList.add("is-on"); xTo(e.clientX); yTo(e.clientY); });
    document.addEventListener("mouseleave", function () { g.classList.remove("is-on"); });
  }

  /* ---------------- Tilt 3D da foto ---------------- */
  function tilt() {
    if (!animate || !finePointer) return;
    $$(".tilt").forEach(function (el) {
      el.addEventListener("mousemove", function (e) {
        var r = el.getBoundingClientRect();
        var px = (e.clientX - r.left) / r.width - .5, py = (e.clientY - r.top) / r.height - .5;
        gsap.to(el, { rotateY: px * 10, rotateX: -py * 10, transformPerspective: 900, duration: .5, ease: "power2.out" });
      });
      el.addEventListener("mouseleave", function () { gsap.to(el, { rotateY: 0, rotateX: 0, duration: .8, ease: "elastic.out(1, .5)" }); });
    });
  }

  /* ---------------- Animações com scroll (GSAP) ---------------- */
  function scrollAnimations() {
    gsap.registerPlugin(ScrollTrigger);

    // Intro do hero
    var intro = gsap.timeline({ defaults: { ease: "power4.out" } });
    intro
      .fromTo(".header", { yPercent: -100 }, { yPercent: 0, duration: .9, clearProps: "transform" })
      .fromTo(".hero__photo", { scale: 1.25, autoAlpha: 0 }, { scale: 1.08, autoAlpha: .5, duration: 2, ease: "power2.out" }, 0)
      .fromTo(".hero__kicker", { autoAlpha: 0, x: -20 }, { autoAlpha: 1, x: 0, duration: .6, onStart: typeKicker }, .3)
      .fromTo(".line__inner", { yPercent: 110, autoAlpha: 0 }, { yPercent: 0, autoAlpha: 1, duration: 1.1, stagger: .12 }, .5)
      .fromTo(".hero__subtitle", { autoAlpha: 0, y: 24 }, { autoAlpha: 1, y: 0, duration: .8 }, .95)
      .fromTo(".hero__cta", { autoAlpha: 0, y: 24 }, { autoAlpha: 1, y: 0, duration: .8 }, 1.1)
      .fromTo(".hero__scroll", { autoAlpha: 0 }, { autoAlpha: 1, duration: .8 }, 1.4);

    // Parallax do hero ao rolar — valores explícitos: no topo da página
    // o conteúdo SEMPRE volta a opacidade 1 e posição 0
    var heroST = { trigger: ".hero", start: "top top", end: "bottom top", scrub: true, invalidateOnRefresh: true };
    gsap.fromTo(".hero__content", { yPercent: 0, opacity: 1 }, { yPercent: 30, opacity: .2, ease: "none", immediateRender: false, scrollTrigger: heroST });
    gsap.fromTo(".hero__bg", { yPercent: 0, opacity: 1 }, { yPercent: 12, opacity: .5, ease: "none", immediateRender: false, scrollTrigger: Object.assign({}, heroST) });

    // Reveals genéricos
    ScrollTrigger.batch(".reveal", {
      start: "top 88%", once: true,
      onEnter: function (els) {
        gsap.fromTo(els, { autoAlpha: 0, y: 40 }, { autoAlpha: 1, y: 0, duration: .9, stagger: .1, ease: "power3.out", overwrite: true });
      }
    });
    gsap.fromTo(".reveal-left", { autoAlpha: 0, x: -60, rotate: -3 }, {
      autoAlpha: 1, x: 0, rotate: 0, duration: 1.1, ease: "power3.out",
      scrollTrigger: { trigger: ".about", start: "top 80%", once: true }
    });
    gsap.fromTo(".about__frame", { x: -18, y: -18, autoAlpha: 0 }, {
      x: 0, y: 0, autoAlpha: 1, duration: 1, delay: .4, ease: "power3.out", clearProps: "transform",
      scrollTrigger: { trigger: ".about", start: "top 80%", once: true }
    });

    // Cards de skills + chips
    ScrollTrigger.batch(".reveal-stagger", {
      start: "top 88%", once: true,
      onEnter: function (els) {
        gsap.fromTo(els, { autoAlpha: 0, y: 60, scale: .96 }, { autoAlpha: 1, y: 0, scale: 1, duration: .8, stagger: .12, ease: "power3.out", clearProps: "transform" });
        els.forEach(function (card, k) {
          gsap.fromTo($$(".chips li", card), { autoAlpha: 0, y: 10 }, { autoAlpha: 1, y: 0, duration: .4, stagger: .05, delay: .3 + k * .12 });
        });
      }
    });

    // Timeline: linha que se preenche + itens entrando
    $$(".timeline__item").forEach(function (item) {
      gsap.fromTo($(".timeline__body", item), { autoAlpha: 0, x: 40 }, {
        autoAlpha: 1, x: 0, duration: .9, ease: "power3.out",
        scrollTrigger: { trigger: item, start: "top 85%", once: true }
      });
      gsap.fromTo($(".timeline__dot", item), { scale: 0 }, {
        scale: 1, duration: .7, ease: "back.out(3)",
        scrollTrigger: { trigger: item, start: "top 85%", once: true }
      });
      gsap.fromTo(item, { "--fill": 0 }, {
        "--fill": 1, ease: "none",
        scrollTrigger: {
          trigger: item, start: "top 60%", end: "bottom 60%", scrub: true,
          onToggle: function (self) { item.classList.toggle("is-active", self.isActive || self.progress === 1); },
          onLeave: function () { item.classList.add("is-active"); },
          onLeaveBack: function () { item.classList.remove("is-active"); }
        }
      });
    });

    // Painel de projetos
    gsap.fromTo($$("[data-anim]", panel), { y: 20, autoAlpha: 0 }, {
      y: 0, autoAlpha: 1, duration: .6, stagger: .04, ease: "power2.out",
      scrollTrigger: { trigger: panel, start: "top 80%", once: true }
    });

    // Contato: parallax da foto de fundo
    gsap.fromTo(".contact__bg img", { yPercent: -8 }, {
      yPercent: 8, ease: "none",
      scrollTrigger: { trigger: ".contact", start: "top bottom", end: "bottom top", scrub: true }
    });

    // Garante posições corretas depois que fontes e imagens carregarem
    window.addEventListener("load", function () { ScrollTrigger.refresh(); });
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(function () { ScrollTrigger.refresh(); });
  }

  /* ---------------- Init ---------------- */
  var yearEl = $("#year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  $$(".lang__btn").forEach(function (b) {
    b.addEventListener("click", function () { if (b.dataset.lang !== lang) applyLang(b.dataset.lang, false); });
  });

  applyLang(lang, true);
  heroParticles();

  if (animate) {
    scrollAnimations();
    cursorGlow();
    tilt();
    bindMagnetic(document);
  } else {
    typeKicker();
  }
})();
