
// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  optimizeDeps: {
    include: ['@antmedia/webrtc_adaptor']
  },
  build: {
    commonjsOptions: {
      include: [/node_modules/],
    }
  }
});
