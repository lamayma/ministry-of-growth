import MainScripts from '../components/MainScripts'

export default function Home() {
  return (
    <>
      {/* NAV */}
      <nav className="nav" id="nav">
        <div className="nav-inner container">
          <div className="nav-brand">
            <a href="#hero" style={{display:'flex',alignItems:'center',gap:'14px',textDecoration:'none',color:'inherit'}}>
              <svg className="nav-emblem" viewBox="0 0 32 32" fill="none">
                <rect x="1" y="1" width="30" height="30" stroke="currentColor" strokeWidth="1"/>
                <rect x="5" y="5" width="22" height="22" stroke="currentColor" strokeWidth="0.5" opacity="0.5"/>
                <line x1="16" y1="1" x2="16" y2="31" stroke="currentColor" strokeWidth="0.5" opacity="0.4"/>
                <line x1="1" y1="16" x2="31" y2="16" stroke="currentColor" strokeWidth="0.5" opacity="0.4"/>
                <circle cx="16" cy="16" r="4" stroke="currentColor" strokeWidth="1"/>
                <circle cx="16" cy="16" r="1" fill="currentColor"/>
              </svg>
              <div className="nav-brand-text">
                <span className="nav-title">Ministry of Growth</span>
                <span className="nav-dept">Bureau of International Botanical Security — Russian Sector</span>
              </div>
            </a>
          </div>
          <div className="nav-right">
            <div className="nav-op-badge">OPERATION <span className="op-name">GREENWATCH</span></div>
            <div className="nav-status-wrap">
              <span className="pulse-dot"></span>
              <span className="nav-status-label">МОНИТОРИНГ АКТИВЕН</span>
            </div>
            <nav className="nav-links">
              <a href="#about">Досье</a>
              <a href="#dashboard">Данные</a>
              <a href="#archive">Архив</a>
              <a href="#register" className="nav-cta">Регистрация</a>
              <a href="/cabinet" className="nav-cta">Кабинет</a>
              <a href="/submit" className="nav-cta nav-cta--gold">Подать объект</a>
            </nav>
          </div>
        </div>
      </nav>

      <main>
        {/* ══ HERO ══ */}
        <section className="hero" id="hero">
          <div className="hero-carousel" id="hero-carousel">
            <div className="carousel-slide active" data-obj="041" data-status="ВНИМАНИЕ: КОНЧИКИ" data-codename="DRAGON" data-class="B" style={{backgroundImage:"url('/assets/plant-4.png')"}}></div>
            <div className="carousel-slide" data-obj="042" data-status="ПОДОЗР. ПЕРЕПОЛИВ" data-codename="MOTH" data-class="A" style={{backgroundImage:"url('/assets/plant-1.png')"}}></div>
            <div className="carousel-slide" data-obj="043" data-status="ТРЕВОГА: ПОДДОН" data-codename="JADE" data-class="B" style={{backgroundImage:"url('/assets/plant-2.png')"}}></div>
            <div className="carousel-slide" data-obj="044" data-status="СТАБИЛЕН" data-codename="BINARY" data-class="C" style={{backgroundImage:"url('/assets/plant-3.png')"}}></div>
          </div>
          <div className="hero-overlay"></div>
          <div className="hero-scanlines"></div>
          <div className="hud">
            <div className="hud-corner hud-tl"></div>
            <div className="hud-corner hud-tr"></div>
            <div className="hud-corner hud-bl"></div>
            <div className="hud-corner hud-br"></div>
            <div className="hud-topbar">
              <div className="hud-left-group">
                <div className="hud-feed-badge">
                  <span className="hud-live-dot"></span>
                  <span>LIVE FEED — Объект № <span id="hud-obj-num">041</span></span>
                </div>
                <div className="hud-codename">CODENAME: «<span id="hud-codename">DRAGON</span>» / CLASS <span id="hud-class">B</span></div>
              </div>
              <div className="hud-topbar-right">
                <span className="hud-label">REC</span>
                <span className="hud-clock" id="hud-clock">--:--:-- UTC</span>
              </div>
            </div>
            <div className="hero-content">
              <div className="hero-eyebrow">
                <span className="label-chip">TOP SECRET // BOTANICA // NOFORN</span>
                <span className="label-chip">Операция GREENWATCH</span>
                <span className="label-chip">REF: MOG-RUS-2014</span>
              </div>
              <h1 className="hero-title">
                <span className="hero-title-min">Ministry</span>
                <span className="hero-title-of">of</span>
                <span className="hero-title-growth">Growth</span>
              </h1>
              <p className="hero-subtitle">
                Официальный портал мониторинга ботанических объектов<br className="desktop-br" />
                стратегического значения на территории Российской Федерации
              </p>
              <div className="hero-chips">
                <div className="status-chip status-stable">
                  <span className="pulse-dot"></span>
                  Объект № <span id="hero-obj-num">041</span> — <span id="hero-obj-status">СТАБИЛЕН</span>
                </div>
                <div className="status-chip">
                  CODENAME: «<span id="hero-obj-codename">DRAGON</span>»
                </div>
              </div>
              <div className="hero-actions">
                <a href="#register" className="btn btn-primary">Зарегистрироваться как наблюдатель</a>
                <a href="#report" className="btn btn-outline">Сообщить о новом листе</a>
              </div>
              <div className="carousel-dots">
                <button className="carousel-dot active" data-slide="0" aria-label="Объект 041"></button>
                <button className="carousel-dot" data-slide="1" aria-label="Объект 042"></button>
                <button className="carousel-dot" data-slide="2" aria-label="Объект 043"></button>
                <button className="carousel-dot" data-slide="3" aria-label="Объект 044"></button>
              </div>
            </div>
            <div className="hud-bottombar">
              <span>Наблюдение ведётся с 14&nbsp;марта&nbsp;2014&nbsp;г.</span>
              <span className="hud-sep">|</span>
              <span>Сессия аутентифицирована</span>
              <span className="hud-sep">|</span>
              <span>Наблюдателей в сети: <span id="observer-count" className="mono">1</span></span>
              <span className="hud-sep">|</span>
              <span>CLEARANCE LEVEL&nbsp;3</span>
            </div>
          </div>
        </section>

        {/* ══ ABOUT ══ */}
        <section className="section about" id="about">
          <div className="container">
            <div className="section-header">
              <div className="section-label-wrap">
                <span className="section-label">Section 01</span>
                <span className="section-label">CLASSIFIED // BOTANICA</span>
                <span className="section-label">Дело № MOG-RUS-2014 / Публичный уровень</span>
              </div>
              <h2 className="section-title">Досье объектов</h2>
              <p className="section-intro">
                Следующие записи составляют официальную документацию ботанических активов, находящихся под непрерывным
                наблюдением Бюро международной ботанической безопасности в рамках Операции GREENWATCH. Доступ
                предоставляется гражданским наблюдателям уровня 3 и выше. Несанкционированное распространение
                нежелательно, но юридически не преследуется в большинстве юрисдикций.
              </p>
            </div>
            <div className="tab-nav" id="profile-tabs">
              <button className="tab-btn active" data-tab="041">№{' '}041 «DRAGON»</button>
              <button className="tab-btn" data-tab="042">№{' '}042 «MOTH»</button>
              <button className="tab-btn" data-tab="043">№{' '}043 «JADE»</button>
              <button className="tab-btn" data-tab="044">№{' '}044 «BINARY»</button>
            </div>

            {/* OBJECT 041 */}
            <div className="tab-panel active" id="tab-041">
              <div className="about-grid">
                <div className="about-image-col">
                  <div className="object-image-frame">
                    <img src="/assets/plant-4.png" alt="Объект № 041 — Dracaena marginata" className="object-image" />
                    <div className="object-image-overlay"><span className="mono small">OBJ-041 / DRAGON / FEED-04</span><span className="pulse-dot"></span></div>
                  </div>
                  <div className="object-threat-wrap">
                    <div className="threat-label">Уровень угрозы</div>
                    <div className="threat-bar-wrap">
                      <div className="threat-bar"><span className="threat-bar-fill threat-low" style={{width:'30%'}}></span></div>
                      <span className="threat-value mono" style={{color:'var(--amber-hi)'}}>MODERATE</span>
                    </div>
                    <div className="threat-desc">⚠ Визуальный анализ зафиксировал потемнение кончиков листьев на нескольких фрондах. Предположительная причина: фторид в водопроводной воде или пониженная влажность воздуха. Рекомендована фильтрованная вода.</div>
                  </div>
                  <div className="analysis-box">
                    <div className="analysis-title">FIELD ANALYSIS — 29.04.2026</div>
                    <div className="analysis-row"><span className="analysis-icon warn">!</span><span>Коричневые кончики листьев: <strong>подтверждено</strong> на ≥5 фрондах</span></div>
                    <div className="analysis-row"><span className="analysis-icon ok">✓</span><span>Тургор листа: нормальный — обезвоживания нет</span></div>
                    <div className="analysis-row"><span className="analysis-icon ok">✓</span><span>Цвет ствола: здоровый, структурная целостность сохранена</span></div>
                    <div className="analysis-row"><span className="analysis-icon ok">✓</span><span>Почвенный субстрат: визуально достаточно увлажнён</span></div>
                    <div className="analysis-row"><span className="analysis-icon warn">!</span><span>Рекомендация: перейти на отстоянную или фильтрованную воду</span></div>
                  </div>
                </div>
                <div className="about-data-col">
                  <div className="data-table">
                    <div className="data-row"><span className="data-key">Обозначение объекта</span><span className="data-val"><em>Dracaena marginata</em> — Драконово дерево</span></div>
                    <div className="data-row"><span className="data-key">Регистрационный №</span><span className="data-val mono">BOT-2014-041-B</span></div>
                    <div className="data-row"><span className="data-key">Место дислокации</span><span className="data-val">Жилой объект, круглый стол, координаты установлены</span></div>
                    <div className="data-row"><span className="data-key">Дата постановки на учёт</span><span className="data-val mono">14.03.2014</span></div>
                    <div className="data-row"><span className="data-key">Класс роста</span><span className="data-val">Прогрессивный — Категория III</span></div>
                    <div className="data-row highlight"><span className="data-key">Уровень устойчивости</span><span className="data-val"><span className="badge badge-green">ИСКЛЮЧИТЕЛЬНЫЙ</span><span className="data-note">верифицировано независимо</span></span></div>
                    <div className="data-row"><span className="data-key">Индекс потребления воды</span><span className="data-val mono">3.2 / 10.0 — Умеренный</span></div>
                    <div className="data-row highlight"><span className="data-key">Состояние кончиков листьев</span><span className="data-val"><span className="badge badge-amber">ПОТЕМНЕНИЕ</span><span className="data-note">фторид / низкая влажность</span></span></div>
                    <div className="data-row"><span className="data-key">Индекс молчания</span><span className="data-val mono">10.0 / 10.0 — Максимальный</span></div>
                    <div className="data-row"><span className="data-key">Оценка эстетического вклада</span><span className="data-val mono">8.4 / 10.0</span></div>
                    <div className="data-row"><span className="data-key">Рекомендуемая вода</span><span className="data-val">Фильтрованная или отстоянная 24ч — НЕ водопроводная</span></div>
                    <div className="data-row"><span className="data-key">Оценка угрозы</span><span className="data-val">Пассивный. Неподвижный. Безмолвный. Чувствителен к фториду.</span></div>
                    <div className="data-row"><span className="data-key">Уровень доступа</span><span className="data-val"><span className="badge badge-default">ОТКРЫТЫЙ — Публичный уровень</span></span></div>
                  </div>
                  <p className="data-footnote">¹ Визуальный анализ от 29.04.2026: коричневые кончики листьев характерны для чувствительности Dracaena marginata к фториду и хлору водопроводной воды, а также к пониженной влажности воздуха (&lt;40%). Немедленной угрозы жизнедеятельности нет. HUMINT-источник: CARDINAL-2.</p>
                </div>
              </div>
            </div>

            {/* OBJECT 042 */}
            <div className="tab-panel" id="tab-042">
              <div className="about-grid">
                <div className="about-image-col">
                  <div className="object-image-frame">
                    <img src="/assets/plant-1.png" alt="Объект № 042 — Phalaenopsis sp." className="object-image" />
                    <div className="object-image-overlay"><span className="mono small">OBJ-042 / MOTH / FEED-01</span><span className="pulse-dot"></span></div>
                  </div>
                  <div className="object-threat-wrap">
                    <div className="threat-label">Уровень угрозы</div>
                    <div className="threat-bar-wrap">
                      <div className="threat-bar"><span className="threat-bar-fill" style={{width:'55%',background:'var(--amber)'}}></span></div>
                      <span className="threat-value mono" style={{color:'var(--amber-hi)'}}>ELEVATED</span>
                    </div>
                    <div className="threat-desc">⚠ Субстрат в прозрачном контейнере визуально тёмный — признак избыточного увлажнения. Цветонос нежизнеспособен. Наружные корни: 2 ед. Рекомендовано сокращение полива.</div>
                  </div>
                  <div className="analysis-box analysis-box--amber">
                    <div className="analysis-title">FIELD ANALYSIS — 29.04.2026</div>
                    <div className="analysis-row"><span className="analysis-icon warn">!</span><span>Субстрат: <strong>избыточно влажный</strong> — тёмный цвет коры</span></div>
                    <div className="analysis-row"><span className="analysis-icon warn">!</span><span>Цветонос: <strong>мёртвый/сухой</strong> — рекомендована обрезка</span></div>
                    <div className="analysis-row"><span className="analysis-icon ok">✓</span><span>Листья: тургор хороший, цвет насыщенный тёмно-зелёный</span></div>
                    <div className="analysis-row"><span className="analysis-icon warn">!</span><span>Наружные корни (2 ед.): возможно вытеснены избытком влаги</span></div>
                    <div className="analysis-row"><span className="analysis-icon warn">!</span><span>Рекомендация: дать субстрату полностью просохнуть перед след. поливом</span></div>
                  </div>
                </div>
                <div className="about-data-col">
                  <div className="data-table">
                    <div className="data-row"><span className="data-key">Обозначение объекта</span><span className="data-val"><em>Phalaenopsis sp.</em> — Орхидея-мотылёк</span></div>
                    <div className="data-row"><span className="data-key">Регистрационный №</span><span className="data-val mono">BOT-2021-042-A</span></div>
                    <div className="data-row"><span className="data-key">Место дислокации</span><span className="data-val">Подоконник, ю/з экспозиция, каменная стена фоном</span></div>
                    <div className="data-row"><span className="data-key">Дата постановки на учёт</span><span className="data-val mono">07.11.2021</span></div>
                    <div className="data-row"><span className="data-key">Класс роста</span><span className="data-val">Циклический — ожидание реактивации</span></div>
                    <div className="data-row highlight"><span className="data-key">Влажность субстрата</span><span className="data-val"><span className="badge badge-red">ИЗБЫТОЧНАЯ</span><span className="data-note">визуальный анализ 29.04.2026</span></span></div>
                    <div className="data-row"><span className="data-key">Тип контейнера</span><span className="data-val mono">Прозрачный — обеспечивает мониторинг корней ✓</span></div>
                    <div className="data-row"><span className="data-key">Статус цветоноса</span><span className="data-val"><span className="badge badge-red">НЕЖИЗНЕСПОСОБЕН</span><span className="data-note">обрезка рекомендована</span></span></div>
                    <div className="data-row"><span className="data-key">Наружные корни</span><span className="data-val mono">2 ед. — свисающие, причина изучается</span></div>
                    <div className="data-row"><span className="data-key">Индекс молчания</span><span className="data-val mono">10.0 / 10.0 — Максимальный</span></div>
                    <div className="data-row"><span className="data-key">Протокол полива</span><span className="data-val">Дать субстрату ПОЛНОСТЬЮ просохнуть между поливами</span></div>
                    <div className="data-row"><span className="data-key">Оценка угрозы</span><span className="data-val">Риск переполива. Реактивация цветения возможна после нормализации.</span></div>
                    <div className="data-row"><span className="data-key">Уровень доступа</span><span className="data-val"><span className="badge badge-amber">CONFIDENTIAL — Уровень 2</span></span></div>
                  </div>
                  <p className="data-footnote">¹ Визуальный анализ 29.04.2026: тёмный цвет субстрата в прозрачном контейнере — индикатор переувлажнения. Phalaenopsis категорически не переносит застоя воды у корней. Ref: INC-2026-042-WATER.</p>
                </div>
              </div>
            </div>

            {/* OBJECT 043 */}
            <div className="tab-panel" id="tab-043">
              <div className="about-grid">
                <div className="about-image-col">
                  <div className="object-image-frame">
                    <img src="/assets/plant-2.png" alt="Объект № 043 — Crassula ovata" className="object-image" />
                    <div className="object-image-overlay"><span className="mono small">OBJ-043 / JADE / FEED-02</span><span className="pulse-dot"></span></div>
                  </div>
                  <div className="object-threat-wrap">
                    <div className="threat-label">Уровень угрозы</div>
                    <div className="threat-bar-wrap">
                      <div className="threat-bar"><span className="threat-bar-fill" style={{width:'65%',background:'var(--red)'}}></span></div>
                      <span className="threat-value mono" style={{color:'var(--red-hi)'}}>HIGH</span>
                    </div>
                    <div className="threat-desc">🚨 В поддоне зафиксирована стоячая вода — критический фактор риска для суккулентов. Нижний лист с покраснением. Немедленное вмешательство рекомендовано.</div>
                  </div>
                  <div className="analysis-box analysis-box--red">
                    <div className="analysis-title">FIELD ANALYSIS — 29.04.2026 // URGENT</div>
                    <div className="analysis-row"><span className="analysis-icon crit">‼</span><span>Поддон: <strong>обнаружена стоячая вода</strong> — риск корневой гнили</span></div>
                    <div className="analysis-row"><span className="analysis-icon warn">!</span><span>Нижний лист: <strong>покраснение</strong> — стресс от переполива или света</span></div>
                    <div className="analysis-row"><span className="analysis-icon ok">✓</span><span>Молодые побеги: жёлто-зелёные — активный рост подтверждён</span></div>
                    <div className="analysis-row"><span className="analysis-icon ok">✓</span><span>Основная масса листьев: здоровая, тургор сохранён</span></div>
                    <div className="analysis-row"><span className="analysis-icon crit">‼</span><span>ДЕЙСТВИЕ: вылить воду из поддона НЕМЕДЛЕННО</span></div>
                  </div>
                </div>
                <div className="about-data-col">
                  <div className="data-table">
                    <div className="data-row"><span className="data-key">Обозначение объекта</span><span className="data-val"><em>Crassula ovata</em> — Денежное дерево</span></div>
                    <div className="data-row"><span className="data-key">Регистрационный №</span><span className="data-val mono">BOT-2019-043-B</span></div>
                    <div className="data-row"><span className="data-key">Место дислокации</span><span className="data-val">Белая поверхность, зона умеренного освещения</span></div>
                    <div className="data-row"><span className="data-key">Дата постановки на учёт</span><span className="data-val mono">03.04.2019</span></div>
                    <div className="data-row"><span className="data-key">Класс роста</span><span className="data-val">Накопительный — активный, молодые побеги подтверждены</span></div>
                    <div className="data-row highlight"><span className="data-key">Статус поддона</span><span className="data-val"><span className="badge badge-red">СТОЯЧАЯ ВОДА</span><span className="data-note">НЕМЕДЛЕННО ВЫЛИТЬ</span></span></div>
                    <div className="data-row highlight"><span className="data-key">Нижний лист</span><span className="data-val"><span className="badge badge-amber">ПОКРАСНЕНИЕ</span><span className="data-note">стресс — наблюдение</span></span></div>
                    <div className="data-row"><span className="data-key">Молодые побеги</span><span className="data-val"><span className="badge badge-green">АКТИВНЫ</span><span className="data-note">жёлто-зелёный цвет нормален</span></span></div>
                    <div className="data-row"><span className="data-key">Протокол полива</span><span className="data-val">Полив только при полностью сухом субстрате. Поддон опустошать.</span></div>
                    <div className="data-row"><span className="data-key">Индекс молчания</span><span className="data-val mono">10.0 / 10.0 — Максимальный</span></div>
                    <div className="data-row"><span className="data-key">Оценка угрозы</span><span className="data-val">ПОВЫШЕННАЯ. Стоячая вода — прямая угроза корневой системе.</span></div>
                    <div className="data-row"><span className="data-key">Уровень доступа</span><span className="data-val"><span className="badge badge-default">ОТКРЫТЫЙ — Публичный уровень</span></span></div>
                  </div>
                  <p className="data-footnote">¹ Визуальный анализ 29.04.2026: стоячая вода в поддоне является основной угрозой для Crassula ovata. Корневая гниль у суккулентов развивается быстро и необратимо. Ref: ALERT-2026-043-WATER.</p>
                </div>
              </div>
            </div>

            {/* OBJECT 044 */}
            <div className="tab-panel" id="tab-044">
              <div className="about-grid">
                <div className="about-image-col">
                  <div className="object-image-frame">
                    <img src="/assets/plant-3.png" alt="Объект № 044 — Cactaceae sp." className="object-image" />
                    <div className="object-image-overlay"><span className="mono small">OBJ-044 / BINARY / FEED-03</span><span className="pulse-dot"></span></div>
                  </div>
                  <div className="object-threat-wrap">
                    <div className="threat-label">Уровень угрозы</div>
                    <div className="threat-bar-wrap">
                      <div className="threat-bar"><span className="threat-bar-fill threat-low" style={{width:'12%'}}></span></div>
                      <span className="threat-value mono">MINIMAL</span>
                    </div>
                    <div className="threat-desc">✓ Наилучшее состояние из всех четырёх объектов. Оба ствола здоровы, тургор плотный, шипы активны. Единственный объект, не требующий вмешательства.</div>
                  </div>
                  <div className="analysis-box analysis-box--green">
                    <div className="analysis-title">FIELD ANALYSIS — 29.04.2026 // ALL CLEAR</div>
                    <div className="analysis-row"><span className="analysis-icon ok">✓</span><span>Оба ствола: <strong>упругие, насыщенного зелёного цвета</strong></span></div>
                    <div className="analysis-row"><span className="analysis-icon ok">✓</span><span>Субстрат: декоративный гравий — дренаж оптимален</span></div>
                    <div className="analysis-row"><span className="analysis-icon ok">✓</span><span>Ареолы с белыми шипами: нормальные, не обесцвечены</span></div>
                    <div className="analysis-row"><span className="analysis-icon ok">✓</span><span>Деревянная поверхность: обеспечивает стабильную дислокацию</span></div>
                    <div className="analysis-row"><span className="analysis-icon warn">!</span><span>Полив: не чаще 1 раза в месяц — субстрат должен быть сухим</span></div>
                  </div>
                </div>
                <div className="about-data-col">
                  <div className="data-table">
                    <div className="data-row"><span className="data-key">Обозначение объекта</span><span className="data-val"><em>Cactaceae sp.</em> — предположительно Gymnocalycium</span></div>
                    <div className="data-row"><span className="data-key">Регистрационный №</span><span className="data-val mono">BOT-2023-044-C</span></div>
                    <div className="data-row"><span className="data-key">Место дислокации</span><span className="data-val">Деревянная поверхность, тёплый боковой свет</span></div>
                    <div className="data-row"><span className="data-key">Дата постановки на учёт</span><span className="data-val mono">15.08.2023</span></div>
                    <div className="data-row"><span className="data-key">Класс роста</span><span className="data-val">Вертикальный — две независимые точки роста</span></div>
                    <div className="data-row highlight"><span className="data-key">Общее состояние</span><span className="data-val"><span className="badge badge-green">ОТЛИЧНОЕ</span><span className="data-note">лучший объект коллекции</span></span></div>
                    <div className="data-row"><span className="data-key">Тургор стволов</span><span className="data-val"><span className="badge badge-green">ПЛОТНЫЙ</span><span className="data-note">обезвоживания нет</span></span></div>
                    <div className="data-row"><span className="data-key">Наличие шипов</span><span className="data-val"><span className="badge badge-amber">ПОДТВЕРЖДЕНО</span><span className="data-note">тактильный контакт не рекомендован</span></span></div>
                    <div className="data-row"><span className="data-key">Протокол полива</span><span className="data-val">1 раз в 3–4 недели. Только при полностью сухом субстрате.</span></div>
                    <div className="data-row"><span className="data-key">Индекс молчания</span><span className="data-val mono">10.0 / 10.0 — Максимальный</span></div>
                    <div className="data-row"><span className="data-key">Оценка угрозы</span><span className="data-val">Минимальная. Физическая угроза для наблюдателя — шипы (ненамеренно).</span></div>
                    <div className="data-row"><span className="data-key">Уровень доступа</span><span className="data-val"><span className="badge badge-amber">RESTRICTED — Уровень 2</span></span></div>
                  </div>
                  <p className="data-footnote">¹ Визуальный анализ 29.04.2026: объект BINARY демонстрирует образцовое состояние. Декоративный гравий обеспечивает идеальный дренаж. Двойная структура биологически обусловлена. Вмешательств не требуется.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ DASHBOARD ══ */}
        <section className="section dashboard" id="dashboard">
          <div className="container">
            <div className="section-header">
              <div className="section-label-wrap">
                <span className="section-label">Section 02</span>
                <span className="section-label">Обновление данных каждые 6 часов</span>
                <span className="section-label">SIGINT / OSINT</span>
              </div>
              <h2 className="section-title">Панель мониторинга в реальном времени</h2>
              <p className="section-intro">
                Биометрические и экологические показатели, полученные из непрерывных сенсорных данных и сертифицированных
                наблюдательных отчётов. Все показатели подлежат министерской интерпретации. Значения носят ориентировочный
                характер. Данные по объекту 044 предоставляются с особой осторожностью.
              </p>
            </div>
            <div className="dash-grid">
              <div className="metric-card">
                <div className="metric-header"><span className="metric-label">Уровень угрозы засухи почвы</span><span className="metric-badge badge-amber">УМЕРЕННЫЙ</span></div>
                <div className="metric-value mono" data-count="47">0<span className="metric-unit">%</span></div>
                <div className="metric-bar-wrap"><div className="metric-bar"><span className="metric-bar-fill" style={{'--target':'47%','--color':'var(--amber)'}}></span></div></div>
                <p className="metric-desc">Уровень влажности почвы в допустимых пределах. Вмешательство не требуется. Мониторинг продолжается в штатном режиме.</p>
                <div className="metric-footer"><span className="mono small">Последнее чтение: 06:00 UTC</span><span className="mono small">Sensor: SH-041-A</span></div>
              </div>
              <div className="metric-card">
                <div className="metric-header"><span className="metric-label">Вероятность появления нового листа</span><span className="metric-badge badge-default">НИЗКАЯ</span></div>
                <div className="metric-value mono" data-count="23">0<span className="metric-unit">%</span></div>
                <div className="metric-bar-wrap"><div className="metric-bar"><span className="metric-bar-fill" style={{'--target':'23%','--color':'var(--text-2)'}}></span></div></div>
                <p className="metric-desc">Статистический анализ циклов роста указывает на сниженную вероятность нового листообразования в текущем 7-дневном окне. Применяется сезонная поправка.</p>
                <div className="metric-footer"><span className="mono small">Model: LEM-v4.1</span><span className="mono small">Достоверность: 68%</span></div>
              </div>
              <div className="metric-card">
                <div className="metric-header"><span className="metric-label">Коэффициент устойчивости ствола</span><span className="metric-badge badge-green">ВЫСОКИЙ</span></div>
                <div className="metric-value mono" data-count="94">0<span className="metric-unit">.7</span></div>
                <div className="metric-bar-wrap"><div className="metric-bar"><span className="metric-bar-fill" style={{'--target':'94.7%','--color':'var(--accent)'}}></span></div></div>
                <p className="metric-desc">Структурная целостность основного ствола подтверждена. Боковой нестабильности не обнаружено. Объект сохраняет вертикальное положение без внешней опоры с 2019 года.</p>
                <div className="metric-footer"><span className="mono small">Метод: визуальный + ручной</span><span className="mono small">REF: TSC-041</span></div>
              </div>
              <div className="metric-card">
                <div className="metric-header"><span className="metric-label">Индекс интерьерной гармонии</span><span className="metric-badge badge-green">ХОРОШИЙ</span></div>
                <div className="metric-value mono" data-count="8">0<span className="metric-unit">.1</span></div>
                <div className="metric-bar-wrap"><div className="metric-bar"><span className="metric-bar-fill" style={{'--target':'81%','--color':'var(--accent)'}}></span></div></div>
                <p className="metric-desc">Объект продолжает положительно влиять на пространственное равновесие помещения. Эстетических инцидентов не зафиксировано. Присутствие оценивается как «успокаивающее» (n=4).</p>
                <div className="metric-footer"><span className="mono small">Шкала: 0–10</span><span className="mono small">Панель наблюдателей: n=4</span></div>
              </div>
              <div className="metric-card">
                <div className="metric-header"><span className="metric-label">Оценка уверенности фотосинтеза</span><span className="metric-badge badge-amber">НОМИНАЛЬНЫЙ</span></div>
                <div className="metric-value mono" data-count="76">0<span className="metric-unit">%</span></div>
                <div className="metric-bar-wrap"><div className="metric-bar"><span className="metric-bar-fill" style={{'--target':'76%','--color':'var(--amber)'}}></span></div></div>
                <p className="metric-desc">Эффективность поглощения света в ожидаемом диапазоне. Сезонное отклонение от базовых показателей учтено. Корректирующие действия не санкционированы.</p>
                <div className="metric-footer"><span className="mono small">Расчётный, не измеренный</span><span className="mono small">REF: PHT-2026-041</span></div>
              </div>
              <div className="metric-card metric-card--status">
                <div className="metric-header"><span className="metric-label">Общий статус операции</span><span className="metric-badge badge-green">СТАБИЛЬНО</span></div>
                <div className="metric-status-display"><span className="pulse-dot large"></span><span className="metric-status-word mono">STABLE</span></div>
                <p className="metric-desc">Аномальных паттернов роста, поведенческих отклонений или постуральных нарушений не выявлено. Все объекты функционируют в пределах зарегистрированных параметров.</p>
                <p className="metric-desc">Операция GREENWATCH продолжается согласно протоколу MOG-RUS/CONT.</p>
                <div className="metric-footer"><span className="mono small">Статус с: 18.02.2025</span><span className="mono small">Следующий обзор: 30.06.2026</span></div>
              </div>
            </div>
            <div className="dash-footnote">
              Все данные собираются, агрегируются и интерпретируются в соответствии с Директивой Бюро BD-BOT-RUS-2019-7.
              Бюро не гарантирует точность данных автономных датчиков. В случае расхождения приоритет отдаётся оценке
              невооружённым взглядом сертифицированного наблюдателя.
            </div>
          </div>
        </section>

        {/* ══ ARCHIVE ══ */}
        <section className="section archive" id="archive">
          <div className="container">
            <div className="section-header">
              <div className="section-label-wrap">
                <span className="section-label">Section 03</span>
                <span className="section-label">Протокол — Федеральный реестр ботанических событий</span>
              </div>
              <h2 className="section-title">Официальный архив наблюдений</h2>
              <p className="section-intro">
                Хронологический реестр всех значимых событий, связанных с объектами наблюдения. Записи вносятся
                сертифицированными наблюдателями и проверяются Бюро в течение 30 рабочих дней. Все записи являются
                постоянными и не могут быть удалены.
              </p>
            </div>

            {/* 041 */}
            <div className="archive-obj-group">
              <div className="archive-obj-header">
                <span className="archive-obj-num">№ 041</span>
                <span className="archive-obj-code">«DRAGON»</span>
                <span className="archive-obj-species">Dracaena marginata</span>
                <span className="badge badge-amber" style={{marginLeft:'auto',fontSize:'0.55rem'}}>MODERATE</span>
              </div>
              <div className="archive-table">
                <div className="archive-table-header"><span>Дата</span><span>Тип события</span><span>Описание</span><span>Статус</span></div>
                <div className="archive-row" data-type="incident"><div className="archive-date mono">29.04.2026</div><div className="archive-type"><span className="badge badge-amber">Аналитическое</span></div><div className="archive-desc">Визуальный анализ подтвердил потемнение кончиков листьев на ≥5 фрондах. Диагноз: чувствительность к фториду и/или хлору водопроводной воды. Угрозы жизнедеятельности нет. Рекомендован переход на фильтрованную воду. Ref: ANA-2026-041-FLR.</div><div className="archive-status"><span className="badge badge-amber">Рекомендация</span></div></div>
                <div className="archive-row" data-type="routine"><div className="archive-date mono">22.04.2026</div><div className="archive-type"><span className="badge badge-default">Плановая</span></div><div className="archive-desc">Плановая инспекция завершена. Объект демонстрирует устойчивое состояние. Нового роста не зафиксировано. Условия: облачно, 18°C — признано «приемлемым».</div><div className="archive-status"><span className="badge badge-green">Занесено</span></div></div>
                <div className="archive-row" data-type="hydration"><div className="archive-date mono">18.02.2025</div><div className="archive-type"><span className="badge badge-default">Гидратация</span></div><div className="archive-desc">Событие полива успешно завершено. Объём: ~300 мл. Впитывание подтверждено через 2 ч. Примечание: используется водопроводная вода — требует пересмотра.</div><div className="archive-status"><span className="badge badge-green">Занесено</span></div></div>
                <div className="archive-row" data-type="postural"><div className="archive-date mono">07.01.2025</div><div className="archive-type"><span className="badge badge-amber">Постуральное</span></div><div className="archive-desc">Наклон ~3° в сторону источника света. Корректирующий поворот на 45° произведён ботаническим офицером. Постинспекция: удовлетворительно.</div><div className="archive-status"><span className="badge badge-green">Устранено</span></div></div>
                <div className="archive-row" data-type="notable"><div className="archive-date mono">12.04.2024</div><div className="archive-type"><span className="badge badge-green">Значимое</span></div><div className="archive-desc">Объект произвёл один (1) новый лист. Лист признан здоровым, длина 7 см. Подано в Федеральный реестр в установленный 24-часовой срок. Ref: LEAF-2024-041-001.</div><div className="archive-status"><span className="badge badge-green">Занесено</span></div></div>
                <div className="archive-row" data-type="emergency"><div className="archive-date mono">02.06.2022</div><div className="archive-type"><span className="badge badge-red">Экстренное</span></div><div className="archive-desc">Экстренная гидратация. Засуха почвы: Уровень 4. Дефицит влаги ~500 мл. Причина: отсутствие наблюдателя 12 дней. Время восстановления: 48 ч.</div><div className="archive-status"><span className="badge badge-green">Устранено</span></div></div>
                <div className="archive-row" data-type="historic"><div className="archive-date mono">14.03.2014</div><div className="archive-type"><span className="badge badge-green">Регистрация</span></div><div className="archive-desc">Объект №041 официально зарегистрирован. Программа наблюдения инициирована. Class B Indoor Botanical Asset. Высота на момент приёма: ~60 см. Это основополагающий документ операции GREENWATCH.</div><div className="archive-status"><span className="badge badge-green">Осн. запись</span></div></div>
              </div>
            </div>

            {/* 042 */}
            <div className="archive-obj-group">
              <div className="archive-obj-header">
                <span className="archive-obj-num">№ 042</span>
                <span className="archive-obj-code">«MOTH»</span>
                <span className="archive-obj-species">Phalaenopsis sp.</span>
                <span className="badge badge-red" style={{marginLeft:'auto',fontSize:'0.55rem'}}>ELEVATED</span>
              </div>
              <div className="archive-table">
                <div className="archive-table-header"><span>Дата</span><span>Тип события</span><span>Описание</span><span>Статус</span></div>
                <div className="archive-row" data-type="incident"><div className="archive-date mono">29.04.2026</div><div className="archive-type"><span className="badge badge-red">Тревога</span></div><div className="archive-desc">Визуальный анализ: субстрат в прозрачном контейнере визуально тёмный — признак переувлажнения. Цветонос нежизнеспособен — рекомендована обрезка до второго узла. Зарегистрировано как INC-2026-042-WATER.</div><div className="archive-status"><span className="badge badge-amber">Вмешательство</span></div></div>
                <div className="archive-row" data-type="notable"><div className="archive-date mono">14.02.2025</div><div className="archive-type"><span className="badge badge-green">Значимое</span></div><div className="archive-desc">Объект завершил цикл цветения: последний цветок опал после 74 дней (рекорд наблюдения). Цветонос оставлен для потенциального вторичного цветения.</div><div className="archive-status"><span className="badge badge-green">Занесено</span></div></div>
                <div className="archive-row" data-type="notable"><div className="archive-date mono">01.12.2024</div><div className="archive-type"><span className="badge badge-green">Цветение</span></div><div className="archive-desc">Объект вступил в фазу цветения. Первый бутон раскрылся в 09:43 по местному времени. Количество бутонов: 7. Полив сокращён согласно протоколу MOTH-BLOOM-02.</div><div className="archive-status"><span className="badge badge-green">Занесено</span></div></div>
                <div className="archive-row" data-type="audit"><div className="archive-date mono">07.11.2021</div><div className="archive-type"><span className="badge badge-green">Регистрация</span></div><div className="archive-desc">Объект №042 «MOTH» официально поставлен на учёт. Прозрачный контейнер отмечен как нестандартный — одобрен для мониторинга корней. Допуск: CONFIDENTIAL.</div><div className="archive-status"><span className="badge badge-green">Занесено</span></div></div>
              </div>
            </div>

            {/* 043 */}
            <div className="archive-obj-group">
              <div className="archive-obj-header">
                <span className="archive-obj-num">№ 043</span>
                <span className="archive-obj-code">«JADE»</span>
                <span className="archive-obj-species">Crassula ovata</span>
                <span className="badge badge-red" style={{marginLeft:'auto',fontSize:'0.55rem'}}>HIGH</span>
              </div>
              <div className="archive-table">
                <div className="archive-table-header"><span>Дата</span><span>Тип события</span><span>Описание</span><span>Статус</span></div>
                <div className="archive-row" data-type="emergency"><div className="archive-date mono">29.04.2026</div><div className="archive-type"><span className="badge badge-red">Критическое</span></div><div className="archive-desc">ALERT-2026-043-WATER: обнаружена стоячая вода в поддоне. Риск корневой гнили — НЕМЕДЛЕННОЕ вмешательство. Дополнительно: покраснение нижнего листа — стресс-индикатор.</div><div className="archive-status"><span className="badge badge-red">Требует действий</span></div></div>
                <div className="archive-row" data-type="notable"><div className="archive-date mono">11.03.2026</div><div className="archive-type"><span className="badge badge-green">Рост</span></div><div className="archive-desc">Зафиксированы новые жёлто-зелёные побеги (3 точки роста). Тургор основной листвы: хороший. Рост подтверждён, несмотря на неоптимальный режим полива.</div><div className="archive-status"><span className="badge badge-green">Занесено</span></div></div>
                <div className="archive-row" data-type="incident"><div className="archive-date mono">18.09.2024</div><div className="archive-type"><span className="badge badge-amber">Инцидент</span></div><div className="archive-desc">Нижний лист отделился при неустановленных обстоятельствах. Версии: перегрузка питательными веществами, механическое воздействие или нормальное листосбрасывание. INC-2024-043-LEAF.</div><div className="archive-status"><span className="badge badge-green">Занесено</span></div></div>
                <div className="archive-row" data-type="audit"><div className="archive-date mono">03.04.2019</div><div className="archive-type"><span className="badge badge-green">Регистрация</span></div><div className="archive-desc">Объект №043 «JADE» поставлен на учёт. Коэффициент накопления влаги: 9.1/10.0. Итог: «физиологическая норма суккулента». Class B. Наблюдение продолжается.</div><div className="archive-status"><span className="badge badge-green">Занесено</span></div></div>
              </div>
            </div>

            {/* 044 */}
            <div className="archive-obj-group">
              <div className="archive-obj-header">
                <span className="archive-obj-num">№ 044</span>
                <span className="archive-obj-code">«BINARY»</span>
                <span className="archive-obj-species">Cactaceae sp. (предп. Gymnocalycium)</span>
                <span className="badge badge-green" style={{marginLeft:'auto',fontSize:'0.55rem'}}>MINIMAL</span>
              </div>
              <div className="archive-table">
                <div className="archive-table-header"><span>Дата</span><span>Тип события</span><span>Описание</span><span>Статус</span></div>
                <div className="archive-row" data-type="routine"><div className="archive-date mono">29.04.2026</div><div className="archive-type"><span className="badge badge-green">ALL CLEAR</span></div><div className="archive-desc">Визуальный анализ: образцовое состояние. Оба ствола — упругие, насыщенно-зелёные. Ареолы с белыми шипами без обесцвечивания. Декоративный гравий обеспечивает оптимальный дренаж. Вмешательств не требуется.</div><div className="archive-status"><span className="badge badge-green">Занесено</span></div></div>
                <div className="archive-row" data-type="incident"><div className="archive-date mono">05.01.2026</div><div className="archive-type"><span className="badge badge-amber">Тактильный</span></div><div className="archive-desc">Зафиксирован несанкционированный тактильный контакт с объектом. Физический ущерб объекту не нанесён. Наблюдателю оказана первая помощь (незначительный укол шипом). INC-2026-044-SPINE.</div><div className="archive-status"><span className="badge badge-green">Закрыт</span></div></div>
                <div className="archive-row" data-type="audit"><div className="archive-date mono">15.08.2023</div><div className="archive-type"><span className="badge badge-amber">Регистрация</span></div><div className="archive-desc">Объект №044 «BINARY» поставлен на учёт после анонимного сообщения о «необычной форме». Двойная структура ствола классифицирована как «ботаническая аномалия умеренного значения». Тактильный контакт запрещён.</div><div className="archive-status"><span className="badge badge-amber">Наблюдение</span></div></div>
              </div>
            </div>

            <div className="archive-footer">
              <span className="mono small">Всего событий: 18</span>
              <span className="mono small">Открытых инцидентов: 2</span>
              <span className="mono small">Целостность архива: Подтверждена</span>
              <span className="mono small">Последний экспорт: 29.04.2026</span>
            </div>
          </div>
        </section>

        {/* ══ REGISTER ══ */}
        <section className="section register" id="register">
          <div className="container">
            <div className="form-layout">
              <div className="form-intro">
                <div className="section-label-wrap">
                  <span className="section-label">Section 04</span>
                  <span className="section-label">Программа гражданского участия</span>
                </div>
                <h2 className="section-title">Регистрация гражданского наблюдателя</h2>
                <p>Зарегистрируйте своё намерение участвовать в национальной программе ботанического мониторинга. Зарегистрированные наблюдатели получают доступ к обновлениям и право подавать официальные наблюдательные отчёты напрямую в архив Бюро.</p>
                <p>Все заявки проходят стандартную проверку. Регистрация не создаёт юридических обязательств. Бюро оставляет за собой право отклонить заявку без объяснения причин — данное право, однако, ранее никогда не применялось.</p>
                <div className="form-requirements">
                  <div className="form-req-title">Минимальные требования к наблюдателю</div>
                  <ul className="form-req-list">
                    <li>Способность наблюдать за растением без прямого физического контакта</li>
                    <li>Доступ к естественному или искусственному освещению</li>
                    <li>Готовность подавать отчёты своевременно (в течение 24 часов)</li>
                    <li>Базовое понимание концепции почвы</li>
                  </ul>
                </div>
              </div>
              <div className="form-wrap">
                <div className="form-doc-header">
                  <span className="mono small">Form MOG-OBS-01 — Rev. 4</span>
                  <span className="mono small">Issued: 01.01.2020</span>
                </div>
                <form className="form" id="register-form" noValidate>
                  <div className="form-group">
                    <label className="form-label" htmlFor="reg-name">Полное имя <span className="required">*</span></label>
                    <input className="form-input" type="text" id="reg-name" name="name" placeholder="Как зарегистрировано у властей" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="reg-email">Email для связи <span className="required">*</span></label>
                    <input className="form-input" type="email" id="reg-email" name="email" placeholder="для официальных уведомлений" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="reg-region">Регион наблюдения <span className="required">*</span></label>
                    <input className="form-input" type="text" id="reg-region" name="region" placeholder="Город, район или номер комнаты" required />
                  </div>
                  <div style={{background:'rgba(74,222,128,0.05)', border:'1px solid rgba(74,222,128,0.15)', borderRadius:'6px', padding:'12px 14px', fontSize:'13px', color:'#7dd3b0', lineHeight:'1.6'}}>
                    🌱 <strong>Все наблюдатели начинают с ранга «Рекрут».</strong> Классификация и звание присваиваются автоматически по результатам вашей деятельности — рапортам и полевым наблюдениям. Самостоятельный выбор ранга не предусмотрен протоколом.
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="reg-readiness">Готовность к мониторингу листвы <span className="required">*</span></label>
                    <select className="form-input form-select" id="reg-readiness" name="readiness" required>
                      <option value="">— Выберите статус готовности —</option>
                      <option value="yes">Подтверждена</option>
                      <option value="review">На личном рассмотрении</option>
                      <option value="conditional">Условная (уточнить в заявлении)</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="reg-dryness">Способность обнаружить подозрительную сухость</label>
                    <select className="form-input form-select" id="reg-dryness" name="dryness">
                      <option value="">— Выберите уровень компетентности —</option>
                      <option value="certified">Сертифицировано (кем — не указано)</option>
                      <option value="self-assessed">Самооценка</option>
                      <option value="developing">В процессе развития</option>
                      <option value="no">Не применимо — полагаюсь на расписание</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="reg-hours">Расчётное количество часов наблюдения в неделю</label>
                    <input className="form-input" type="number" id="reg-hours" name="hours" min="0" max="168" placeholder="0.0" step="0.5" />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="reg-statement">Заявление о намерениях</label>
                    <textarea className="form-input form-textarea" id="reg-statement" name="statement" placeholder="Опишите в официальных формулировках свою приверженность непрерывному наблюдению за объектами операции GREENWATCH…" rows="5"></textarea>
                  </div>
                  <div className="form-submit-wrap">
                    <button className="btn btn-primary btn-full" type="submit" id="reg-submit">Подать заявление наблюдателя</button>
                    <p className="form-disclaimer">Подавая данную форму, вы подтверждаете добровольное участие в национальной программе ботанического мониторинга. Участие является добровольным. Неучастие отмечается.</p>
                  </div>
                </form>
                <div className="form-success hidden" id="register-success">
                  <div className="success-icon">✓</div>
                  <div className="success-title mono">Регистрация принята</div>
                  <p>Вам присвоен персональный номер наблюдателя. Используйте его для подачи рапортов и входа в личный кабинет.</p>
                  <div style={{margin:'20px 0', padding:'20px', background:'rgba(74,222,128,0.06)', border:'2px solid rgba(74,222,128,0.3)', borderRadius:'8px', textAlign:'center'}}>
                    <div style={{fontSize:'11px', letterSpacing:'0.15em', color:'#4a5550', marginBottom:'10px', textTransform:'uppercase'}}>Ваш номер наблюдателя</div>
                    <div style={{fontSize:'38px', fontWeight:'700', letterSpacing:'0.1em', fontFamily:'Space Mono, monospace', color:'#4ade80', lineHeight:1}}>OBS-<span id="success-ref">000000</span></div>
                    <div style={{marginTop:'10px', fontSize:'12px', color:'#7dd3b0', fontFamily:'Space Mono, monospace'}}>Уровень допуска: УРОВЕНЬ-0 / Ранг: Рекрут</div>
                  </div>
                  <div style={{background:'rgba(248,113,113,0.08)', border:'1px solid rgba(248,113,113,0.25)', borderRadius:'6px', padding:'14px 16px', marginTop:'4px'}}>
                    <div style={{fontSize:'12px', fontWeight:'600', color:'#f87171', marginBottom:'6px', letterSpacing:'0.05em'}}>⚠ ВНИМАНИЕ — ПРОЧИТАЙТЕ ВНИМАТЕЛЬНО</div>
                    <div style={{fontSize:'13px', color:'#c8a0a0', lineHeight:'1.6'}}>
                      Этот номер выдаётся <strong>один раз</strong> и нигде не сохраняется повторно. Подтверждение на email не предусмотрено. Восстановление номера невозможно.<br/>
                      <strong>Запишите его прямо сейчас</strong> — в заметки, на бумагу или сфотографируйте экран.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ REPORT ══ */}
        <section className="section report" id="report">
          <div className="container">
            <div className="section-header">
              <div className="section-label-wrap">
                <span className="section-label">Section 05</span>
                <span className="section-label">Немедленная отчётность</span>
              </div>
              <h2 className="section-title">Центр сообщений об инцидентах</h2>
              <p className="section-intro">
                Используйте данный раздел для подачи официальных уведомлений о ботанических событиях, требующих
                немедленного документирования. В случае реальной экстренной ситуации — пожалуйста, также рассмотрите
                возможность полить растение.
              </p>
            </div>
            <div className="alert-cards">
              <div className="alert-card alert-card--green"><div className="alert-card-icon">01</div><div className="alert-card-body"><div className="alert-card-title">Протокол обнаружения нового листа</div><p>После визуального подтверждения нового листа наблюдатели обязаны подать официальный отчёт в течение 24 часов.</p></div></div>
              <div className="alert-card alert-card--amber"><div className="alert-card-icon">02</div><div className="alert-card-body"><div className="alert-card-title">Процедура эскалации дегидратации</div><p>При превышении допустимого уровня сухости почвы — немедленно подайте отчёт и инициируйте протокол бытового увлажнения.</p></div></div>
              <div className="alert-card alert-card--red"><div className="alert-card-icon">03</div><div className="alert-card-body"><div className="alert-card-title">Уведомление о несанкционированном листопаде</div><p>Любое отделение листа вне утверждённого ухода должно быть задокументировано в течение 6 часов.</p></div></div>
              <div className="alert-card alert-card--default"><div className="alert-card-icon">04</div><div className="alert-card-body"><div className="alert-card-title">Уведомление об экологическом нарушении</div><p>Сообщайте о колебаниях температуры, воздействии сквозняка и несанкционированных событиях близости (перестановка мебели).</p></div></div>
            </div>
            <div className="report-form-wrap">
              <div className="form-doc-header">
                <span className="mono small">Form MOG-INC-03 — Rev. 2</span>
                <span className="mono small">Для всех уровней наблюдателей</span>
              </div>
              <form className="form form-horizontal" id="report-form" noValidate>
                <div className="form-group">
                  <label className="form-label" htmlFor="inc-observer">Номер наблюдателя <span className="required">*</span></label>
                  <input className="form-input" type="text" id="inc-observer" name="observer_ref" placeholder="OBS-XXXXXX — выдаётся при регистрации" required />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="inc-type">Тип инцидента <span className="required">*</span></label>
                    <select className="form-input form-select" id="inc-type" name="type" required>
                      <option value="">— Выберите тип —</option>
                      <option value="new-leaf">Появление нового листа</option>
                      <option value="dehydration">Подозрение на дегидратацию</option>
                      <option value="leaf-drop">Несанкционированное опадание листа</option>
                      <option value="browning">Потемнение кончика листа</option>
                      <option value="lean">Постуральное отклонение</option>
                      <option value="environmental">Экологическое нарушение</option>
                      <option value="other">Иное (указать ниже)</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="inc-date">Дата обнаружения <span className="required">*</span></label>
                    <input className="form-input" type="date" id="inc-date" name="date" required />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Уровень серьёзности <span className="required">*</span></label>
                  <div className="severity-options">
                    <label className="severity-opt"><input type="radio" name="severity" value="low" /> <span>Низкий — информационный</span></label>
                    <label className="severity-opt"><input type="radio" name="severity" value="moderate" /> <span>Умеренный — требует занесения</span></label>
                    <label className="severity-opt"><input type="radio" name="severity" value="significant" /> <span>Значимый — требует действий</span></label>
                    <label className="severity-opt"><input type="radio" name="severity" value="critical" /> <span>Критический — немедленная эскалация</span></label>
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="inc-desc">Описание инцидента <span className="required">*</span></label>
                  <textarea className="form-input form-textarea" id="inc-desc" name="description" placeholder="Изложите фактические, объективные сведения о наблюдаемом событии." rows="4" required></textarea>
                </div>
                <div className="form-submit-wrap">
                  <button className="btn btn-primary" type="submit" id="report-submit">Подать официальный рапорт</button>
                  <span className="mono small">Отчёты не подлежат отзыву после подачи.</span>
                </div>
              </form>
              <div className="form-success hidden" id="report-success">
                <div className="success-icon">✓</div>
                <div className="success-title mono">Рапорт об инциденте получен</div>
                <p>Ваш отчёт занесён в очередь на проверку. Расчётное время обработки: 30 рабочих дней.</p>
                <span className="mono small">Incident Ref: INC-<span id="report-ref">000000</span></span>
              </div>
            </div>
          </div>
        </section>

        {/* ══ SUBMIT PROMO ══ */}
        <section className="section submit-promo" id="submit-promo">
          <div className="container">
            <div className="submit-promo-inner">
              <div className="submit-promo-left">
                <div className="section-label-wrap">
                  <span className="section-label">Программа расширения</span>
                  <span className="section-label badge-amber-text">$10 / объект</span>
                </div>
                <h2 className="submit-promo-title">У вас есть растение,<br />достойное наблюдения?</h2>
                <p>Бюро международной ботанической безопасности принимает заявки на включение новых объектов в реестр государственного мониторинга. Ваше растение получит официальный регистрационный номер, оперативный псевдоним, и будет поставлено под непрерывное гражданское наблюдение.</p>
                <p>Стоимость регистрации одного объекта: <strong>$10</strong>. Включает: присвоение номера, создание досье, публикацию в архиве событий. Оплата — при активации системы.</p>
                <a href="/submit" className="btn btn-gold">Подать объект на наблюдение →</a>
              </div>
              <div className="submit-promo-right">
                <div className="submit-promo-card">
                  <div className="submit-card-header mono">Что вы получаете</div>
                  <ul className="submit-card-list">
                    <li><span className="ok-icon">✓</span> Официальный регистрационный номер (BOT-ГГГГ-XXX)</li>
                    <li><span className="ok-icon">✓</span> Оперативный псевдоним в стиле ЦРУ</li>
                    <li><span className="ok-icon">✓</span> Визуальный анализ состояния объекта</li>
                    <li><span className="ok-icon">✓</span> Публикация досье на этом портале</li>
                    <li><span className="ok-icon">✓</span> Первичная запись в архив наблюдений</li>
                    <li><span className="ok-icon">✓</span> Статус «Гражданский наблюдатель» с правом подачи рапортов</li>
                  </ul>
                  <div className="submit-card-price">
                    <span className="price-amount">$10</span>
                    <span className="price-desc">единоразово за объект</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══ CTA ══ */}
        <section className="section cta" id="join">
          <div className="container">
            <div className="cta-inner">
              <div className="cta-label-wrap">
                <span className="section-label">Section 06</span>
                <span className="section-label">Национальная ответственность</span>
                <span className="section-label">OPERATION GREENWATCH</span>
              </div>
              <h2 className="cta-title">Растение не станет<br />наблюдать за собой само</h2>
              <div className="cta-body">
                <p>Документирование ботанического развития — не тривиальная задача. Объекты под наблюдением Бюро представляют собой живую летопись устойчивого роста, адаптации и экологического взаимодействия.</p>
                <p>Бюро международной ботанической безопасности приглашает всех правомочных граждан внести вклад в национальный ботанический реестр. Ваши наблюдения составляют данные. Данные составляют документацию. Документация составляет историю.</p>
                <p className="cta-directive">Зарегистрируйтесь. Наблюдайте. Докладывайте. Не поливайте сверх нормы.</p>
              </div>
              <div className="cta-actions">
                <a href="#register" className="btn btn-primary btn-large">Начать регистрацию</a>
                <a href="#dashboard" className="btn btn-outline btn-large">Перейти к панели данных</a>
              </div>
              <div className="cta-stats">
                <div className="cta-stat"><span className="cta-stat-num mono">12</span><span className="cta-stat-label">Лет непрерывного наблюдения</span></div>
                <div className="cta-stat"><span className="cta-stat-num mono">4</span><span className="cta-stat-label">Объекта под мониторингом</span></div>
                <div className="cta-stat"><span className="cta-stat-num mono">10</span><span className="cta-stat-label">Событий в официальном архиве</span></div>
                <div className="cta-stat"><span className="cta-stat-num mono">∞</span><span className="cta-stat-label">Расчётное количество листьев</span></div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <svg className="nav-emblem footer-emblem" viewBox="0 0 32 32" fill="none">
                <rect x="1" y="1" width="30" height="30" stroke="currentColor" strokeWidth="1"/>
                <rect x="5" y="5" width="22" height="22" stroke="currentColor" strokeWidth="0.5" opacity="0.5"/>
                <line x1="16" y1="1" x2="16" y2="31" stroke="currentColor" strokeWidth="0.5" opacity="0.4"/>
                <line x1="1" y1="16" x2="31" y2="16" stroke="currentColor" strokeWidth="0.5" opacity="0.4"/>
                <circle cx="16" cy="16" r="4" stroke="currentColor" strokeWidth="1"/>
                <circle cx="16" cy="16" r="1" fill="currentColor"/>
              </svg>
              <div>
                <div className="footer-brand-name">Ministry of Growth</div>
                <div className="footer-brand-dept">Bureau of International Botanical Security</div>
                <div className="footer-brand-dept" style={{marginTop:'2px'}}>Российский сектор / Russian Sector</div>
              </div>
            </div>
            <div className="footer-col">
              <div className="footer-col-title">Навигация</div>
              <a href="#about">Досье объектов</a>
              <a href="#dashboard">Панель мониторинга</a>
              <a href="#archive">Архив наблюдений</a>
              <a href="#register">Регистрация наблюдателя</a>
              <a href="#report">Сообщить об инциденте</a>
            </div>
            <div className="footer-col">
              <div className="footer-col-title">Документы</div>
              <a href="#">Директива BD-BOT-RUS-2019-7</a>
              <a href="#">Кодекс поведения наблюдателя</a>
              <a href="#">Протокол экстренного полива</a>
              <a href="#">Политика свободы информации</a>
              <a href="#">Конфиденциальность (не обязательная)</a>
            </div>
            <div className="footer-col">
              <div className="footer-col-title">Контакт</div>
              <span className="footer-meta">Запросы принимаются только в письменной форме</span>
              <span className="footer-meta">Срок ответа: 30–90 рабочих дней</span>
              <span className="footer-meta">Телефонная линия отсутствует</span>
              <span className="footer-meta">Личный приём не предусмотрен</span>
            </div>
          </div>
          <div className="footer-bottom">
            <span className="mono small">© 2014–2026 Ministry of Growth / Bureau of International Botanical Security</span>
            <span className="mono small">Document No. MOG-WEB-001-RUS / Public Access Tier</span>
            <span className="mono small">Данные предоставляются исключительно в целях наблюдения.</span>
          </div>
        </div>
      </footer>

      <MainScripts />
    </>
  )
}
