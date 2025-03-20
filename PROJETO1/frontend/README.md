# Comando para criar os componentes (obs: precisa estr com a extensão ES7 instalada)
rafce

# Instalando E Configurando o framework TAILWINDCSS
https://tailwindcss.com/docs/installation/using-vite

npm install tailwindcss @tailwindcss/vite

import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})

@import "tailwindcss";