import { ViteSSGContext } from 'vite-ssg'

export type UserModule = (ctx: ViteSSGContext<false>) => void
