import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    outDir: 'dist',
    lib: {
      entry: 'src/validateEmail.ts',
      formats: ['es'],
    },
  },
  test: {
    include: ['test/**/*.test.ts'],
  },
})