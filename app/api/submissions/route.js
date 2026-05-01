import { supabase } from '../../../lib/supabase'
import { sendTelegram } from '../../../lib/telegram'

export async function POST(request) {
  const body = await request.json()
  const { name, email, region, species, condition, location_desc } = body

  if (!name || !email || !region || !species || !condition || !location_desc) {
    return Response.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  if (!emailOk) {
    return Response.json({ error: 'Invalid email' }, { status: 400 })
  }

  const photoUrl = body.photo_url
  if (photoUrl && !/^https?:\/\/.+/.test(photoUrl)) {
    return Response.json({ error: 'Invalid photo_url' }, { status: 400 })
  }

  const { error } = await supabase.from('submissions').insert({
    name,
    email,
    region,
    species,
    condition,
    location_desc,
    age:          body.age          || null,
    category:     body.category     || null,
    photo_url:    body.photo_url    || null,
    description:  body.description  || null,
    codename:     body.codename     || null,
    priority:     body.priority     || null,
    observer_class: body.observer_class || null,
    status: 'pending',
  })

  if (error) return Response.json({ error: error.message }, { status: 500 })

  await sendTelegram(
    `🪴 <b>Новая заявка на растение</b>\n\n` +
    `Наблюдатель: <b>${name}</b> (${email})\n` +
    `Регион: ${region}\n` +
    `Вид: ${species}\n` +
    `Состояние: ${condition}\n` +
    `Место: ${location_desc}`
  )

  return Response.json({ ok: true }, { status: 201 })
}
