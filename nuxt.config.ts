import { Configuration } from '@nuxt/types';

const config: Configuration = {
  srcDir: 'src/',
  env: { baseUrl: 'http://localhost:3000' },
  buildModules: ['@nuxt/typescript-build'],
  css: ['reset.css'],
  build: {
    postcss: {
      plugins: { 'postcss-flexbox': {} },
      preset: { autoprefixer: { grid: true } }
    },
  },
  // manifest.json generator
  manifest: {
    lang: 'ja',
    name: 'LP Title',
    shortName: 'LPT',
    startUrl: '/',
    display: 'standalone'
  },
};

export default config;
