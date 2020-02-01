import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _1a5f8960 = () => interopDefault(import('..\\pages\\about\\index.vue' /* webpackChunkName: "pages_about_index" */))
const _a3e6c744 = () => interopDefault(import('..\\pages\\admin\\index.vue' /* webpackChunkName: "pages_admin_index" */))
const _7352695a = () => interopDefault(import('..\\pages\\posts\\index.vue' /* webpackChunkName: "pages_posts_index" */))
const _72447994 = () => interopDefault(import('..\\pages\\admin\\auth\\index.vue' /* webpackChunkName: "pages_admin_auth_index" */))
const _6d3acd11 = () => interopDefault(import('..\\pages\\admin\\new-post\\index.vue' /* webpackChunkName: "pages_admin_new-post_index" */))
const _26ff483c = () => interopDefault(import('..\\pages\\admin\\_postId\\index.vue' /* webpackChunkName: "pages_admin__postId_index" */))
const _d198a800 = () => interopDefault(import('..\\pages\\posts\\_id\\index.vue' /* webpackChunkName: "pages_posts__id_index" */))
const _5ecf43a7 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

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
    path: "/about",
    component: _1a5f8960,
    name: "about"
  }, {
    path: "/admin",
    component: _a3e6c744,
    name: "admin"
  }, {
    path: "/posts",
    component: _7352695a,
    name: "posts"
  }, {
    path: "/admin/auth",
    component: _72447994,
    name: "admin-auth"
  }, {
    path: "/admin/new-post",
    component: _6d3acd11,
    name: "admin-new-post"
  }, {
    path: "/admin/:postId",
    component: _26ff483c,
    name: "admin-postId"
  }, {
    path: "/posts/:id",
    component: _d198a800,
    name: "posts-id"
  }, {
    path: "/",
    component: _5ecf43a7,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
