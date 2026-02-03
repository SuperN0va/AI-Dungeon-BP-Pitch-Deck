import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// [https://vitejs.dev/config/](https://vitejs.dev/config/)
export default defineConfig({
  plugins: [react()],
  // ⚠️ 下面的 ai-dungeon-pitch 必须改成你的仓库名
  base: '/AI-Dungeon-BP-Pitch-Deck/', 
})