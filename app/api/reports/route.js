import { supabase } from '../../../lib/supabase'

export async function POST(request) {
  const body = await request.json()
  const { incident_type, incident_date, description, severity } = body

  if (!incident_type || !description || !severity) {
    return Response.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const { error } = await supabase.from('reports').insert({
    incident_type,
    incident_date,
    description,
    severity,
  })

  if (error) return Response.json({ error: error.message }, { status: 500 })
  return Response.json({ ok: true }, { status: 201 })
}
