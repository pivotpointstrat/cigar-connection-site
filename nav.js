// Mobile navigation for the Cigar Connection site.
//
// Below 860px the five nav links collapse behind a hamburger button. That
// collapse is scoped to `html.js` in the CSS (the class is set inline in each
// page's <head>), so if this file fails to load the links stay visible and the
// site is still navigable instead of losing its menu.
(function () {
  var header = document.querySelector('.site-header');
  var nav = document.getElementById('main-nav');
  var toggle = document.querySelector('.nav-toggle');
  if (!header || !nav || !toggle) return;

  function isOpen() {
    return nav.classList.contains('is-open');
  }

  function setOpen(open) {
    nav.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    document.body.classList.toggle('nav-open', open);
  }

  toggle.addEventListener('click', function () {
    setOpen(!isOpen());
  });

  // Tapping a link navigates away, so close the panel straight away rather
  // than leaving it open behind the incoming page.
  nav.addEventListener('click', function (e) {
    if (e.target.closest && e.target.closest('a')) setOpen(false);
  });

  // Escape closes and puts focus back on the button, so keyboard users are
  // not stranded.
  document.addEventListener('keydown', function (e) {
    if ((e.key === 'Escape' || e.key === 'Esc') && isOpen()) {
      setOpen(false);
      toggle.focus();
    }
  });

  // Tapping anywhere outside the header closes it.
  document.addEventListener('click', function (e) {
    if (isOpen() && !header.contains(e.target)) setOpen(false);
  });

  // A window widened past the breakpoint while the panel is open must not
  // leave the body scroll-locked.
  window.addEventListener('resize', function () {
    if (window.innerWidth > 860 && isOpen()) setOpen(false);
  });
})();
