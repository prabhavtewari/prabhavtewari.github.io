import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: '/index.html',
        blog: '/IVAR/index.html',
        motivation: '/IVAR/motivation.html',
        map: '/IVAR/map.html',
        cue: '/IVAR/cue.html',
        playthrough: '/IVAR/playthrough.html',
        closing: '/IVAR/closing.html',
        interaction: '/IVAR/interaction.html',
        locomotion: '/IVAR/locomotion.html'
      }
    }
  }
})
