import { defineConfig } from 'astro/config';
import icon from 'astro-icon'; 

export default defineConfig({
  site: 'https://lakapple.github.io',
  integrations: [
    icon()
  ],
});