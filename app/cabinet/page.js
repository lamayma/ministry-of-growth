'use client'
import { useState, useEffect, useRef } from 'react'

// ── Ranks ─────────────────────────────────────────────────────────────────
const RANKS = [
  { min: 0,   title: 'Рекрут',               badge: '🌱', color: '#6b7a70', clearance: 'УРОВЕНЬ-0' },
  { min: 3,   title: 'Наблюдатель',           badge: '🌿', color: '#4ade80', clearance: 'УРОВЕНЬ-1' },
  { min: 8,   title: 'Полевой дозорный',      badge: '🔍', color: '#7dd3b0', clearance: 'УРОВЕНЬ-2' },
  { min: 20,  title: 'Инспектор листвы',      badge: '⭐', color: '#facc15', clearance: 'УРОВЕНЬ-3' },
  { min: 50,  title: 'Капитан GREENWATCH',    badge: '🏅', color: '#fb923c', clearance: 'УРОВЕНЬ-4' },
  { min: 100, title: 'Легенда операции',      badge: '🎖️', color: '#c084fc', clearance: 'УРОВЕНЬ-5' },
]

function getRank(total) {
  let rank = RANKS[0]
  for (const r of RANKS) { if (total >= r.min) rank = r }
  return rank
}

function getNextRank(total) {
  return RANKS.find(r => r.min > total) ?? null
}

// ── Helpers ───────────────────────────────────────────────────────────────
function fmt(ts) {
  return new Date(ts).toLocaleDateString('ru-RU', { day: '2-digit', month: '2-digit', year: 'numeric' })
}

function fmtTime(sec) {
  const h = String(Math.floor(sec / 3600)).padStart(2, '0')
  const m = String(Math.floor((sec % 3600) / 60)).padStart(2, '0')
  const s = String(sec % 60).padStart(2, '0')
  return `${h}:${m}:${s}`
}

// ── Styles ────────────────────────────────────────────────────────────────
const S = {
  page:    { minHeight: '100vh', background: '#0c110e', color: '#e8ede9', fontFamily: 'Inter, sans-serif', padding: '0 16px 60px' },
  card:    { background: '#111710', border: '1px solid #2d3530', borderRadius: 8, padding: '20px 24px', marginBottom: 16 },
  label:   { fontSize: 10, letterSpacing: '0.12em', color: '#4a5550', textTransform: 'uppercase', marginBottom: 4 },
  val:     { fontSize: 15, color: '#e8ede9', fontWeight: 500 },
  mono:    { fontFamily: 'Space Mono, monospace', fontSize: 13 },
  row:     { display: 'flex', gap: 12, flexWrap: 'wrap' },
  input:   { background: '#0c110e', border: '1px solid #2d3530', color: '#e8ede9', borderRadius: 6, padding: '10px 14px', fontSize: 14, width: '100%', boxSizing: 'border-box', outline: 'none' },
  btn:     { background: '#1e3a28', border: '1px solid #2d5038', color: '#4ade80', borderRadius: 6, padding: '10px 20px', fontSize: 13, cursor: 'pointer', fontWeight: 500 },
  btnSm:   { background: 'none', border: '1px solid #2d3530', color: '#6b7a70', borderRadius: 4, padding: '4px 10px', fontSize: 11, cursor: 'pointer' },
}

// ── Entry screen ──────────────────────────────────────────────────────────
function EntryScreen({ onSubmit }) {
  const [val, setVal] = useState('')
  const [err, setErr] = useState('')

  function handle(e) {
    e.preventDefault()
    const num = val.trim().replace(/^OBS-/i, '').toUpperCase()
    if (num.length < 4) { setErr('Введите ваш номер наблюдателя (OBS-XXXX-XXXX)'); return }
    onSubmit(num)
  }

  return (
    <div style={{ ...S.page, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ maxWidth: 420, width: '100%' }}>
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <div style={{ fontSize: 40, marginBottom: 12 }}>🪪</div>
          <h1 style={{ margin: 0, fontSize: 20, fontWeight: 600 }}>Личный кабинет наблюдателя</h1>
          <p style={{ color: '#4a5550', fontSize: 14, marginTop: 8 }}>Введите ваш номер наблюдателя для доступа к досье</p>
        </div>
        <form onSubmit={handle}>
          <input
            style={{ ...S.input, marginBottom: 8, textAlign: 'center', fontSize: 18, letterSpacing: '0.1em', fontFamily: 'Space Mono, monospace' }}
            placeholder="OBS-XXXX-XXXX"
            value={val}
            onChange={e => { setVal(e.target.value); setErr('') }}
            autoFocus
          />
          {err && <p style={{ color: '#f87171', fontSize: 12, margin: '0 0 8px', textAlign: 'center' }}>{err}</p>}
          <button style={{ ...S.btn, width: '100%', padding: '12px', fontSize: 14, marginTop: 4 }} type="submit">
            Войти в досье →
          </button>
        </form>
        <p style={{ textAlign: 'center', fontSize: 12, color: '#3a4540', marginTop: 16 }}>
          Нет номера? <a href="/#register" style={{ color: '#4a5550', textDecoration: 'underline' }}>Зарегистрируйтесь</a>
        </p>
      </div>
    </div>
  )
}

// ── Timer ─────────────────────────────────────────────────────────────────
function SessionTimer({ weeklyHours }) {
  const [running, setRunning] = useState(false)
  const [elapsed, setElapsed] = useState(0)
  const [totalToday, setTotalToday] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    if (running) {
      ref.current = setInterval(() => setElapsed(s => s + 1), 1000)
    } else {
      clearInterval(ref.current)
    }
    return () => clearInterval(ref.current)
  }, [running])

  function stop() { setRunning(false); setTotalToday(t => t + elapsed); setElapsed(0) }

  const quota = (weeklyHours || 0) * 3600
  const used  = totalToday + elapsed
  const pct   = quota > 0 ? Math.min(100, (used / quota) * 100) : 0

  return (
    <div style={S.card}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
        <span style={{ fontSize: 13, fontWeight: 600 }}>⏱ Рабочая сессия</span>
        <span style={{ ...S.mono, fontSize: 11, color: '#4a5550' }}>
          Недельная норма: {weeklyHours || '—'} ч
        </span>
      </div>

      <div style={{ textAlign: 'center', marginBottom: 16 }}>
        <div style={{ ...S.mono, fontSize: 36, color: running ? '#4ade80' : '#e8ede9', letterSpacing: '0.05em' }}>
          {fmtTime(elapsed)}
        </div>
        <div style={{ fontSize: 11, color: '#4a5550', marginTop: 4 }}>
          Сегодня всего: {fmtTime(totalToday + elapsed)}
        </div>
      </div>

      {quota > 0 && (
        <div style={{ marginBottom: 16 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: '#4a5550', marginBottom: 4 }}>
            <span>Выработка за день</span>
            <span>{pct.toFixed(0)}% от нормы</span>
          </div>
          <div style={{ background: '#1a1f1c', borderRadius: 4, height: 6 }}>
            <div style={{ height: 6, borderRadius: 4, width: `${pct}%`, background: pct >= 100 ? '#facc15' : '#4ade80', transition: 'width 0.5s' }} />
          </div>
        </div>
      )}

      <div style={{ display: 'flex', gap: 8 }}>
        {!running
          ? <button style={S.btn} onClick={() => setRunning(true)}>▶ Начать сессию</button>
          : <button style={{ ...S.btn, background: '#3a1818', borderColor: '#5a2828', color: '#f87171' }} onClick={stop}>⏹ Остановить</button>
        }
        <button style={S.btnSm} onClick={() => { setElapsed(0); setTotalToday(0); setRunning(false) }}>Сброс</button>
      </div>
    </div>
  )
}

// ── Observation form ──────────────────────────────────────────────────────
function ObsForm({ observerRef, onAdded }) {
  const [form, setForm] = useState({ object_code: '', obs_type: '', notes: '', duration_min: '' })
  const [saving, setSaving] = useState(false)

  async function submit(e) {
    e.preventDefault()
    if (!form.object_code || !form.obs_type) return
    setSaving(true)
    const res = await fetch('/api/observations', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ observer_ref: observerRef, ...form, duration_min: form.duration_min ? Number(form.duration_min) : null }),
    })
    const data = await res.json()
    setSaving(false)
    if (data.ok) {
      setForm({ object_code: '', obs_type: '', notes: '', duration_min: '' })
      onAdded(data.observation)
    }
  }

  const sel = { ...S.input, padding: '8px 12px' }

  return (
    <form onSubmit={submit} style={{ marginBottom: 20 }}>
      <div style={{ ...S.row, marginBottom: 10 }}>
        <select style={{ ...sel, flex: 1, minWidth: 140 }} value={form.object_code} onChange={e => setForm(f => ({ ...f, object_code: e.target.value }))}>
          <option value="">— Объект —</option>
          <option value="OBJ-041 DRAGON">OBJ-041 DRAGON</option>
          <option value="OBJ-042 MOTH">OBJ-042 MOTH</option>
          <option value="OBJ-043 JADE">OBJ-043 JADE</option>
          <option value="OBJ-044 BINARY">OBJ-044 BINARY</option>
          <option value="НЕИЗВЕСТНЫЙ">НЕИЗВЕСТНЫЙ</option>
        </select>
        <select style={{ ...sel, flex: 1, minWidth: 160 }} value={form.obs_type} onChange={e => setForm(f => ({ ...f, obs_type: e.target.value }))}>
          <option value="">— Тип наблюдения —</option>
          <option value="Визуальный осмотр">Визуальный осмотр</option>
          <option value="Измерение влажности">Измерение влажности</option>
          <option value="Фотофиксация">Фотофиксация</option>
          <option value="Полив">Полив</option>
          <option value="Осмотр листьев">Осмотр листьев</option>
          <option value="Замер роста">Замер роста</option>
          <option value="Экстренный осмотр">Экстренный осмотр</option>
        </select>
        <input style={{ ...sel, width: 90 }} type="number" placeholder="Мин." min="1" max="999"
          value={form.duration_min} onChange={e => setForm(f => ({ ...f, duration_min: e.target.value }))} />
      </div>
      <div style={{ display: 'flex', gap: 10 }}>
        <input style={{ ...S.input, flex: 1 }} placeholder="Заметки (необязательно)"
          value={form.notes} onChange={e => setForm(f => ({ ...f, notes: e.target.value }))} />
        <button style={{ ...S.btn, whiteSpace: 'nowrap', opacity: saving ? 0.6 : 1 }} type="submit" disabled={saving}>
          {saving ? '…' : '+ Записать'}
        </button>
      </div>
    </form>
  )
}

// ── Main cabinet ──────────────────────────────────────────────────────────
function Cabinet({ refNum, onLogout }) {
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError]     = useState('')
  const [copied, setCopied]   = useState(false)

  useEffect(() => {
    fetch(`/api/cabinet/${refNum}`)
      .then(r => r.json())
      .then(d => { if (d.error) setError(d.error); else setProfile(d); setLoading(false) })
  }, [refNum])

  function addObs(obs) {
    setProfile(p => ({
      ...p,
      observations: [obs, ...p.observations],
      stats: { ...p.stats, obsCount: p.stats.obsCount + 1, total: p.stats.total + 1 },
    }))
  }

  function copyRef() {
    navigator.clipboard.writeText(`OBS-${refNum}`)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  if (loading) return <div style={{ ...S.page, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4a5550' }}>Загрузка досье…</div>
  if (error)   return <div style={{ ...S.page, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#f87171' }}>{error} — <button style={{ ...S.btnSm, marginLeft: 8 }} onClick={onLogout}>Назад</button></div>

  const { registration: reg, reports, observations, stats } = profile
  const rank     = getRank(stats.total)
  const nextRank = getNextRank(stats.total)
  const toNext   = nextRank ? nextRank.min - stats.total : 0
  const pctRank  = nextRank ? ((stats.total - rank.min) / (nextRank.min - rank.min)) * 100 : 100

  const classLabels = { casual: 'Рядовой наблюдатель', dedicated: 'Преданный монитор', senior: 'Старший дозорный', honorary: 'Почётный счётчик' }
  const readinessLabels = { yes: 'Подтверждена', review: 'На рассмотрении', conditional: 'Условная' }

  return (
    <div style={S.page}>
      <div style={{ maxWidth: 820, margin: '0 auto', paddingTop: 28 }}>

        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
          <a href="/" style={{ fontSize: 12, color: '#4a5550', textDecoration: 'none' }}>← На сайт</a>
          <button style={S.btnSm} onClick={onLogout}>Выйти</button>
        </div>

        {/* Badge card */}
        <div style={{ ...S.card, background: '#0f1a13', border: `1px solid ${rank.color}33`, marginBottom: 16 }}>
          <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', alignItems: 'flex-start' }}>

            {/* Badge */}
            <div style={{ textAlign: 'center', minWidth: 110 }}>
              <div style={{ fontSize: 52, lineHeight: 1, marginBottom: 8 }}>{rank.badge}</div>
              <div style={{ fontSize: 11, fontWeight: 700, color: rank.color, letterSpacing: '0.08em', textTransform: 'uppercase' }}>{rank.title}</div>
              <div style={{ fontSize: 10, color: '#4a5550', marginTop: 3, fontFamily: 'Space Mono, monospace' }}>{rank.clearance}</div>
            </div>

            {/* Info */}
            <div style={{ flex: 1, minWidth: 200 }}>
              <div style={{ fontSize: 18, fontWeight: 600, marginBottom: 4 }}>{reg.name}</div>
              <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 12 }}>
                <span style={{ fontFamily: 'Space Mono, monospace', fontSize: 14, color: '#7dd3b0' }}>OBS-{refNum}</span>
                <button style={{ ...S.btnSm, fontSize: 10, padding: '2px 8px' }} onClick={copyRef}>
                  {copied ? '✓ скопировано' : 'копировать'}
                </button>
              </div>
              <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
                <div><div style={S.label}>Регион</div><div style={S.val}>{reg.region}</div></div>
                <div><div style={S.label}>Класс</div><div style={S.val}>{classLabels[reg.classification] ?? reg.classification ?? '—'}</div></div>
                <div><div style={S.label}>Готовность</div><div style={S.val}>{readinessLabels[reg.readiness] ?? reg.readiness}</div></div>
                <div><div style={S.label}>В системе с</div><div style={S.val}>{fmt(reg.created_at)}</div></div>
              </div>
            </div>

            {/* Stats */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, minWidth: 100 }}>
              {[['Рапортов', stats.reportCount, '#f87171'], ['Наблюдений', stats.obsCount, '#7dd3b0'], ['Всего', stats.total, rank.color]].map(([l, v, c]) => (
                <div key={l} style={{ textAlign: 'center', background: '#0c110e', borderRadius: 6, padding: '8px 14px', border: '1px solid #2d3530' }}>
                  <div style={{ fontSize: 22, fontWeight: 700, color: c }}>{v}</div>
                  <div style={{ fontSize: 10, color: '#4a5550', marginTop: 2 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Rank progress */}
          <div style={{ marginTop: 20, paddingTop: 16, borderTop: '1px solid #1e2520' }}>
            {nextRank ? (
              <>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: '#4a5550', marginBottom: 6 }}>
                  <span>Прогресс до <span style={{ color: nextRank.color }}>{nextRank.badge} {nextRank.title}</span></span>
                  <span>ещё {toNext} вклад{toNext % 10 === 1 && toNext !== 11 ? '' : toNext % 10 < 5 && (toNext < 11 || toNext > 14) ? 'а' : 'ов'}</span>
                </div>
                <div style={{ background: '#1a1f1c', borderRadius: 4, height: 8 }}>
                  <div style={{ height: 8, borderRadius: 4, background: rank.color, width: `${Math.max(4, pctRank)}%`, transition: 'width 1s ease' }} />
                </div>
              </>
            ) : (
              <div style={{ textAlign: 'center', fontSize: 13, color: rank.color }}>🎖️ Достигнут максимальный ранг. Вы — Легенда операции.</div>
            )}
          </div>
        </div>

        {/* Timer */}
        <SessionTimer weeklyHours={reg.hours} />

        {/* Field observations */}
        <div style={S.card}>
          <div style={{ fontWeight: 600, marginBottom: 14, fontSize: 14 }}>📋 Полевые наблюдения</div>
          <ObsForm observerRef={`OBS-${refNum}`} onAdded={addObs} />

          {observations.length === 0
            ? <p style={{ color: '#4a5550', fontSize: 13, textAlign: 'center', padding: '12px 0' }}>Наблюдения не записаны. Каждая запись приближает вас к следующему рангу.</p>
            : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {observations.map(o => (
                  <div key={o.id} style={{ background: '#0c110e', border: '1px solid #1e2520', borderRadius: 6, padding: '10px 14px', display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
                    <span style={{ fontSize: 11, color: '#4a5550', fontFamily: 'Space Mono, monospace' }}>{new Date(o.created_at).toLocaleDateString('ru-RU')}</span>
                    <span style={{ fontSize: 12, color: '#7dd3b0', fontWeight: 500 }}>{o.object_code}</span>
                    <span style={{ fontSize: 12, color: '#c8d4cc' }}>{o.obs_type}</span>
                    {o.duration_min && <span style={{ fontSize: 11, color: '#4a5550' }}>{o.duration_min} мин.</span>}
                    {o.notes && <span style={{ fontSize: 12, color: '#6b7a70', flex: 1 }}>{o.notes}</span>}
                  </div>
                ))}
              </div>
            )
          }
        </div>

        {/* Reports */}
        {reports.length > 0 && (
          <div style={S.card}>
            <div style={{ fontWeight: 600, marginBottom: 14, fontSize: 14 }}>🌿 Поданные рапорты</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {reports.map(r => (
                <div key={r.id} style={{ background: '#0c110e', border: '1px solid #1e2520', borderRadius: 6, padding: '10px 14px', display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
                  <span style={{ fontSize: 11, color: '#4a5550', fontFamily: 'Space Mono, monospace' }}>{new Date(r.created_at).toLocaleDateString('ru-RU')}</span>
                  <span style={{ fontSize: 12, color: '#f87171', fontWeight: 500 }}>{r.incident_type}</span>
                  <span style={{ fontSize: 11, color: '#4a5550', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{r.severity}</span>
                  <span style={{ fontSize: 12, color: '#6b7a70', flex: 1 }}>{r.description}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Dossier */}
        {reg.statement && (
          <div style={S.card}>
            <div style={{ fontWeight: 600, marginBottom: 10, fontSize: 14 }}>📄 Заявление о намерениях</div>
            <p style={{ fontSize: 13, color: '#6b7a70', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>«{reg.statement}»</p>
          </div>
        )}

      </div>
    </div>
  )
}

// ── Root ──────────────────────────────────────────────────────────────────
export default function CabinetPage() {
  const [refNum, setRefNum] = useState(null)

  useEffect(() => {
    const saved = localStorage.getItem('obs_ref')
    if (saved) setRefNum(saved)
  }, [])

  function login(num) { localStorage.setItem('obs_ref', num); setRefNum(num) }
  function logout()   { localStorage.removeItem('obs_ref'); setRefNum(null) }

  if (!refNum) return <EntryScreen onSubmit={login} />
  return <Cabinet refNum={refNum} onLogout={logout} />
}
