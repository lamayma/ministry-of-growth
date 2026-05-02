import { supabase } from '../../../lib/supabase'
import { sendTelegram } from '../../../lib/telegram'

export async function POST(request) {
  const body = await request.json()
  const { observer_ref, object_code, obs_type, notes, duration_min } = body

  if (!observer_ref || !object_code || !obs_type) {
    return Response.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const { data, error } = await supabase.from('field_observations').insert({
    observer_ref, object_code, obs_type,
    notes:        notes        || null,
    duration_min: duration_min || null,
  }).select().single()

  if (error) return Response.json({ error: error.message }, { status: 500 })

  await sendTelegram(
    `🔭 <b>Полевое наблюдение</b>\n\n` +
    `Наблюдатель: ${observer_ref}\n` +
    `Объект: ${object_code}\n` +
    `Тип: ${obs_type}\n` +
    (notes ? `Заметки: ${notes}` : '')
  )

  return Response.json({ ok: true, observation: data }, { status: 201 })
}
