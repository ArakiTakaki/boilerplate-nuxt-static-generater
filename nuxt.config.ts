import { Configuration } from '@nuxt/types'

const config: Configuration = {
  // Config設定の記述
  // ...
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxt/typescript-build' // <- 追加
  ],
  // ...
}

export default config;
