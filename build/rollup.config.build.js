import json from 'rollup-plugin-json';
import babel from 'rollup-plugin-babel';
// import postcss from 'rollup-plugin-postcss';
// import simplevars from 'postcss-simple-vars';
import copyright from './copyrightHeader';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'umd',
    name: 'test',
    sourcemap: 'inline',
    globals: {
      $: '$',
    },
    banner: copyright,
  },
  plugins: [
    json(),
    babel({
      exclude: 'node_modules/**',
    }),
    // postcss({
    //   plugins: [
    //     simplevars(),
    //   ],
    //   extensions: ['.css'],
    // }),
  ],
};
