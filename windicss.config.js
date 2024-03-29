import { defineConfig } from 'windicss/helpers'

import scrollSnapPlugin from 'windicss/plugin/scroll-snap'

export default defineConfig({
  separator: '-',
  plugins: [
    scrollSnapPlugin,
    // ...
  ],
})
