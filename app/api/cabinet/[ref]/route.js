import { supabase } from '../../../../lib/supabase'

export async function GET(request, { params }) {
  const ref = (await params).ref

  const [regRes, repRes, obsRes] = await Promise.all([
    supabase.from('registrations').select('*').eq('ref_number', ref).single(),
    supabase.from('reports').select('id, created_at, incident_type, severity, description').eq('observer_ref', `OBS-${ref}`),
    supabase.from('field_observations').select('*').eq('observer_ref', `OBS-${ref}`).order('created_at', { ascending: false }),
  ])

  if (!regRes.data) {
    return Response.json({ error: 'Observer not found' }, { status: 404 })
  }

  const reportCount = repRes.data?.length ?? 0
  const obsCount    = obsRes.data?.length ?? 0
  const total       = reportCount + obsCount

  return Response.json({
    registration:  regRes.data,
    reports:       repRes.data ?? [],
    observations:  obsRes.data ?? [],
    stats: { reportCount, obsCount, total },
  })
}
