import path from 'node:path'
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const rootDir = process.cwd()
  const rootEnv = loadEnv(mode, rootDir, 'VITE_')
  const srcEnv = loadEnv(mode, path.resolve(rootDir, 'src'), 'VITE_')
  const clientEnv = { ...srcEnv, ...rootEnv }

  Object.entries(clientEnv).forEach(([key, value]) => {
    process.env[key] ??= value
  })

  return {
    plugins: [react()],
    define: Object.fromEntries(
      Object.entries(clientEnv).map(([key, value]) => [
        `import.meta.env.${key}`,
        JSON.stringify(value),
      ])
    ),
    test: {
      environment: "jsdom",
      setupFiles: "./src/test/setup.js",
      globals: true,
    },
  }
})
