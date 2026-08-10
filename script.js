// All the JavaScript on this site: the dark/light toggle, the collapsible
// mobile nav, the BibTeX copy buttons, and opening external links in a new
// tab. Everything else is plain HTML/CSS.
(function () {
  var root = document.documentElement;

  // --- dark / light toggle -------------------------------------
  function currentTheme() {
    var forced = root.getAttribute('data-theme');
    if (forced) return forced;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  var toggle = document.getElementById('theme-toggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      var next = currentTheme() === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
    });
  }

  // --- collapsible nav on small screens (☰) --------------------
  var burger = document.getElementById('nav-burger');
  var header = document.querySelector('.site-header');
  if (burger && header) {
    burger.addEventListener('click', function () {
      var open = header.classList.toggle('nav-open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    header.querySelectorAll('.site-nav a').forEach(function (a) {
      a.addEventListener('click', function () {
        header.classList.remove('nav-open');
        burger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // --- BibTeX copy buttons -------------------------------------
  document.querySelectorAll('.copy-bib').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var pre = btn.parentElement.querySelector('pre');
      navigator.clipboard.writeText(pre.textContent.trim()).then(function () {
        btn.textContent = 'Copied ✓';
        setTimeout(function () { btn.textContent = 'Copy'; }, 1600);
      });
    });
  });

  // --- external links open in a new tab ------------------------
  document.querySelectorAll('a[href^="http"]').forEach(function (a) {
    if (a.host !== window.location.host) {
      a.target = '_blank';
      a.rel = 'noopener';
    }
  });
})();
