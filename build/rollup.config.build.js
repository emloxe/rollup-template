export default {
  input: 'src/kuno.js',
  output: {
    file: 'dist/kuno.js',
    name: 'kuno',
    format: 'umd',
    globals: {
      $: '$',
    },
  },
  sourceMap: true,
  watch: {
    include: 'src/**',
  },
};