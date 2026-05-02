import { supabase } from '../../../lib/supabase'
import { sendTelegram } from '../../../lib/telegram'

export async function POST(request) {
  const body = await request.json()
  const { name, email, region, readiness } = body

  if (!name || !email || !region || !readiness) {
    return Response.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  if (!emailOk) return Response.json({ error: 'Invalid email' }, { status: 400 })

  const ref_number = String(Math.floor(100000 + Math.random() * 900000))

  const { error } = await supabase.from('registrations').insert({
    name, email, region, readiness, ref_number,
    classification: body.classification || null,
    dryness:        body.dryness        || null,
    hours:          body.hours          || null,
    statement:      body.statement      || null,
  })

  if (error) {
    if (error.code === '23505') {
      return Response.json({ error: 'email_taken' }, { status: 409 })
    }
    return Response.json({ error: error.message }, { status: 500 })
  }

  await sendTelegram(
    `\u{1F9D1}‍\u{1F52C} <b>Новый наблюдатель</b>\n\n` +
    `Имя: <b>${name}</b>\n` +
    `Email: ${email}\n` +
    `Регион: ${region}\n` +
    `Готовность: ${readiness}\n` +
    `Номер: OBS-${ref_number}`
  )

  return Response.json({ ok: true, ref_number }, { status: 201 })
}
