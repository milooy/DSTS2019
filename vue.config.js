module.exports = {
  // build file path
  outputDir: './docs/',
  // github page file path
  publicPath: process.env.NODE_ENV === 'production'
    ? '/DSTS2019/'
    : '/',
  // css pre-processor
  css: {
    loaderOptions: {
      // pass options to sass-loader
      sass: {
        // @/ is an alias to src/
        // so this assumes you have a file named `src/variables.scss`
        data: '@import "~@/assets/variables.scss";',
      },
    },
  },
};
