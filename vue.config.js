module.exports = {
    css: {
      loaderOptions: {
        sass: {
            prependData: `
                @import "@/scss/abstracts/_variables.scss";
                @import "@/scss/abstracts/_mixins.scss";
            `
        }
      }
    },
    publicPath: process.env.NODE_ENV === 'production'
    ? '/portfolio/'
    : '/'
};