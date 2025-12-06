import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

// === CONFIGURAÇÃO CENTRALIZADA ===
const SUPABASE_URL = 'https://nfsuisftzddegihyhoha.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5mc3Vpc2Z0emRkZWdpaHlob2hhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkwMTcwMDcsImV4cCI6MjA3NDU5MzAwN30.tM_9JQo6ejzOBWKQ9XxT54f8NuM6jSoHomF9c_IfEJI';
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
export const SUPABASE_CONFIG = { SUPABASE_URL, SUPABASE_ANON_KEY };
