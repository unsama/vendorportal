import consola from 'consola'
export default (ctx) => ctx.store.dispatch('nuxtClientInit', ctx).catch((e) => consola.error(e))
