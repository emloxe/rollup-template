import json from 'rollup-plugin-json';
import babel from 'rollup-plugin-babel';
import postcss from 'rollup-plugin-postcss';
import simplevars from 'postcss-simple-vars';
import copyright from '../src/copyrightHeader';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/test.js',
    format: 'umd',
    name: 'test',
    sourcemap: 'inline',
    globals: {
      $: '$',
    },
    banner: copyright,
  },
  indent: false,
  plugins: [
    // babel({
    //   exclude: 'node_modules/**',
    // }),
    json(),
    // postcss({
    //   plugins: [
    //     simplevars(),
    //   ],
    //   extensions: ['.css'],
    // }),
  ],
};
