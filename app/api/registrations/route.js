import { supabase } from '../../../lib/supabase'
import { sendTelegram } from '../../../lib/telegram'

export async function POST(request) {
  const body = await request.json()
  const { name, region, readiness } = body

  if (!name || !region || !readiness) {
    return Response.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const { error } = await supabase.from('registrations').insert({
    name,
    region,
    classification: body.classification || null,
    readiness,
    dryness:        body.dryness        || null,
    hours:          body.hours          || null,
    statement:      body.statement      || null,
  })

  if (error) return Response.json({ error: error.message }, { status: 500 })

  await sendTelegram(
    `\u{1F9D1}‍\u{1F52C} <b>Новый наблюдатель</b>\n\n` +
    `Имя: <b>${name}</b>\n` +
    `Регион: ${region}\n` +
    `Готовность: ${readiness}\n` +
    (body.classification ? `Класс: ${body.classification}\n` : '') +
    (body.hours ? `Часов/неделю: ${body.hours}\n` : '') +
    (body.statement ? `Заявление: ${body.statement}` : '')
  )

  return Response.json({ ok: true }, { status: 201 })
}
