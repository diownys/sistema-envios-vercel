import { defineConfig } from 'vite';

export default defineConfig({
    // A propriedade 'root' é opcional, pois o Vercel já usa 'frontend/' como Root Directory.
    // Se precisar definir a pasta de saída (build) dentro de frontend, use build.outDir.
    build: {
        // Assegura que a saída final vá para uma pasta 'dist' dentro de 'frontend/'
        outDir: 'dist', 
        rollupOptions: {
            input: {
                // Defina o ponto de entrada principal, que é seu index.html
                main: 'index.html', 
                
                // Se você quiser que o Vite processe seu CSS e JS separadamente,
                // você listaria eles aqui, mas no seu caso,
                // como você está usando HTML/CSS/JS simples, o index.html deve ser suficiente.
            }
        }
    },
    
    plugins: [
        // Se você não está usando nenhum plugin (nem Tailwind), esta seção pode ficar vazia.
        // Se estiver usando Tailwind, mantenha apenas o plugin relacionado.
        // Se estiver usando o plugin @tailwindcss/vite, ele provavelmente está configurado incorretamente.
    ]
});
