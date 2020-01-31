import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _52e287c8 = () => interopDefault(import('..\\pages\\users.vue' /* webpackChunkName: "pages_users" */))
const _099900e6 = () => interopDefault(import('..\\pages\\users\\index.vue' /* webpackChunkName: "pages_users_index" */))
const _d14c2818 = () => interopDefault(import('..\\pages\\users\\_id\\index.vue' /* webpackChunkName: "pages_users__id_index" */))
const _3f47f098 = () => interopDefault(import('..\\pages\\users\\_id\\more-details.vue' /* webpackChunkName: "pages_users__id_more-details" */))
const _ddb63c34 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/users",
    component: _52e287c8,
    children: [{
      path: "",
      component: _099900e6,
      name: "users"
    }, {
      path: ":id",
      component: _d14c2818,
      name: "users-id"
    }, {
      path: ":id/more-details",
      component: _3f47f098,
      name: "users-id-more-details"
    }]
  }, {
    path: "/",
    component: _ddb63c34,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
