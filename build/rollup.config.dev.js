import json from 'rollup-plugin-json';
import copyright from '../src/copyrightHeader';

export default {
  input: 'src/kuno.js',
  output: {
    file: 'dist/kuno.js',
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
  plugins: [json()],
};
