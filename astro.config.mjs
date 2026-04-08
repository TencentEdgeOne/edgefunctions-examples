import edgeoneAdapter from '@edgeone/astro';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'server',
  adapter: edgeoneAdapter(),
  vite: {
    plugins: [tailwindcss()],
  },
});
