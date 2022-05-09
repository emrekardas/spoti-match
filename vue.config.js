module.exports = {
    css: {
        loaderOptions: {
            scss: {
                additionalData: `@import "~@/assets/scss/app.scss";`
            }
        }
    },
    devServer: {
        disableHostCheck: true
    }
}