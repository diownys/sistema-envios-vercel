import { defineConfig } from 'vite';
import { resolve } from 'path'; // Importe 'resolve' para facilitar o mapeamento

export default defineConfig({
    build: {
        // outDir: 'dist', // Pode ser removido se você não especificou no deploy
        rollupOptions: {
            input: {
                // Use resolve para garantir caminhos absolutos dentro do Root Directory (frontend/)
                main: resolve(__dirname, 'index.html'),
                login: resolve(__dirname, 'login.html'), // A PÁGINA QUE ESTÁ FALTANDO
                admin: resolve(__dirname, 'admin.html'),
                concluidos: resolve(__dirname, 'concluidos.html'),
                // ADICIONE AQUI TODAS AS OUTRAS PÁGINAS HTML:
                conferencia: resolve(__dirname, 'conferencia.html'),
                dashboard: resolve(__dirname, 'dashboard.html'),
                'editar-envios': resolve(__dirname, 'editar-envios.html'),
                'envio-form': resolve(__dirname, 'envio-form.html'),
                importar: resolve(__dirname, 'importar.html'),
                relatorios: resolve(__dirname, 'relatorios.html'),
                romaneio: resolve(__dirname, 'romaneio.html'),
                'selecao-lote': resolve(__dirname, 'selecao-lote.html'),
                'conferencia-notas': resolve(__dirname, 'conferencia-notas.html'), 
                vendas: resolve(__dirname, 'vendas.html'), 
                // e quaisquer outras...
            }
        }
    },
});
