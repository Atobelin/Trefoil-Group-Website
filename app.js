/* =========================================================================
   三叶 Trefoil Group — app.js
   ES5。内容全部来自 ./data.js (window.SITE)。
   ========================================================================= */
(function () {
  'use strict';

  var S = window.SITE || {};
  var STORE = 'trefoil-lang';
  var LANG = 'zh';

  /* 无 i18n key 的标签，在此硬编码中英文对照 */
  var LBL = {
    email:    { zh: '邮箱',   en: 'Email' },
    site:     { zh: '主页',   en: 'Homepage' },
    wechat:   { zh: '公众号', en: 'WeChat' },
    affil:    { zh: '依托单位', en: 'Based at' },
    contact:  { zh: '联系',   en: 'Contact' },
    areasN:   { zh: '研究方向', en: 'Research areas' },
    teamN:    { zh: '课题组成员', en: 'Group members' },
    partN:    { zh: '合作学者', en: 'Collaborating researchers' },
    qrNote:   { zh: '微信扫描二维码，关注课题组公众号。',
                en: 'Scan with WeChat to follow the group’s official account.' },
    mapNote:  { zh: '示意图：仅标示大致范围与相对位置，非精确地图。',
                en: 'Schematic locator: approximate area and relative position only; not a survey map.' },
    mapTitle: { zh: '课题组所在校区位置示意图',
                en: 'Schematic locator of the campus where the group is based' }
  };

  /* ------------------------------ 工具 ------------------------------ */

  function esc(s) {
    s = (s === null || s === undefined) ? '' : String(s);
    return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  function pick(o) {
    if (!o) { return ''; }
    if (typeof o === 'string') { return o; }
    return o[LANG] || o.zh || o.en || '';
  }

  function t(k) {
    var o = S.i18n ? S.i18n[k] : null;
    return o ? pick(o) : '';
  }

  function pad(i) {
    return (i < 9 ? '0' : '') + (i + 1);
  }

  /* data.js 里的 ./imgs/x.jpg 在站点根目录下直接可用，原样返回 */
  function fixPhoto(p) {
    if (!p) { return ''; }
    if (p.indexOf('imgs/') === 0) { return './' + p; }
    return p;
  }

  function frame(person, cls) {
    var pos = person.photoPos || '50% 50%';
    var z = person.photoZoom || 1;
    /* 无照片的条目显示 mark 里的姓氏字母标，形状交给 CSS 决定 */
    if (!person.photo) {
      return '<div class="frame frame--mark ' + cls + '" aria-hidden="true">' +
             '<span>' + esc(pick(person.mark) || '\u00b7\u00b7') + '</span></div>';
    }
    /* alt 留空：姓名就在紧邻的标题里，写上去读屏会连念两遍 */
    return '<div class="frame ' + cls + '">' +
      '<img src="' + esc(fixPhoto(person.photo)) + '" alt="" loading="lazy" ' +
      'style="object-position:' + esc(pos) + ';transform:scale(' + (Number(z) || 1) + ');transform-origin:' + esc(pos) + '">' +
      '</div>';
  }

  /* 链接一律用内联 SVG 图标；文字说明放 aria-label，随语言切换重渲染 */
  var ICON = { email: 'i-mail', site: 'i-globe', linkedin: 'i-in' };

  function iconLink(href, kind, label, blank) {
    return '<a class="ic" href="' + esc(href) + '" aria-label="' + esc(label) + '"' +
           (blank ? ' target="_blank" rel="noopener"' : '') + '>' +
           '<svg aria-hidden="true" focusable="false"><use href="#' + ICON[kind] + '"></use></svg>' +
           '</a>';
  }

  function linkList(links, cls, who) {
    if (!links) { return ''; }
    var out = [], suffix = who ? ('\uff1a' + who) : '';
    if (links.email) {
      out.push(iconLink('mailto:' + links.email, 'email', pick(LBL.email) + suffix, false));
    }
    if (links.site) {
      out.push(iconLink(links.site, 'site', pick(LBL.site) + suffix, true));
    }
    if (links.linkedin) {
      out.push(iconLink(links.linkedin, 'linkedin', 'LinkedIn' + suffix, true));
    }
    if (!out.length) { return ''; }
    return '<p class="iclinks ' + cls + '">' + out.join('') + '</p>';
  }

  function set(id, html) {
    var el = document.getElementById(id);
    if (el) { el.innerHTML = html; }
  }

  function txt(id, s) {
    var el = document.getElementById(id);
    if (el) { el.textContent = s; }
  }

  /* ------------------------------ 渲染 ------------------------------ */

  function renderStatic() {
    var n = document.querySelectorAll('[data-i18n]'), i;
    for (i = 0; i < n.length; i++) {
      n[i].textContent = t(n[i].getAttribute('data-i18n'));
    }
    var a = document.querySelectorAll('[data-i18n-aria]');
    for (i = 0; i < a.length; i++) {
      a[i].setAttribute('aria-label', t(a[i].getAttribute('data-i18n-aria')));
    }
    var ti = document.querySelectorAll('[data-i18n-title]');
    for (i = 0; i < ti.length; i++) {
      ti[i].setAttribute('title', t(ti[i].getAttribute('data-i18n-title')));
    }
    document.documentElement.lang = (LANG === 'zh') ? 'zh-CN' : 'en';
    var title = pick(S.meta && S.meta.title);
    if (title) { document.title = title; }
    /* meta description 原来写死在 HTML 里，切语言不跟着变，内容也和 data.js 对不上 */
    var md = document.querySelector('meta[name="description"]');
    var mdt = pick(S.meta && S.meta.description);
    if (md && mdt) { md.setAttribute('content', mdt); }
  }



  function renderAreas() {
    var list = S.areas || [], h = '', i;
    for (i = 0; i < list.length; i++) {
      h += '<li class="area">' +
             '<span class="area__n">' + pad(i) + '</span>' +
             '<h3>' + esc(pick(list[i].name)) + '</h3>' +
             '<p>' + esc(pick(list[i].desc)) + '</p>' +
           '</li>';
    }
    set('areas-list', h);
  }

  function renderTeam() {
    var list = S.team || [], h = '', i, m;
    for (i = 0; i < list.length; i++) {
      m = list[i];
      h += '<li class="mem">' +
             frame(m, 'mem__ph') +
             '<div class="mem__b">' +
               '<p class="mem__role">' + esc(pick(m.role)) + '</p>' +
               '<div class="mem__row">' +
                 '<h3 class="mem__name">' + esc(pick(m.name)) + '</h3>' +
                 linkList(m.links, 'mem__links', pick(m.name)) +
               '</div>' +
               '<p class="mem__affil">' + esc(pick(m.affil)) + '</p>' +
               '<p class="mem__bio">' + esc(pick(m.bio)) + '</p>' +
             '</div>' +
           '</li>';
    }
    set('team-list', h);
  }

  function renderPartners() {
    var list = (S.partners && S.partners.people) ? S.partners.people : [];
    var h = '', i, p;
    for (i = 0; i < list.length; i++) {
      p = list[i];
      h += '<li class="pc">' +
             frame(p, 'pc__ph') +
             '<div class="pc__b">' +
               '<h3 class="pc__name">' + esc(pick(p.name)) + '</h3>' +
               '<p class="pc__role">' + esc(pick(p.role)) + '</p>' +
               '<p class="pc__affil">' + esc(pick(p.affil)) + '</p>' +
               linkList(p.links, 'pc__links', pick(p.name)) +
             '</div>' +
           '</li>';
    }
    set('partners-list', h);
  }



  function itemsHTML(list) {
    var h = '', i;
    for (i = 0; i < list.length; i++) {
      h += '<li class="prow">' +
             '<span class="prow__n">' + pad(i) + '</span>' +
             '<div class="prow__b">' +
               '<h4>' + esc(pick(list[i].title)) + '</h4>' +
               '<p>' + esc(pick(list[i].desc)) + '</p>' +
             '</div>' +
           '</li>';
    }
    return h;
  }

  function renderOpenings() {
    var o = S.openings || [], c = S.collabs || [];
    set('openings-list', itemsHTML(o));
    set('collabs-list', itemsHTML(c));
  }

  function renderContact() {
    var c = S.contact || {};
    var mail = c.email || '';
    var addr = pick(c.address) || t('common.tbd');
    var h = '';

    h += '<div class="cx"><dt>' + esc(t('join.addrLabel')) + '</dt>' +
         '<dd>' + esc(addr) + '</dd></div>';

    h += '<div class="cx"><dt>' + esc(t('join.emailLabel')) + '</dt><dd>' +
         (mail ? '<a href="mailto:' + esc(mail) + '">' + esc(mail) + '</a>' : esc(t('common.tbd'))) +
         '</dd></div>';

    h += '<div class="cx"><dt>' + esc(pick(LBL.affil)) + '</dt>' +
         '<dd>' + esc(t('footer.affil')) + '</dd></div>';

    set('cinfo', h);
    txt('foot-contact-h', pick(LBL.contact));

    set('foot-qr',
      '<p class="foot__ch">' + esc(pick(LBL.wechat)) + '</p>' +
      '<img class="foot__qr" src="./imgs/code.jpg" width="344" height="344" alt="' +
      esc(pick(LBL.wechat)) + '" loading="lazy">' +
      '<p class="foot__qrn">' + esc(pick(LBL.qrNote)) + '</p>');

    if (mail) {
      var el = document.getElementById('ident-mail');
      if (el) { el.setAttribute('href', 'mailto:' + mail); }
    }
  }

  function renderFooter() {
    txt('foot-year', '\u00a9 ' + (new Date()).getFullYear());
  }

  function renderAll() {
    renderStatic();
    renderAreas();
    renderTeam();
    renderPartners();
    renderOpenings();
    renderContact();
    renderFooter();
  }

  /* ------------------------------ 交互 ------------------------------ */

  function initLang() {
    var saved = null;
    try { saved = window.localStorage.getItem(STORE); } catch (e) { saved = null; }
    if (saved === 'zh' || saved === 'en') { LANG = saved; }

    var btn = document.getElementById('lang-toggle');
    if (!btn) { return; }
    btn.onclick = function () {
      LANG = (LANG === 'zh') ? 'en' : 'zh';
      try { window.localStorage.setItem(STORE, LANG); } catch (e) {}
      renderAll();
      spy();
    };
  }

  function initNav() {
    var nav = document.getElementById('nav');
    var btn = document.getElementById('nav-toggle');
    if (!nav || !btn) { return; }

    function isOpen() { return nav.className.indexOf('is-open') > -1; }

    function setOpen(open, giveFocusBack) {
      nav.className = open ? 'nav is-open' : 'nav';
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
      /* 关闭后焦点原本掉到 body，键盘用户要从头 Tab 一遍 */
      if (!open && giveFocusBack) { btn.focus(); }
    }

    btn.onclick = function () { setOpen(!isOpen(), false); };

    var links = nav.getElementsByTagName('a'), i;
    for (i = 0; i < links.length; i++) {
      links[i].onclick = function () { setOpen(false, false); };
    }

    if (document.addEventListener) {
      /* Esc 关闭并把焦点交还给按钮 */
      document.addEventListener('keydown', function (e) {
        var k = e.key || e.keyIdentifier;
        if (isOpen() && (k === 'Escape' || k === 'Esc' || e.keyCode === 27)) {
          setOpen(false, true);
        }
      }, false);
      /* 点面板外关闭：面板是绝对定位盖在内容上的，点不回按钮就一直挡着 */
      document.addEventListener('click', function (e) {
        if (!isOpen()) { return; }
        var n = e.target;
        while (n) {
          if (n === nav || n === btn) { return; }
          n = n.parentNode;
        }
        setOpen(false, false);
      }, false);
    }
  }

  var SECS = ['top', 'about', 'areas', 'team', 'partners', 'openings', 'contact'];

  function spy() {
    var nav = document.getElementById('nav');
    if (!nav) { return; }
    var y = (window.pageYOffset || document.documentElement.scrollTop) + 140;
    var cur = SECS[0], i, el;
    for (i = 0; i < SECS.length; i++) {
      el = document.getElementById(SECS[i]);
      if (el && el.offsetTop <= y) { cur = SECS[i]; }
    }
    var links = nav.getElementsByTagName('a');
    for (i = 0; i < links.length; i++) {
      if (links[i].getAttribute('href') === '#' + cur) {
        links[i].className = 'is-on';
        links[i].setAttribute('aria-current', 'true');
      } else {
        links[i].className = '';
        links[i].removeAttribute('aria-current');
      }
    }
  }

  function initSpy() {
    var ticking = false;
    function onScroll() {
      if (ticking) { return; }
      ticking = true;
      window.setTimeout(function () { ticking = false; spy(); }, 120);
    }
    if (window.addEventListener) {
      window.addEventListener('scroll', onScroll, false);
      window.addEventListener('resize', onScroll, false);
    }
    spy();
  }

  function boot() {
    initLang();
    renderAll();
    initNav();
    initSpy();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot, false);
  } else {
    boot();
  }
})();