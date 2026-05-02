import { supabase } from '../../../lib/supabase'
import { sendTelegram } from '../../../lib/telegram'

export async function POST(request) {
  const body = await request.json()
  const { observer_ref, incident_type, incident_date, description, severity } = body

  if (!observer_ref || !incident_type || !description || !severity) {
    return Response.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const { error } = await supabase.from('reports').insert({
    observer_ref, incident_type, incident_date, description, severity,
  })

  if (error) return Response.json({ error: error.message }, { status: 500 })

  await sendTelegram(
    `🌿 <b>Новый инцидент</b>\n\n` +
    `Наблюдатель: ${observer_ref}\n` +
    `Тип: <b>${incident_type}</b>\n` +
    `Дата: ${incident_date || '—'}\n` +
    `Серьёзность: ${severity}\n` +
    `Описание: ${description}`
  )

  return Response.json({ ok: true }, { status: 201 })
}
