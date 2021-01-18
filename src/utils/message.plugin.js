export default {
  // eslint-disable-next-line no-undef
  install(Vue) {
    Vue.prototype.$message = function(html) {
      // eslint-disable-next-line no-undef
      M.toast({html})
    }

    Vue.prototype.$error = function(html) {
      // eslint-disable-next-line no-undef
      M.toast({html: `[error]: ${html}`})
    }
  },
}
