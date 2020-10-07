import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import typescript from '@rollup/plugin-typescript';
import glob from 'rollup-plugin-glob';
import svelte from 'rollup-plugin-svelte';
import { terser } from 'rollup-plugin-terser';
import config from 'sapper/config/rollup.js';

import pkg from './package.json';
import { extensions, sharedPreprocessor } from './svelte.config';

const mode = process.env.NODE_ENV;
const dev = mode === 'development';
const sourceMap = dev ? 'inline' : false;
const preprocess = sharedPreprocessor(sourceMap);

const onwarn = (warning, onwarn) =>
  (warning.code === 'CIRCULAR_DEPENDENCY' &&
    warning.message.includes('/@sapper/')) ||
  warning.code === 'THIS_IS_UNDEFINED' ||
  onwarn(warning);

export default {
  client: {
    input: config.client.input().replace(/.js$/, '.ts'),
    output: config.client.output(),
    plugins: [
      replace({
        'process.browser': true,
        'process.env.NODE_ENV': JSON.stringify(mode),
      }),
      svelte({
        extensions,
        dev,
        hydratable: true,
        emitCss: true,
        preprocess,
      }),
      resolve(),
      commonjs(),
      typescript({ sourceMap: dev }),
      glob(),
      !dev &&
        terser({
          module: true,
        }),
    ],
    preserveEntrySignatures: false,
    onwarn,
  },

  server: {
    input: { server: config.server.input().server.replace(/.js$/, '.ts') },
    output: config.server.output(),
    plugins: [
      replace({
        'process.browser': false,
        'process.env.NODE_ENV': JSON.stringify(mode),
      }),
      svelte({
        extensions,
        generate: 'ssr',
        preprocess,
        dev,
      }),
      resolve(),
      commonjs(),
      typescript({ sourceMap: dev }),
      glob(),
    ],
    external: Object.keys(pkg.dependencies).concat(
      require('module').builtinModules ||
        Object.keys(process.binding('natives')),
    ),

    onwarn,
  },

  serviceworker: {
    input: config.serviceworker.input().replace(/.js$/, '.ts'),
    output: config.serviceworker.output(),
    plugins: [
      resolve(),
      replace({
        'process.browser': true,
        'process.env.NODE_ENV': JSON.stringify(mode),
      }),
      commonjs(),
      typescript({ sourceMap: dev }),
      !dev && terser(),
    ],

    onwarn,
  },
};
