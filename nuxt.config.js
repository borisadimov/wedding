const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/<repository-name>/'
  }
} : {}

module.exports = {
  router: routerBase.router || {},
  head: {
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ]
  },
  generate: {
    routes: [
      '/',
      'video'
    ]
  }
}
