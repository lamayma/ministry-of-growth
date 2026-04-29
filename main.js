/* ═══════════════════════════════════════════════════════════
   Ministry of Growth — main.js
   MOG-JS-001 / Rev. 2 — RU edition + carousel + tabs
═══════════════════════════════════════════════════════════ */

'use strict';

/* ── HUD Clock ─────────────────────────────────────────── */
function updateClock() {
  const el = document.getElementById('hud-clock');
  if (!el) return;
  const now = new Date();
  const h = String(now.getUTCHours()).padStart(2,'0');
  const m = String(now.getUTCMinutes()).padStart(2,'0');
  const s = String(now.getUTCSeconds()).padStart(2,'0');
  el.textContent = `${h}:${m}:${s} UTC`;
}
setInterval(updateClock, 1000);
updateClock();

/* ── Hero Carousel ──────────────────────────────────────── */
function initCarousel() {
  const slides = document.querySelectorAll('.carousel-slide');
  const dots   = document.querySelectorAll('.carousel-dot');
  if (!slides.length) return;

  let current = 0;
  let timer   = null;

  function updateHud(slide) {
    const obj      = slide.dataset.obj      || '041';
    const status   = slide.dataset.status   || 'СТАБИЛЕН';
    const codename = slide.dataset.codename || 'DRAGON';
    const cls      = slide.dataset.class    || 'B';

    const ids = {
      'hud-obj-num':      obj,
      'hud-codename':     codename,
      'hud-class':        cls,
      'hero-obj-num':     obj,
      'hero-obj-status':  status,
      'hero-obj-codename':codename
    };
    for (const [id, val] of Object.entries(ids)) {
      const el = document.getElementById(id);
      if (el) el.textContent = val;
    }

    // Update status chip colour
    const chip = document.querySelector('.status-chip.status-stable');
    if (chip) {
      chip.classList.toggle('status-warning', status === 'ПОД НАБЛЮДЕНИЕМ');
    }
  }

  function goTo(n) {
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = (n + slides.length) % slides.length;
    slides[current].classList.add('active');
    dots[current].classList.add('active');
    updateHud(slides[current]);
  }

  function startTimer() {
    clearInterval(timer);
    timer = setInterval(() => goTo(current + 1), 5000);
  }

  dots.forEach((dot, i) => {
    dot.addEventListener('click', () => { goTo(i); startTimer(); });
  });

  // Keyboard arrow navigation when hero in view
  document.addEventListener('keydown', e => {
    const hero = document.getElementById('hero');
    if (!hero) return;
    const rect = hero.getBoundingClientRect();
    if (rect.top > window.innerHeight || rect.bottom < 0) return;
    if (e.key === 'ArrowRight') { goTo(current + 1); startTimer(); }
    if (e.key === 'ArrowLeft')  { goTo(current - 1); startTimer(); }
  });

  // Touch swipe
  let touchStartX = 0;
  const carousel = document.getElementById('hero');
  if (carousel) {
    carousel.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX; }, { passive: true });
    carousel.addEventListener('touchend', e => {
      const dx = e.changedTouches[0].clientX - touchStartX;
      if (Math.abs(dx) > 50) { goTo(dx < 0 ? current + 1 : current - 1); startTimer(); }
    }, { passive: true });
  }

  // Init first slide HUD
  updateHud(slides[0]);
  startTimer();
}

/* ── Profile Tabs ───────────────────────────────────────── */
function initTabs() {
  const btns   = document.querySelectorAll('.tab-btn');
  const panels = document.querySelectorAll('.tab-panel');
  if (!btns.length) return;

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;
      btns.forEach(b => b.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      const panel = document.getElementById(`tab-${target}`);
      if (panel) panel.classList.add('active');

      // Sync carousel to matching object
      const slides = document.querySelectorAll('.carousel-slide');
      slides.forEach((slide, i) => {
        if (slide.dataset.obj === target) {
          // Soft-jump carousel
          const dots = document.querySelectorAll('.carousel-dot');
          slides.forEach(s => s.classList.remove('active'));
          dots.forEach(d => d.classList.remove('active'));
          slide.classList.add('active');
          if (dots[i]) dots[i].classList.add('active');
          const hudFn = window._updateHud;
          if (hudFn) hudFn(slide);
        }
      });
    });
  });
}

/* ── Observer count fluctuation ─────────────────────────── */
(function fluctuateObservers() {
  const el = document.getElementById('observer-count');
  if (!el) return;
  function update() {
    const delta = Math.random() < 0.2 ? Math.floor(Math.random() * 3) : 0;
    el.textContent = 1 + delta;
    setTimeout(update, 4000 + Math.random() * 8000);
  }
  setTimeout(update, 6000);
})();

/* ── Scroll-triggered fade-ins ──────────────────────────── */
function initFadeIns() {
  const targets = document.querySelectorAll(
    '.section-header, .about-grid, .metric-card, .archive-row, ' +
    '.alert-card, .cta-inner, .cta-stats, ' +
    '.form-layout, .report-form-wrap, .object-threat-wrap, .tab-nav'
  );
  targets.forEach(el => el.classList.add('fade-in'));

  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 55);
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  targets.forEach(el => io.observe(el));
}

/* ── Metric bar + counter animations ────────────────────── */
function animateMetrics() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      entry.target.querySelectorAll('.metric-bar-fill').forEach(bar => {
        bar.style.width = bar.style.getPropertyValue('--target') || '0%';
      });

      entry.target.querySelectorAll('.metric-value[data-count]').forEach(el => {
        const target  = parseInt(el.dataset.count, 10);
        const decimal = el.dataset.decimal ? `.${el.dataset.decimal}` : '';
        const unit    = el.querySelector('.metric-unit');
        const unitHTML = unit ? unit.outerHTML : '';
        const duration = 1200;
        const start    = performance.now();

        function tick(now) {
          const elapsed  = now - start;
          const progress = Math.min(elapsed / duration, 1);
          const ease     = 1 - Math.pow(1 - progress, 3);
          el.innerHTML   = `${Math.round(target * ease)}${decimal}${unitHTML}`;
          if (progress < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
      });

      io.unobserve(entry.target);
    });
  }, { threshold: 0.2 });

  document.querySelectorAll('.metric-card').forEach(c => io.observe(c));
}

/* ── Smooth nav scroll ──────────────────────────────────── */
function initNavScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const id = link.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      const navH = document.querySelector('.nav')?.offsetHeight || 60;
      window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - navH, behavior: 'smooth' });
    });
  });
}

/* ── Nav shadow on scroll ───────────────────────────────── */
function initNavShadow() {
  const nav = document.querySelector('.nav');
  if (!nav) return;
  window.addEventListener('scroll', () => {
    nav.style.borderBottomColor = window.scrollY > 40 ? 'rgba(36,42,39,0.9)' : 'var(--border)';
  }, { passive: true });
}

/* ── Archive row stagger ────────────────────────────────── */
function initArchiveStagger() {
  const rows = document.querySelectorAll('.archive-row');
  const io   = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity  = '1';
          entry.target.style.transform = 'translateX(0)';
        }, i * 45);
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.05, rootMargin: '0px 0px -20px 0px' });

  rows.forEach(row => {
    row.style.opacity   = '0';
    row.style.transform = 'translateX(-10px)';
    row.style.transition = 'opacity 0.4s var(--ease), transform 0.4s var(--ease)';
    io.observe(row);
  });
}

/* ── Registration form ──────────────────────────────────── */
function initRegisterForm() {
  const form    = document.getElementById('register-form');
  const success = document.getElementById('register-success');
  const refEl   = document.getElementById('success-ref');
  if (!form) return;

  form.addEventListener('submit', e => {
    e.preventDefault();
    if (!form.querySelector('#reg-name').value.trim() ||
        !form.querySelector('#reg-readiness').value) {
      shakeEl(form); return;
    }
    form.classList.add('hidden');
    success.classList.remove('hidden');
    if (refEl) refEl.textContent = Math.floor(100000 + Math.random() * 900000);
  });
}

/* ── Incident report form ───────────────────────────────── */
function initReportForm() {
  const form    = document.getElementById('report-form');
  const success = document.getElementById('report-success');
  const refEl   = document.getElementById('report-ref');
  if (!form) return;

  const dateInput = form.querySelector('#inc-date');
  if (dateInput) dateInput.value = new Date().toISOString().split('T')[0];

  form.addEventListener('submit', e => {
    e.preventDefault();
    if (!form.querySelector('#inc-type').value ||
        !form.querySelector('#inc-desc').value.trim() ||
        !form.querySelector('input[name="severity"]:checked')) {
      shakeEl(form); return;
    }
    form.classList.add('hidden');
    success.classList.remove('hidden');
    if (refEl) refEl.textContent = Math.floor(100000 + Math.random() * 900000);
  });
}

/* ── Shake helper ───────────────────────────────────────── */
function shakeEl(el) {
  el.style.animation = 'none';
  requestAnimationFrame(() => { el.style.animation = 'shake 0.4s var(--ease)'; });
}

// Inject shake keyframe
const shakeStyle = document.createElement('style');
shakeStyle.textContent = `
@keyframes shake {
  0%,100% { transform: translateX(0); }
  20%      { transform: translateX(-6px); }
  40%      { transform: translateX(6px); }
  60%      { transform: translateX(-4px); }
  80%      { transform: translateX(4px); }
}
.status-chip.status-warning {
  border-color: rgba(138,106,48,0.5);
  color: var(--amber-hi);
  background: rgba(138,106,48,0.08);
}`;
document.head.appendChild(shakeStyle);

/* ── Init ───────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initCarousel();
  initTabs();
  initFadeIns();
  animateMetrics();
  initNavScroll();
  initNavShadow();
  initArchiveStagger();
  initRegisterForm();
  initReportForm();
});
