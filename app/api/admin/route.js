import { supabase } from '../../../lib/supabase'

export async function GET() {
  const [reg, rep, sub] = await Promise.all([
    supabase.from('registrations').select('*').order('created_at', { ascending: false }),
    supabase.from('reports').select('*').order('created_at', { ascending: false }),
    supabase.from('submissions').select('*').order('created_at', { ascending: false }),
  ])

  return Response.json({
    registrations: reg.data ?? [],
    reports:       rep.data ?? [],
    submissions:   sub.data ?? [],
  })
}
