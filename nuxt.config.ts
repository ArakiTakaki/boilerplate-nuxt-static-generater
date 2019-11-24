import { Configuration } from '@nuxt/types';

const config: Configuration = {
  srcDir: 'src/',
  env: {
    baseUrl: 'http://localhost:3000',
  },
  buildModules: [
    '@nuxt/typescript-build',
  ],
};

export default config;
