'use client'

import { useEffect } from 'react'

const plantMetrics = {
  '041': {
    sectionTitle: 'Панель мониторинга — Объект 041 «DRAGON»',
    cards: [
      { label: 'Уровень угрозы засухи почвы', badge: 'УМЕРЕННЫЙ', badgeCls: 'badge-amber', count: 47, unitText: '%', barTarget: '47%', barColor: 'var(--amber)', desc: 'Влажность субстрата в допустимых пределах. Водопроводная вода — под наблюдением на фторид. Мониторинг продолжается.', f1: 'Последнее чтение: 06:00 UTC', f2: 'Sensor: SH-041-A' },
      { label: 'Вероятность появления нового листа', badge: 'НИЗКАЯ', badgeCls: 'badge-default', count: 23, unitText: '%', barTarget: '23%', barColor: 'var(--text-2)', desc: 'Статистический анализ указывает на сниженную вероятность листообразования в текущем 7-дневном окне. Сезонная поправка применена.', f1: 'Model: LEM-v4.1', f2: 'Достоверность: 68%' },
      { label: 'Коэффициент устойчивости ствола', badge: 'ВЫСОКИЙ', badgeCls: 'badge-green', count: 94, unitText: '.7', barTarget: '94.7%', barColor: 'var(--accent)', desc: 'Структурная целостность основного ствола подтверждена. Вертикальное положение без внешней опоры с 2014 г.', f1: 'Метод: визуальный', f2: 'REF: TSC-041' },
      { label: 'Индекс интерьерной гармонии', badge: 'ХОРОШИЙ', badgeCls: 'badge-green', count: 8, unitText: '.1', barTarget: '81%', barColor: 'var(--accent)', desc: 'Положительное влияние на пространственное равновесие подтверждено. Эстетических инцидентов не зафиксировано.', f1: 'Шкала: 0–10', f2: 'n=4 наблюдателя' },
      { label: 'Оценка уверенности фотосинтеза', badge: 'НОМИНАЛЬНЫЙ', badgeCls: 'badge-amber', count: 76, unitText: '%', barTarget: '76%', barColor: 'var(--amber)', desc: 'Эффективность поглощения света в ожидаемом диапазоне. Сезонное отклонение учтено. Корректирующие действия не санкционированы.', f1: 'Расчётный, не измеренный', f2: 'REF: PHT-2026-041' },
      { statusBadge: 'СТАБИЛЬНО', statusBadgeCls: 'badge-green', statusWord: 'STABLE', desc1: 'Аномалий роста не выявлено. Все параметры в норме. Рекомендовано: перейти на фильтрованную воду.', desc2: 'Операция GREENWATCH продолжается согласно протоколу MOG-RUS/CONT.' },
    ],
  },
  '042': {
    sectionTitle: 'Панель мониторинга — Объект 042 «MOTH»',
    cards: [
      { label: 'Риск переувлажнения субстрата', badge: 'КРИТИЧНЫЙ', badgeCls: 'badge-red', count: 55, unitText: '%', barTarget: '55%', barColor: 'var(--red)', desc: 'Субстрат визуально избыточно влажный. Риск корневой гнили умеренный. Полив приостановлен до полного просыхания. Ref: INC-2026-042.', f1: 'Анализ: 29.04.2026', f2: 'Sensor: SH-042-A' },
      { label: 'Вероятность повторного цветения', badge: 'УМЕРЕННАЯ', badgeCls: 'badge-amber', count: 31, unitText: '%', barTarget: '31%', barColor: 'var(--amber)', desc: 'Объект в фазе покоя после цветения. Реактивация цветоноса вероятна при нормализации режима полива.', f1: 'Model: LEM-v4.1', f2: 'Достоверность: 62%' },
      { label: 'Тургор листвы', badge: 'ВЫСОКИЙ', badgeCls: 'badge-green', count: 91, unitText: '%', barTarget: '91%', barColor: 'var(--accent)', desc: 'Листья сохраняют хороший тургор. Корневая система пока компенсирует переувлажнение. Требует мониторинга.', f1: 'Метод: визуальный', f2: 'REF: TRG-042' },
      { label: 'Индекс интерьерной гармонии', badge: 'ОТЛИЧНЫЙ', badgeCls: 'badge-green', count: 9, unitText: '.2', barTarget: '92%', barColor: 'var(--accent)', desc: 'Phalaenopsis создаёт выраженный эстетический эффект. Оценка снижена до нормализации режима полива.', f1: 'Шкала: 0–10', f2: 'n=4 наблюдателя' },
      { label: 'Оценка уверенности фотосинтеза', badge: 'СНИЖЕННЫЙ', badgeCls: 'badge-amber', count: 68, unitText: '%', barTarget: '68%', barColor: 'var(--amber)', desc: 'Избыток влаги у корней снижает эффективность поглощения питательных веществ. Коррекция полива восстановит показатель.', f1: 'Расчётный', f2: 'REF: PHT-2026-042' },
      { statusBadge: 'ВНИМАНИЕ', statusBadgeCls: 'badge-amber', statusWord: 'CAUTION', desc1: 'Переувлажнение субстрата. Цветонос нежизнеспособен — требует обрезки до второго узла.', desc2: 'Действие: прекратить полив до полного просыхания коры.' },
    ],
  },
  '043': {
    sectionTitle: 'Панель мониторинга — Объект 043 «JADE»',
    cards: [
      { label: 'Критичность застоя воды в поддоне', badge: 'КРИТИЧНО', badgeCls: 'badge-red', count: 65, unitText: '%', barTarget: '65%', barColor: 'var(--red)', desc: 'Стоячая вода в поддоне — прямая угроза корневой системе суккулента. Немедленное вмешательство рекомендовано. Ref: ALERT-2026-043.', f1: 'Анализ: 29.04.2026', f2: 'Sensor: SH-043-A' },
      { label: 'Активность роста новых побегов', badge: 'ВЫСОКАЯ', badgeCls: 'badge-green', count: 78, unitText: '%', barTarget: '78%', barColor: 'var(--accent)', desc: 'Активные жёлто-зелёные побеги зафиксированы. Несмотря на риски — объект демонстрирует высокий потенциал роста.', f1: 'Метод: визуальный', f2: 'REF: GRW-043' },
      { label: 'Коэффициент устойчивости ствола', badge: 'ХОРОШИЙ', badgeCls: 'badge-green', count: 88, unitText: '%', barTarget: '88%', barColor: 'var(--accent)', desc: 'Деревянистые побеги структурно целостны. Нижний лист с покраснением — стресс без деформации.', f1: 'Метод: визуальный', f2: 'REF: TSC-043' },
      { label: 'Индекс интерьерной гармонии', badge: 'СРЕДНИЙ', badgeCls: 'badge-amber', count: 7, unitText: '.4', barTarget: '74%', barColor: 'var(--amber)', desc: 'Классический интерьерный объект. Оценка снижена из-за стресс-покраснения нижнего листа и видимой воды в поддоне.', f1: 'Шкала: 0–10', f2: 'n=4 наблюдателя' },
      { label: 'Оценка уверенности фотосинтеза', badge: 'НОМИНАЛЬНЫЙ', badgeCls: 'badge-amber', count: 72, unitText: '%', barTarget: '72%', barColor: 'var(--amber)', desc: 'Суккулент адаптирован к умеренному освещению. Текущая позиция — субоптимальна для максимальной эффективности.', f1: 'Расчётный', f2: 'REF: PHT-2026-043' },
      { statusBadge: 'ТРЕВОГА', statusBadgeCls: 'badge-red', statusWord: 'WARNING', desc1: 'Стоячая вода в поддоне — риск корневой гнили. Покраснение нижнего листа — стресс-индикатор.', desc2: 'ДЕЙСТВИЕ: немедленно вылить воду из поддона.' },
    ],
  },
  '044': {
    sectionTitle: 'Панель мониторинга — Объект 044 «BINARY»',
    cards: [
      { label: 'Уровень угрозы засухи почвы', badge: 'МИНИМАЛЬНЫЙ', badgeCls: 'badge-green', count: 8, unitText: '%', barTarget: '8%', barColor: 'var(--accent)', desc: 'Декоративный гравий обеспечивает идеальный дренаж. Субстрат в оптимальном состоянии. Вмешательств не требуется.', f1: 'Последнее чтение: 06:00 UTC', f2: 'Sensor: SH-044-A' },
      { label: 'Вероятность появления третьего ствола', badge: 'НИЗКАЯ', badgeCls: 'badge-default', count: 12, unitText: '%', barTarget: '12%', barColor: 'var(--text-2)', desc: 'Двойная структура BINARY — биологически обусловленная аномалия. Третий ствол маловероятен, однако не исключён.', f1: 'Model: LEM-v4.1', f2: 'Достоверность: 55%' },
      { label: 'Коэффициент устойчивости стволов', badge: 'МАКСИМАЛЬНЫЙ', badgeCls: 'badge-green', count: 98, unitText: '.5', barTarget: '98.5%', barColor: 'var(--accent)', desc: 'Оба ствола демонстрируют образцовый тургор. Гравийный субстрат обеспечивает стабильную дислокацию. Лучший объект коллекции.', f1: 'Метод: визуальный', f2: 'REF: TSC-044' },
      { label: 'Индекс интерьерной гармонии', badge: 'ОТЛИЧНЫЙ', badgeCls: 'badge-green', count: 8, unitText: '.7', barTarget: '87%', barColor: 'var(--accent)', desc: 'Уникальная двойная структура создаёт визуальный интерес. Декоративный гравий — дополнительный эстетический плюс.', f1: 'Шкала: 0–10', f2: 'n=4 наблюдателя' },
      { label: 'Оценка уверенности фотосинтеза', badge: 'ВЫСОКИЙ', badgeCls: 'badge-green', count: 89, unitText: '%', barTarget: '89%', barColor: 'var(--accent)', desc: 'Наиболее фотосинтетически эффективный объект коллекции. Боковое освещение — оптимально для Cactaceae.', f1: 'Расчётный', f2: 'REF: PHT-2026-044' },
      { statusBadge: 'ОПТИМАЛЬНО', statusBadgeCls: 'badge-green', statusWord: 'OPTIMAL', desc1: 'Наилучшее состояние из всех объектов коллекции. Вмешательств не требуется.', desc2: 'Следующий полив: не ранее чем через 3–4 недели.' },
    ],
  },
}

function updateDashboard(objNum) {
  const data = plantMetrics[objNum]
  if (!data) return
  const titleEl = document.querySelector('.dashboard .section-title')
  if (titleEl) titleEl.textContent = data.sectionTitle
  const cards = document.querySelectorAll('.metric-card')
  data.cards.forEach((cfg, i) => {
    const card = cards[i]
    if (!card) return
    if (cfg.statusWord !== undefined) {
      const badge = card.querySelector('.metric-badge')
      if (badge) { badge.className = `metric-badge ${cfg.statusBadgeCls}`; badge.textContent = cfg.statusBadge }
      const sw = card.querySelector('.metric-status-word')
      if (sw) sw.textContent = cfg.statusWord
      const descs = card.querySelectorAll('.metric-desc')
      if (descs[0]) descs[0].textContent = cfg.desc1
      if (descs[1]) descs[1].textContent = cfg.desc2
    } else {
      const labelEl = card.querySelector('.metric-label')
      if (labelEl) labelEl.textContent = cfg.label
      const badge = card.querySelector('.metric-badge')
      if (badge) { badge.className = `metric-badge ${cfg.badgeCls}`; badge.textContent = cfg.badge }
      const valEl = card.querySelector('.metric-value')
      if (valEl) { valEl.dataset.count = cfg.count; valEl.innerHTML = `0<span class="metric-unit">${cfg.unitText}</span>` }
      const fill = card.querySelector('.metric-bar-fill')
      if (fill) { fill.style.cssText = `--target:${cfg.barTarget};--color:${cfg.barColor}`; fill.style.width = '0%' }
      const descEl = card.querySelector('.metric-desc')
      if (descEl) descEl.textContent = cfg.desc
      const footerSpans = card.querySelectorAll('.metric-footer .mono')
      if (footerSpans[0]) footerSpans[0].textContent = cfg.f1
      if (footerSpans[1]) footerSpans[1].textContent = cfg.f2
      if (valEl) {
        const target = cfg.count
        const unitHTML = `<span class="metric-unit">${cfg.unitText}</span>`
        const duration = 900
        const start = performance.now();
        (function tick(now) {
          const progress = Math.min((now - start) / duration, 1)
          const ease = 1 - Math.pow(1 - progress, 3)
          valEl.innerHTML = `${Math.round(target * ease)}${unitHTML}`
          if (progress < 1) requestAnimationFrame(tick)
        })(performance.now())
      }
      if (fill) { setTimeout(() => { fill.style.width = cfg.barTarget }, 60) }
    }
  })
}

function initCarousel() {
  const slides = document.querySelectorAll('.carousel-slide')
  const dots = document.querySelectorAll('.carousel-dot')
  if (!slides.length) return
  let current = 0
  let timer = null

  function updateHud(slide) {
    const obj = slide.dataset.obj || '041'
    const status = slide.dataset.status || 'СТАБИЛЕН'
    const codename = slide.dataset.codename || 'DRAGON'
    const cls = slide.dataset.class || 'B'
    const ids = { 'hud-obj-num': obj, 'hud-codename': codename, 'hud-class': cls, 'hero-obj-num': obj, 'hero-obj-status': status, 'hero-obj-codename': codename }
    for (const [id, val] of Object.entries(ids)) {
      const el = document.getElementById(id)
      if (el) el.textContent = val
    }
    const chip = document.querySelector('.status-chip.status-stable')
    if (chip) chip.classList.toggle('status-warning', status === 'ПОД НАБЛЮДЕНИЕМ')
  }

  function goTo(n) {
    slides[current].classList.remove('active')
    dots[current].classList.remove('active')
    current = (n + slides.length) % slides.length
    slides[current].classList.add('active')
    dots[current].classList.add('active')
    updateHud(slides[current])
  }

  function startTimer() {
    clearInterval(timer)
    timer = setInterval(() => goTo(current + 1), 5000)
  }

  dots.forEach((dot, i) => { dot.addEventListener('click', () => { goTo(i); startTimer() }) })

  document.addEventListener('keydown', e => {
    const hero = document.getElementById('hero')
    if (!hero) return
    const rect = hero.getBoundingClientRect()
    if (rect.top > window.innerHeight || rect.bottom < 0) return
    if (e.key === 'ArrowRight') { goTo(current + 1); startTimer() }
    if (e.key === 'ArrowLeft') { goTo(current - 1); startTimer() }
  })

  let touchStartX = 0
  const carousel = document.getElementById('hero')
  if (carousel) {
    carousel.addEventListener('touchstart', e => { touchStartX = e.touches[0].clientX }, { passive: true })
    carousel.addEventListener('touchend', e => {
      const dx = e.changedTouches[0].clientX - touchStartX
      if (Math.abs(dx) > 50) { goTo(dx < 0 ? current + 1 : current - 1); startTimer() }
    }, { passive: true })
  }

  updateHud(slides[0])
  startTimer()
}

function initTabs() {
  const btns = document.querySelectorAll('.tab-btn')
  const panels = document.querySelectorAll('.tab-panel')
  if (!btns.length) return
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab
      btns.forEach(b => b.classList.remove('active'))
      panels.forEach(p => p.classList.remove('active'))
      btn.classList.add('active')
      const panel = document.getElementById(`tab-${target}`)
      if (panel) panel.classList.add('active')
      const slides = document.querySelectorAll('.carousel-slide')
      slides.forEach((slide, i) => {
        if (slide.dataset.obj === target) {
          const dots = document.querySelectorAll('.carousel-dot')
          slides.forEach(s => s.classList.remove('active'))
          dots.forEach(d => d.classList.remove('active'))
          slide.classList.add('active')
          if (dots[i]) dots[i].classList.add('active')
        }
      })
      updateDashboard(target)
    })
  })
}

function initFadeIns() {
  const targets = document.querySelectorAll(
    '.section-header, .about-grid, .metric-card, .archive-row, ' +
    '.alert-card, .cta-inner, .cta-stats, ' +
    '.form-layout, .report-form-wrap, .object-threat-wrap, .tab-nav'
  )
  targets.forEach(el => el.classList.add('fade-in'))
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 55)
        io.unobserve(entry.target)
      }
    })
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' })
  targets.forEach(el => io.observe(el))
}

function animateMetrics() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return
      entry.target.querySelectorAll('.metric-bar-fill').forEach(bar => {
        bar.style.width = bar.style.getPropertyValue('--target') || '0%'
      })
      entry.target.querySelectorAll('.metric-value[data-count]').forEach(el => {
        const target = parseInt(el.dataset.count, 10)
        const unit = el.querySelector('.metric-unit')
        const unitHTML = unit ? unit.outerHTML : ''
        const duration = 1200
        const start = performance.now()
        function tick(now) {
          const elapsed = now - start
          const progress = Math.min(elapsed / duration, 1)
          const ease = 1 - Math.pow(1 - progress, 3)
          el.innerHTML = `${Math.round(target * ease)}${unitHTML}`
          if (progress < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      })
      io.unobserve(entry.target)
    })
  }, { threshold: 0.2 })
  document.querySelectorAll('.metric-card').forEach(c => io.observe(c))
}

function initNavScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const id = link.getAttribute('href').slice(1)
      const target = document.getElementById(id)
      if (!target) return
      e.preventDefault()
      const navH = document.querySelector('.nav')?.offsetHeight || 60
      window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - navH, behavior: 'smooth' })
    })
  })
}

function initNavShadow() {
  const nav = document.querySelector('.nav')
  if (!nav) return
  window.addEventListener('scroll', () => {
    nav.style.borderBottomColor = window.scrollY > 40 ? 'rgba(36,42,39,0.9)' : 'var(--border)'
  }, { passive: true })
}

function initArchiveStagger() {
  const rows = document.querySelectorAll('.archive-row')
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => { entry.target.style.opacity = '1'; entry.target.style.transform = 'translateX(0)' }, i * 45)
        io.unobserve(entry.target)
      }
    })
  }, { threshold: 0.05, rootMargin: '0px 0px -20px 0px' })
  rows.forEach(row => {
    row.style.opacity = '0'
    row.style.transform = 'translateX(-10px)'
    row.style.transition = 'opacity 0.4s var(--ease), transform 0.4s var(--ease)'
    io.observe(row)
  })
}

function shakeEl(el) {
  el.style.animation = 'none'
  requestAnimationFrame(() => { el.style.animation = 'shake 0.4s var(--ease)' })
}

function initRegisterForm() {
  const form = document.getElementById('register-form')
  const success = document.getElementById('register-success')
  const refEl = document.getElementById('success-ref')
  if (!form) return
  form.addEventListener('submit', async e => {
    e.preventDefault()
    const name      = form.querySelector('#reg-name').value.trim()
    const email     = form.querySelector('#reg-email').value.trim()
    const region    = form.querySelector('#reg-region').value.trim()
    const readiness = form.querySelector('#reg-readiness').value
    const emailOk   = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    if (!name || !email || !emailOk || !region || !readiness) { shakeEl(form); return }

    const res = await fetch('/api/registrations', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name, email, region, readiness,
        classification: null,
        dryness:        form.querySelector('#reg-dryness').value || null,
        hours:          form.querySelector('#reg-hours').value || null,
        statement:      form.querySelector('#reg-statement').value.trim() || null,
      }),
    })
    const data = await res.json()

    if (data.error === 'email_taken') {
      const el = form.querySelector('#reg-email')
      el.setCustomValidity('Этот email уже зарегистрирован. Каждый наблюдатель регистрируется только один раз.')
      el.reportValidity()
      el.setCustomValidity('')
      return
    }

    const ref = data.ref_number || Math.floor(100000 + Math.random() * 900000)
    localStorage.setItem('obs_ref', String(ref))

    form.classList.add('hidden')
    success.classList.remove('hidden')
    if (refEl) refEl.textContent = ref

    // countdown → auto-redirect to cabinet
    let sec = 5
    const countdownEl = document.getElementById('reg-countdown')
    const iv = setInterval(() => {
      sec--
      if (countdownEl) countdownEl.textContent = sec
      if (sec <= 0) { clearInterval(iv); window.location.href = '/cabinet' }
    }, 1000)
  })
}

function initReportForm() {
  const form = document.getElementById('report-form')
  const success = document.getElementById('report-success')
  const refEl = document.getElementById('report-ref')
  if (!form) return
  const dateInput = form.querySelector('#inc-date')
  if (dateInput) dateInput.value = new Date().toISOString().split('T')[0]
  form.addEventListener('submit', async e => {
    e.preventDefault()
    const observerRef = form.querySelector('#inc-observer').value.trim()
    const type        = form.querySelector('#inc-type').value
    const desc        = form.querySelector('#inc-desc').value.trim()
    const severity    = form.querySelector('input[name="severity"]:checked')?.value
    const date        = form.querySelector('#inc-date').value
    if (!observerRef || !type || !desc || !severity) { shakeEl(form); return }

    await fetch('/api/reports', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ observer_ref: observerRef, incident_type: type, incident_date: date, description: desc, severity }),
    })

    form.classList.add('hidden')
    success.classList.remove('hidden')
    if (refEl) refEl.textContent = Math.floor(100000 + Math.random() * 900000)
  })
}

function fluctuateObservers() {
  const el = document.getElementById('observer-count')
  if (!el) return
  function update() {
    const delta = Math.random() < 0.2 ? Math.floor(Math.random() * 3) : 0
    el.textContent = 1 + delta
    setTimeout(update, 4000 + Math.random() * 8000)
  }
  setTimeout(update, 6000)
}

function updateClock() {
  const el = document.getElementById('hud-clock')
  if (!el) return
  const now = new Date()
  const h = String(now.getUTCHours()).padStart(2, '0')
  const m = String(now.getUTCMinutes()).padStart(2, '0')
  const s = String(now.getUTCSeconds()).padStart(2, '0')
  el.textContent = `${h}:${m}:${s} UTC`
}

export default function MainScripts() {
  useEffect(() => {
    updateClock()
    const clockInterval = setInterval(updateClock, 1000)
    initCarousel()
    initTabs()
    initFadeIns()
    animateMetrics()
    initNavScroll()
    initNavShadow()
    initArchiveStagger()
    initRegisterForm()
    initReportForm()
    fluctuateObservers()
    return () => clearInterval(clockInterval)
  }, [])
  return null
}
