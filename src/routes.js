import index from './views/index.vue'
import NotFound from './views/NotFound.vue'

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  { path: '/', component: index, meta: { title: 'Home' } },
  { path: '/:path(.*)', component: NotFound },
]
