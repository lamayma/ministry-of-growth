import SubmitScripts from '../../components/SubmitScripts'

export const metadata = {
  title: 'Подать объект — Ministry of Growth',
}

export default function SubmitPage() {
  return (
    <>
      <nav className="nav" id="nav">
        <div className="nav-inner container">
          <div className="nav-brand">
            <a href="/" style={{display:'flex',alignItems:'center',gap:'14px',textDecoration:'none'}}>
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
                <span className="nav-dept">Bureau of International Botanical Security</span>
              </div>
            </a>
          </div>
          <div className="nav-right">
            <div className="nav-op-badge">OPERATION <span className="op-name">GREENWATCH</span></div>
            <a href="/" className="btn btn-outline" style={{fontSize:'0.72rem',padding:'7px 16px'}}>← Портал наблюдения</a>
          </div>
        </div>
      </nav>

      <main className="submit-main">

        <div className="submit-hero">
          <div className="container">
            <div className="submit-hero-label-row">
              <span className="section-label">Форма MOG-SUB-01 — Rev. 1</span>
              <span className="section-label">Программа расширения реестра</span>
              <span className="section-label badge-gold-text">$10 / объект</span>
            </div>
            <h1 className="submit-hero-title">Регистрация<br/>нового объекта наблюдения</h1>
            <p className="submit-hero-sub">
              Бюро международной ботанической безопасности принимает заявки на включение растений
              в официальный реестр государственного мониторинга в рамках Операции GREENWATCH.
              Каждый одобренный объект получает номер, псевдоним и полное досье.
            </p>
          </div>
          <div className="submit-hero-grid-overlay"></div>
        </div>

        <div className="container submit-body">

          <div className="process-steps">
            <div className="process-step">
              <div className="step-num mono">01</div>
              <div className="step-body">
                <div className="step-title">Заполните заявку</div>
                <p>Предоставьте информацию об объекте: вид, место дислокации, фото. Бюро проводит предварительную оценку.</p>
              </div>
            </div>
            <div className="step-arrow">→</div>
            <div className="process-step">
              <div className="step-num mono">02</div>
              <div className="step-body">
                <div className="step-title">Оплата регистрации</div>
                <p>После одобрения заявки производится оплата $10. Система оплаты подключается в ближайшее время.</p>
              </div>
            </div>
            <div className="step-arrow">→</div>
            <div className="process-step">
              <div className="step-num mono">03</div>
              <div className="step-body">
                <div className="step-title">Публикация досье</div>
                <p>Объект получает номер, псевдоним и досье. Первичный визуальный анализ проводится Бюро в течение 72 часов.</p>
              </div>
            </div>
            <div className="step-arrow">→</div>
            <div className="process-step">
              <div className="step-num mono">04</div>
              <div className="step-body">
                <div className="step-title">Непрерывное наблюдение</div>
                <p>Вы получаете статус «Гражданский наблюдатель» и право подавать рапорты об инцидентах напрямую в архив.</p>
              </div>
            </div>
          </div>

          <div className="submit-layout">

            <div className="submit-form-col">
              <div className="form-doc-header">
                <span className="mono small">Form MOG-SUB-01 — Rev. 1</span>
                <span className="mono small">Уровень доступа: Открытый</span>
              </div>
              <form className="form submit-form" id="submit-form" noValidate>

                <div className="form-section-title">Сведения о заявителе</div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="sub-name">Полное имя <span className="required">*</span></label>
                    <input className="form-input" type="text" id="sub-name" name="name" placeholder="Как зарегистрировано" required/>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="sub-email">Email для связи <span className="required">*</span></label>
                    <input className="form-input" type="email" id="sub-email" name="email" placeholder="agent@example.com" required/>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="sub-region">Регион дислокации объекта <span className="required">*</span></label>
                    <input className="form-input" type="text" id="sub-region" name="region" placeholder="Город, район, этаж" required/>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="sub-observer-class">Ваша текущая классификация</label>
                    <select className="form-input form-select" id="sub-observer-class" name="observer_class">
                      <option value="">— Не зарегистрирован —</option>
                      <option value="casual">Рядовой наблюдатель</option>
                      <option value="dedicated">Преданный монитор</option>
                      <option value="senior">Старший ботанический дозорный</option>
                      <option value="honorary">Почётный счётчик листьев</option>
                    </select>
                  </div>
                </div>

                <div className="form-divider"></div>
                <div className="form-section-title">Данные об объекте</div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="sub-species">Вид растения <span className="required">*</span></label>
                    <input className="form-input" type="text" id="sub-species" name="species" placeholder="Dracaena marginata, Кактус и т.д." required/>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="sub-age">Примерный возраст объекта</label>
                    <input className="form-input" type="text" id="sub-age" name="age" placeholder="~2 года, неизвестен и т.д."/>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="sub-location-desc">Описание места дислокации <span className="required">*</span></label>
                  <input className="form-input" type="text" id="sub-location-desc" name="location_desc" placeholder="Подоконник, рабочий стол, угол гостиной..." required/>
                </div>

                <div className="form-group">
                  <label className="form-label">Категория объекта <span className="required">*</span></label>
                  <div className="category-grid">
                    <label className="category-opt">
                      <input type="radio" name="category" value="succulent"/>
                      <div className="category-card">
                        <div className="category-icon">🌵</div>
                        <div className="category-name">Суккулент / кактус</div>
                      </div>
                    </label>
                    <label className="category-opt">
                      <input type="radio" name="category" value="tropical"/>
                      <div className="category-card">
                        <div className="category-icon">🌿</div>
                        <div className="category-name">Тропическое</div>
                      </div>
                    </label>
                    <label className="category-opt">
                      <input type="radio" name="category" value="orchid"/>
                      <div className="category-card">
                        <div className="category-icon">🪷</div>
                        <div className="category-name">Орхидея</div>
                      </div>
                    </label>
                    <label className="category-opt">
                      <input type="radio" name="category" value="other"/>
                      <div className="category-card">
                        <div className="category-icon">🌱</div>
                        <div className="category-name">Иное / неизвестно</div>
                      </div>
                    </label>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="sub-condition">Текущее состояние объекта <span className="required">*</span></label>
                  <select className="form-input form-select" id="sub-condition" name="condition" required>
                    <option value="">— Выберите —</option>
                    <option value="excellent">Отличное — без видимых проблем</option>
                    <option value="good">Хорошее — незначительные отклонения</option>
                    <option value="concerning">Требует внимания — есть симптомы</option>
                    <option value="critical">Критическое — срочное вмешательство</option>
                    <option value="unknown">Состояние неизвестно — прошу оценить</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="sub-photo-url">Ссылка на фото объекта</label>
                  <input className="form-input" type="url" id="sub-photo-url" name="photo_url" placeholder="https://... (Google Фото, Яндекс Диск, Imgur и т.д.)"/>
                  <span className="form-hint">Фотография поможет провести визуальный анализ состояния объекта</span>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="sub-description">Дополнительные сведения об объекте</label>
                  <textarea className="form-input form-textarea" id="sub-description" name="description"
                    placeholder="История объекта, особенности ухода, наблюдаемые аномалии, причины, по которым объект заслуживает государственного мониторинга..." rows="4"></textarea>
                </div>

                <div className="form-divider"></div>
                <div className="form-section-title">Запрашиваемый псевдоним</div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="sub-codename">Предпочтительный псевдоним</label>
                    <input className="form-input" type="text" id="sub-codename" name="codename" placeholder="SHADOW, VERDANT, SPIKE..." maxLength="20"/>
                    <span className="form-hint">Одно слово, на английском. Финальное решение — за Бюро.</span>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="sub-priority">Запрашиваемый приоритет</label>
                    <select className="form-input form-select" id="sub-priority" name="priority">
                      <option value="B">Class B — Стандартный</option>
                      <option value="A">Class A — Приоритетный</option>
                      <option value="C">Class C — Специальный (аномальный)</option>
                    </select>
                  </div>
                </div>

                <div className="form-divider"></div>

                <div className="payment-notice">
                  <div className="payment-notice-icon">💳</div>
                  <div className="payment-notice-body">
                    <div className="payment-notice-title">Оплата: $10 за объект</div>
                    <p>После проверки заявки Бюро свяжется с вами по email с инструкциями по оплате.
                    Система онлайн-оплаты подключается в ближайшее время. Подача заявки — бесплатна и ни к чему не обязывает.</p>
                  </div>
                </div>

                <div className="form-submit-wrap">
                  <button className="btn btn-gold btn-full" type="submit" id="submit-btn">
                    Подать заявку на регистрацию объекта
                  </button>
                  <p className="form-disclaimer">
                    Подавая данную форму, вы подтверждаете, что являетесь законным хранителем указанного растения
                    и осознаёте, что регистрация влечёт за собой обязательство периодически информировать Бюро
                    о состоянии объекта. Бюро оставляет за собой право отклонить заявку без объяснения причин.
                    Наиболее вероятная причина отказа: растение слишком скучное.
                  </p>
                </div>

              </form>

              <div className="form-success hidden" id="submit-success">
                <div className="success-icon">✓</div>
                <div className="success-title mono">Заявка принята к рассмотрению</div>
                <p>Бюро зарегистрировало вашу заявку. Предварительная оценка будет проведена в течение 72 часов.
                После одобрения вы получите email с инструкциями по оплате и предварительным регистрационным номером.</p>
                <div className="success-ref-row">
                  <span className="mono small">Номер заявки: SUB-<span id="submit-ref">000000</span></span>
                  <span className="mono small">Статус: НА РАССМОТРЕНИИ</span>
                </div>
                <a href="/" className="btn btn-outline" style={{marginTop:'16px'}}>← Вернуться на портал</a>
              </div>
            </div>

            <div className="submit-sidebar">
              <div className="sidebar-card">
                <div className="sidebar-card-title">Текущий реестр</div>
                <div className="sidebar-objects">
                  <div className="sidebar-obj">
                    <span className="mono small obj-num">041</span>
                    <span className="obj-name">DRAGON — <em>Dracaena marginata</em></span>
                    <span className="badge badge-green" style={{fontSize:'0.55rem'}}>АКТИВЕН</span>
                  </div>
                  <div className="sidebar-obj">
                    <span className="mono small obj-num">042</span>
                    <span className="obj-name">MOTH — <em>Phalaenopsis sp.</em></span>
                    <span className="badge badge-green" style={{fontSize:'0.55rem'}}>АКТИВЕН</span>
                  </div>
                  <div className="sidebar-obj">
                    <span className="mono small obj-num">043</span>
                    <span className="obj-name">JADE — <em>Crassula ovata</em></span>
                    <span className="badge badge-green" style={{fontSize:'0.55rem'}}>АКТИВЕН</span>
                  </div>
                  <div className="sidebar-obj">
                    <span className="mono small obj-num">044</span>
                    <span className="obj-name">BINARY — <em>Cactaceae sp.</em></span>
                    <span className="badge badge-green" style={{fontSize:'0.55rem'}}>АКТИВЕН</span>
                  </div>
                  <div className="sidebar-obj sidebar-obj--pending">
                    <span className="mono small obj-num">045</span>
                    <span className="obj-name">??? — ожидает заявки</span>
                    <span className="badge badge-default" style={{fontSize:'0.55rem'}}>ВАКАНТНО</span>
                  </div>
                </div>
              </div>

              <div className="sidebar-card">
                <div className="sidebar-card-title">Что входит в $10</div>
                <ul className="sidebar-include-list">
                  <li><span className="ok-icon">✓</span> Официальный номер (BOT-ГГГГ-0XX)</li>
                  <li><span className="ok-icon">✓</span> Оперативный псевдоним ЦРУ-стиль</li>
                  <li><span className="ok-icon">✓</span> Визуальный анализ состояния</li>
                  <li><span className="ok-icon">✓</span> Досье на портале (публично)</li>
                  <li><span className="ok-icon">✓</span> Первичная запись в архив</li>
                  <li><span className="ok-icon">✓</span> Право подачи рапортов</li>
                  <li><span className="ok-icon">✓</span> Статус «Гражданский наблюдатель»</li>
                </ul>
              </div>

              <div className="sidebar-card sidebar-card--faq">
                <div className="sidebar-card-title">FAQ</div>
                <div className="faq-item">
                  <div className="faq-q">Любое ли растение принимается?</div>
                  <div className="faq-a">Бюро рассматривает любые горшечные растения. Допускаются также: кактусы, суккуленты, орхидеи, папоротники, монстеры и другие объекты с потенциалом роста.</div>
                </div>
                <div className="faq-item">
                  <div className="faq-q">Могу ли я зарегистрировать несколько?</div>
                  <div className="faq-a">Да. Каждый объект оформляется отдельной заявкой по $10. Скидка при регистрации 3+ объектов обсуждается индивидуально.</div>
                </div>
                <div className="faq-item">
                  <div className="faq-q">Когда появится онлайн-оплата?</div>
                  <div className="faq-a">Система оплаты подключается в ближайшее время. Пока — подайте заявку, Бюро свяжется с вами по email.</div>
                </div>
                <div className="faq-item">
                  <div className="faq-q">Что если растение погибнет?</div>
                  <div className="faq-a">Объект переводится в статус «АРХИВНЫЙ» с соответствующей записью. Это также является частью официальной истории наблюдения.</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-bottom" style={{justifyContent:'center',textAlign:'center',flexDirection:'column',gap:'6px'}}>
            <span className="mono small">© 2014–2026 Ministry of Growth / Bureau of International Botanical Security</span>
            <span className="mono small">Стоимость регистрации может быть изменена Бюро без предварительного уведомления. Это справедливо.</span>
          </div>
        </div>
      </footer>

      <SubmitScripts />
    </>
  )
}
