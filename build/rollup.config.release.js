import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { uglify } from 'rollup-plugin-uglify';

export default {
  input: 'src/kuno.js',
  output: [
    {
      file: 'dist/kuno.min.js',
      name: 'kuno',
      format: 'umd',
      globals: {
        $: '$',
      },
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
      presets: [['@babel/preset-env']],
    }),
    uglify(),
  ],
};
