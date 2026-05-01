import { supabase } from '../../../../lib/supabase'

const ALLOWED_TABLES  = ['registrations', 'reports', 'submissions']
const ALLOWED_STATUSES = ['new', 'contacted', 'closed']

export async function PATCH(request) {
  const { table, id, status } = await request.json()

  if (!ALLOWED_TABLES.includes(table) || !ALLOWED_STATUSES.includes(status) || !id) {
    return Response.json({ error: 'Invalid params' }, { status: 400 })
  }

  const { error } = await supabase.from(table).update({ status }).eq('id', id)
  if (error) return Response.json({ error: error.message }, { status: 500 })

  return Response.json({ ok: true })
}
