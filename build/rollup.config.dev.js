export default {
  input: 'src/kuno.js',
  output: {
    file: 'dist/kuno.js',
    format: 'es',
    globals: {
      $: '$',
    },
  },
  watch: {
    include: 'src/**',
  },
};