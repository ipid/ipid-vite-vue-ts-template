/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const component: DefineComponent<unknown, unknown, any>

  export default component
}

interface ImportMetaEnv {
  VITE_ENV_ALL_LOADED: string
}
