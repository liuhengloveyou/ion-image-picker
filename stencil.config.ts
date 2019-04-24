import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

import builtins from 'rollup-plugin-node-builtins';
import globals from 'rollup-plugin-node-globals';

export const config: Config = {
  namespace: 'ionimagepicker',
  outputTargets:[
    { type: 'dist' },
    { type: 'docs' },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ],
  plugins: [
    sass(),
    builtins(),
    globals()
  ]
};
