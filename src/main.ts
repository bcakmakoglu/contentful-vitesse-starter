// register vue composition api globally
import { ViteSSGContext } from 'vite-ssg'
import { ViteSSG } from 'vite-ssg/single-page'
import App from './App.vue'

// windicss layers
import 'virtual:windi-base.css'
import 'virtual:windi-components.css'
// your custom styles here
import './styles/main.css'
// windicss utilities should be the last style import
import 'virtual:windi-utilities.css'
// windicss devtools support (dev only)
import 'virtual:windi-devtools'

// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(App, (ctx: ViteSSGContext<false>) => {
  // install all modules under `modules/`
  Object.values(import.meta.globEager('./modules/*.ts')).map(i => i.install?.(ctx))
})
