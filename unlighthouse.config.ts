import { defineConfig } from 'unlighthouse/config'

export default defineConfig({
  site: 'https://tmpc.org',
  scanner: {
    device: 'desktop',
    throttle: true,
    samples: 1,
  },
  ci: {
    buildStatic: true,
  },
})
