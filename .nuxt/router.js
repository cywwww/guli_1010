import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _01d8d114 = () => interopDefault(import('../pages/course/index.vue' /* webpackChunkName: "pages/course/index" */))
const _207c8f81 = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _3d90cdbb = () => interopDefault(import('../pages/register.vue' /* webpackChunkName: "pages/register" */))
const _657c8a7d = () => interopDefault(import('../pages/teacher/index.vue' /* webpackChunkName: "pages/teacher/index" */))
const _93260144 = () => interopDefault(import('../pages/course/_id.vue' /* webpackChunkName: "pages/course/_id" */))
const _6f7c67e6 = () => interopDefault(import('../pages/orders/_oid.vue' /* webpackChunkName: "pages/orders/_oid" */))
const _f5bd9e2a = () => interopDefault(import('../pages/pay/_pid.vue' /* webpackChunkName: "pages/pay/_pid" */))
const _d8b12350 = () => interopDefault(import('../pages/player/_vid.vue' /* webpackChunkName: "pages/player/_vid" */))
const _0eb50825 = () => interopDefault(import('../pages/teacher/_id.vue' /* webpackChunkName: "pages/teacher/_id" */))
const _56d4ec6a = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/course",
    component: _01d8d114,
    name: "course"
  }, {
    path: "/login",
    component: _207c8f81,
    name: "login"
  }, {
    path: "/register",
    component: _3d90cdbb,
    name: "register"
  }, {
    path: "/teacher",
    component: _657c8a7d,
    name: "teacher"
  }, {
    path: "/course/:id",
    component: _93260144,
    name: "course-id"
  }, {
    path: "/orders/:oid?",
    component: _6f7c67e6,
    name: "orders-oid"
  }, {
    path: "/pay/:pid?",
    component: _f5bd9e2a,
    name: "pay-pid"
  }, {
    path: "/player/:vid?",
    component: _d8b12350,
    name: "player-vid"
  }, {
    path: "/teacher/:id",
    component: _0eb50825,
    name: "teacher-id"
  }, {
    path: "/",
    component: _56d4ec6a,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
