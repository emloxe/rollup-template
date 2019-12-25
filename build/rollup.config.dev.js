import json from 'rollup-plugin-json';
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';
import simplevars from 'postcss-simple-vars';
import copyright from './copyrightHeader';

import config from './config';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    name: config.name,
    format: 'umd',
    sourcemap: true,
    globals: {
      $: '$',
    },
    banner: copyright,
  },
  watch: {
    include: 'src/**',
    exclude: 'node_modules/**',
  },
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
    postcss({
      plugins: [
        simplevars(),
      ],
      extensions: ['.css'],
    }),
    json()],
};
