// supabase_global.js (NÃO use type="module" nesta tag no HTML)

// CONFIGURAÇÃO CENTRALIZADA
const SUPABASE_URL = 'https://nfsuisftzddegihyhoha.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5mc3Vpc2Z0emRkZWdpaHlob2hhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkwMTcwMDcsImV4cCI6MjA3NDU5MzAwN30.tM_9JQo6ejzOBWKQ9XxT54f8NuM6jSoHomF9c_IfEJI';

// Acessa o createClient do objeto global temporário da CDN
const { createClient } = window.supabase; 

// Inicializa o cliente Supabase com as chaves centralizadas
// e o define como o objeto global 'supabase' para uso imediato em outros scripts.
window.supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY); 
// O objeto 'supabase' está agora pronto para ser usado em qualquer lugar.
