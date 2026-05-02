'use client'
import { useEffect, useState } from 'react'

const STATUS_LABELS = { new: 'Новый', contacted: 'Связались', closed: 'Закрыт' }
const STATUS_COLORS = { new: '#4ade80', contacted: '#facc15', closed: '#6b7280' }

function fmt(ts) {
  if (!ts) return '—'
  return new Date(ts).toLocaleString('ru-RU', {
    day: '2-digit', month: '2-digit', year: '2-digit',
    hour: '2-digit', minute: '2-digit',
  })
}

function StatusSelect({ table, id, value, onChange }) {
  const [saving, setSaving] = useState(false)
  async function handle(e) {
    const status = e.target.value
    setSaving(true)
    await fetch('/api/admin/status', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ table, id, status }),
    })
    setSaving(false)
    onChange(id, status)
  }
  return (
    <select value={value || 'new'} onChange={handle} disabled={saving} style={{
      background: '#1a1f1c', color: STATUS_COLORS[value] ?? '#4ade80',
      border: '1px solid #2d3530', borderRadius: 4, padding: '3px 8px',
      fontSize: 12, cursor: 'pointer', opacity: saving ? 0.5 : 1,
    }}>
      {Object.entries(STATUS_LABELS).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
    </select>
  )
}

function MailLink({ email }) {
  if (!email) return <span style={{ color: '#4a5550' }}>—</span>
  return (
    <a href={`mailto:${email}`} style={{ color: '#7dd3b0', textDecoration: 'none', fontSize: 12 }}>
      {email}
    </a>
  )
}

function Cell({ children, muted, wrap }) {
  return (
    <td style={{
      padding: '10px 12px',
      color: muted ? '#6b7a70' : '#c8d4cc',
      whiteSpace: wrap ? 'normal' : 'nowrap',
      verticalAlign: 'top',
      fontSize: 13,
      lineHeight: 1.5,
    }}>
      {children ?? <span style={{ color: '#3a4540' }}>—</span>}
    </td>
  )
}

function Section({ title, rows, cols, renderRow, table, onStatusChange }) {
  const [open, setOpen] = useState(true)

  return (
    <div style={{ marginBottom: 36 }}>
      <button onClick={() => setOpen(o => !o)} style={{
        background: 'none', border: 'none', color: '#e8ede9',
        fontSize: 15, fontWeight: 600, cursor: 'pointer',
        display: 'flex', alignItems: 'center', gap: 8, padding: '6px 0', marginBottom: 8,
      }}>
        <span style={{ fontSize: 11, color: '#4a5550' }}>{open ? '▼' : '▶'}</span>
        {title}
        <span style={{ fontSize: 12, color: '#4a5550', fontWeight: 400 }}>({rows.length})</span>
      </button>

      {open && (
        <div style={{ overflowX: 'auto', border: '1px solid #2d3530', borderRadius: 6 }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
            <thead>
              <tr style={{ background: '#131815' }}>
                {cols.map(c => (
                  <th key={c} style={{
                    padding: '8px 12px', textAlign: 'left',
                    color: '#4a5a50', fontWeight: 500, whiteSpace: 'nowrap',
                    borderBottom: '1px solid #2d3530', fontSize: 12,
                  }}>{c}</th>
                ))}
                <th style={{
                  padding: '8px 12px', color: '#4a5a50',
                  fontWeight: 500, borderBottom: '1px solid #2d3530', fontSize: 12,
                }}>Статус</th>
              </tr>
            </thead>
            <tbody>
              {rows.length === 0 && (
                <tr>
                  <td colSpan={cols.length + 1} style={{ padding: '20px 12px', color: '#4a5550', textAlign: 'center' }}>
                    Нет данных
                  </td>
                </tr>
              )}
              {rows.map((row, i) => (
                <tr key={row.id} style={{
                  background: i % 2 === 0 ? '#0f1410' : '#111710',
                  borderBottom: '1px solid #1c2219',
                }}>
                  {renderRow(row)}
                  <td style={{ padding: '10px 12px', verticalAlign: 'top', whiteSpace: 'nowrap' }}>
                    <StatusSelect table={table} id={row.id} value={row.status} onChange={onStatusChange} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

export default function AdminPage() {
  const [data, setData] = useState({ registrations: [], reports: [], submissions: [] })
  const [loading, setLoading] = useState(true)

  function load() {
    setLoading(true)
    fetch('/api/admin').then(r => r.json()).then(d => { setData(d); setLoading(false) })
  }

  useEffect(() => { load() }, [])

  function updater(table) {
    return (id, status) => setData(prev => ({
      ...prev,
      [table]: prev[table].map(r => r.id === id ? { ...r, status } : r),
    }))
  }

  const s = { minHeight: '100vh', background: '#0c110e', color: '#e8ede9', fontFamily: 'Inter, sans-serif' }

  if (loading) return (
    <div style={{ ...s, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4a5550' }}>
      Загрузка…
    </div>
  )

  return (
    <div style={{ ...s, padding: '28px 20px' }}>
      <div style={{ maxWidth: 1400, margin: '0 auto' }}>

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 28, borderBottom: '1px solid #2d3530', paddingBottom: 14 }}>
          <h1 style={{ margin: 0, fontSize: 18, fontWeight: 600, letterSpacing: '0.01em' }}>
            Admin — Лиды
          </h1>
          <a href="/" style={{ fontSize: 12, color: '#4a5550', textDecoration: 'none' }}>← На сайт</a>
          <div style={{ marginLeft: 'auto', display: 'flex', gap: 12, alignItems: 'center' }}>
            <span style={{ fontSize: 12, color: '#4a5550' }}>
              {data.registrations.length + data.reports.length + data.submissions.length} записей
            </span>
            <button onClick={load} style={{
              background: 'none', border: '1px solid #2d3530', color: '#6b7a70',
              borderRadius: 4, padding: '4px 12px', fontSize: 12, cursor: 'pointer',
            }}>
              Обновить
            </button>
          </div>
        </div>

        {/* Registrations */}
        <Section
          title="🧑‍🔬 Регистрации наблюдателей"
          rows={data.registrations}
          table="registrations"
          onStatusChange={updater('registrations')}
          cols={['#', 'Дата', 'Номер OBS', 'Имя', 'Email', 'Регион', 'Готовность', 'Класс', 'Заявление']}
          renderRow={r => <>
            <Cell muted>{r.id}</Cell>
            <Cell muted>{fmt(r.created_at)}</Cell>
            <Cell><span style={{ color: '#7dd3b0', fontFamily: 'monospace' }}>OBS-{r.ref_number ?? '—'}</span></Cell>
            <Cell>{r.name}</Cell>
            <Cell><MailLink email={r.email} /></Cell>
            <Cell>{r.region}</Cell>
            <Cell>{r.readiness}</Cell>
            <Cell muted>{r.classification}</Cell>
            <Cell wrap>{r.statement}</Cell>
          </>}
        />

        {/* Reports */}
        <Section
          title="🌿 Инциденты"
          rows={data.reports}
          table="reports"
          onStatusChange={updater('reports')}
          cols={['#', 'Дата', 'Наблюдатель', 'Тип', 'Серьёзность', 'Описание']}
          renderRow={r => <>
            <Cell muted>{r.id}</Cell>
            <Cell muted>{fmt(r.created_at)}</Cell>
            <Cell><span style={{ color: '#7dd3b0', fontFamily: 'monospace' }}>{r.observer_ref ?? '—'}</span></Cell>
            <Cell>{r.incident_type}</Cell>
            <Cell>{r.severity}</Cell>
            <Cell wrap>{r.description}</Cell>
          </>}
        />

        {/* Submissions */}
        <Section
          title="🪴 Заявки на растения"
          rows={data.submissions}
          table="submissions"
          onStatusChange={updater('submissions')}
          cols={['#', 'Дата', 'Имя', 'Email', 'Регион', 'Вид', 'Состояние', 'Место', 'Описание']}
          renderRow={r => <>
            <Cell muted>{r.id}</Cell>
            <Cell muted>{fmt(r.created_at)}</Cell>
            <Cell>{r.name}</Cell>
            <Cell><MailLink email={r.email} /></Cell>
            <Cell>{r.region}</Cell>
            <Cell>{r.species}</Cell>
            <Cell>{r.condition}</Cell>
            <Cell wrap>{r.location_desc}</Cell>
            <Cell wrap>{r.description}</Cell>
          </>}
        />

      </div>
    </div>
  )
}
