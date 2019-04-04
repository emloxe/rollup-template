import json from 'rollup-plugin-json';
import copyright from '../src/copyrightHeader';

export default {
  input: 'src/kuno.js',
  output: {
    file: 'dist/kuno.js',
    name: 'kuno',
    format: 'umd',
    sourcemap: 'inline',
    globals: {
      $: '$',
    },
    banner: copyright,
  },
  plugins: [json()],
};
