import { Configuration } from '@nuxt/types';

const config: Configuration = {
  env: {
    baseUrl: 'http://localhost:3000',
  },
  buildModules: [
    '@nuxt/typescript-build',
  ],
};

export default config;
