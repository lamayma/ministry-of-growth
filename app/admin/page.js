'use client'
import { useEffect, useState } from 'react'

const STATUS_LABELS = { new: 'Новый', contacted: 'Связались', closed: 'Закрыт' }
const STATUS_COLORS = { new: '#4ade80', contacted: '#facc15', closed: '#6b7280' }

function fmt(ts) {
  if (!ts) return '—'
  return new Date(ts).toLocaleString('ru-RU', { day: '2-digit', month: '2-digit', year: '2-digit', hour: '2-digit', minute: '2-digit' })
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
    <select value={value} onChange={handle} disabled={saving} style={{
      background: '#1a1f1c', color: STATUS_COLORS[value] ?? '#fff',
      border: '1px solid #2d3530', borderRadius: 4, padding: '2px 6px',
      fontSize: 12, cursor: 'pointer', opacity: saving ? 0.5 : 1,
    }}>
      {Object.entries(STATUS_LABELS).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
    </select>
  )
}

function Section({ title, rows, columns, renderRow, table, onStatusChange }) {
  const [open, setOpen] = useState(true)
  return (
    <div style={{ marginBottom: 32 }}>
      <button onClick={() => setOpen(o => !o)} style={{
        background: 'none', border: 'none', color: '#e8ede9', fontSize: 16,
        fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8, padding: '8px 0',
      }}>
        <span style={{ fontSize: 12, color: '#4a5550' }}>{open ? '▼' : '▶'}</span>
        {title}
        <span style={{ fontSize: 12, color: '#4a5550', fontWeight: 400 }}>({rows.length})</span>
      </button>
      {open && (
        <div style={{ overflowX: 'auto', borderRadius: 6, border: '1px solid #2d3530' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
            <thead>
              <tr style={{ background: '#141918' }}>
                {columns.map(c => (
                  <th key={c} style={{ padding: '8px 12px', textAlign: 'left', color: '#6b7a70', fontWeight: 500, whiteSpace: 'nowrap', borderBottom: '1px solid #2d3530' }}>{c}</th>
                ))}
                <th style={{ padding: '8px 12px', color: '#6b7a70', fontWeight: 500, borderBottom: '1px solid #2d3530' }}>Статус</th>
              </tr>
            </thead>
            <tbody>
              {rows.length === 0 && (
                <tr><td colSpan={columns.length + 1} style={{ padding: '16px 12px', color: '#4a5550', textAlign: 'center' }}>Нет данных</td></tr>
              )}
              {rows.map((row, i) => (
                <tr key={row.id} style={{ background: i % 2 === 0 ? '#0f1410' : '#111610', borderBottom: '1px solid #1e2520' }}>
                  {renderRow(row)}
                  <td style={{ padding: '8px 12px', whiteSpace: 'nowrap' }}>
                    <StatusSelect table={table} id={row.id} value={row.status ?? 'new'} onChange={onStatusChange} />
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

function TD({ children, muted }) {
  return <td style={{ padding: '8px 12px', color: muted ? '#6b7a70' : '#c8d4cc', whiteSpace: 'nowrap', maxWidth: 240, overflow: 'hidden', textOverflow: 'ellipsis' }}>{children ?? '—'}</td>
}

export default function AdminPage() {
  const [data, setData] = useState({ registrations: [], reports: [], submissions: [] })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/admin').then(r => r.json()).then(d => { setData(d); setLoading(false) })
  }, [])

  function updateStatus(table) {
    return (id, status) => setData(prev => ({
      ...prev,
      [table]: prev[table].map(r => r.id === id ? { ...r, status } : r),
    }))
  }

  if (loading) return (
    <div style={{ minHeight: '100vh', background: '#0c110e', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#6b7a70', fontFamily: 'Inter, sans-serif' }}>
      Загрузка…
    </div>
  )

  return (
    <div style={{ minHeight: '100vh', background: '#0c110e', color: '#e8ede9', fontFamily: 'Inter, sans-serif', padding: '32px 24px', maxWidth: 1200, margin: '0 auto' }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 16, marginBottom: 32, borderBottom: '1px solid #2d3530', paddingBottom: 16 }}>
        <h1 style={{ margin: 0, fontSize: 20, fontWeight: 600 }}>Admin — Лиды</h1>
        <a href="/" style={{ fontSize: 12, color: '#4a5550', textDecoration: 'none' }}>← На сайт</a>
        <button onClick={() => { setLoading(true); fetch('/api/admin').then(r => r.json()).then(d => { setData(d); setLoading(false) }) }}
          style={{ marginLeft: 'auto', background: 'none', border: '1px solid #2d3530', color: '#6b7a70', borderRadius: 4, padding: '4px 10px', fontSize: 12, cursor: 'pointer' }}>
          Обновить
        </button>
      </div>

      <Section
        title="🧑‍🔬 Регистрации наблюдателей"
        rows={data.registrations}
        table="registrations"
        onStatusChange={updateStatus('registrations')}
        columns={['#', 'Дата', 'Имя', 'Регион', 'Готовность', 'Класс']}
        renderRow={r => <>
          <TD muted>{r.id}</TD>
          <TD muted>{fmt(r.created_at)}</TD>
          <TD>{r.name}</TD>
          <TD>{r.region}</TD>
          <TD>{r.readiness}</TD>
          <TD muted>{r.classification}</TD>
        </>}
      />

      <Section
        title="🌿 Инциденты"
        rows={data.reports}
        table="reports"
        onStatusChange={updateStatus('reports')}
        columns={['#', 'Дата', 'Тип', 'Серьёзность', 'Описание']}
        renderRow={r => <>
          <TD muted>{r.id}</TD>
          <TD muted>{fmt(r.created_at)}</TD>
          <TD>{r.incident_type}</TD>
          <TD>{r.severity}</TD>
          <TD>{r.description}</TD>
        </>}
      />

      <Section
        title="🪴 Заявки на растения"
        rows={data.submissions}
        table="submissions"
        onStatusChange={updateStatus('submissions')}
        columns={['#', 'Дата', 'Имя', 'Email', 'Регион', 'Вид', 'Состояние']}
        renderRow={r => <>
          <TD muted>{r.id}</TD>
          <TD muted>{fmt(r.created_at)}</TD>
          <TD>{r.name}</TD>
          <TD muted>{r.email}</TD>
          <TD>{r.region}</TD>
          <TD>{r.species}</TD>
          <TD>{r.condition}</TD>
        </>}
      />
    </div>
  )
}
