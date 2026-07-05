import { defineConfig } from 'astro/config'

export default defineConfig({
  // Serve existing `assets/` as the public directory so we can reuse current assets
  publicDir: 'assets',
})
