import { createRouter, createWebHistory } from "vue-router";

import index from "./views/index.vue";
import Home from "./views/Home/index.vue";
import HomeAlgo from "./views/Home/Algo.vue";
import HomeBigData from "./views/Home/BigData.vue";
import About from "./views/About.vue";
// import Awards from "./views/Awards.vue";
import Expert from "./views/Expert.vue";
import MakeupPapers from "./views/MakeupPapers.vue";
import MakeupPhotos from "./views/MakeupPhotos/index.vue";
import MakeupPhotosUpload from "./views/MakeupPhotos/Upload.vue";
import MakeupPhotosCertificate from "./views/MakeupPhotos/Certificate.vue";
import MakeupScoreRelative from "./views/MakeupScore/Relative.vue";
import MakeupScoreRelativeCertificate from "./views/MakeupScore/RelativeCertificate.vue";
import MakeupScoreAbsolute from "./views/MakeupScore/Absolute.vue";
import MakeupScoreAbsoluteCertificate from "./views/MakeupScore/AbsoluteCertificate.vue";
import Login from "./views/Login.vue";
import Account from "./views/Account.vue";

import NotFound from "./views/NotFound.vue";

import auth from "./middleware/auth.js";

/** @type {import('vue-router').RouterOptions['routes']} */
const routes = [
  { path: "/", component: index },
  { path: "/home", component: Home, meta: { title: "Home" } },
  { path: "/home/BigData", component: HomeBigData, meta: { title: "Home" } },
  { path: "/home/Algo", component: HomeAlgo, meta: { title: "Home" } },
  { path: "/about", component: About, meta: { title: "About Us" } },
  // { path: "/awards", component: Awards, meta: { title: "Award" } },
  { path: "/expert", component: Expert, meta: { title: "Expert" } },
  {
    path: "/makeupPapers",
    component: MakeupPapers,
    meta: { title: "Makeup Papers" },
  },
  {
    path: "/makeupPhotos",
    component: MakeupPhotos,
    meta: { title: "Makeup Photos" },
  },
  {
    path: "/makeupPhotos/upload",
    component: MakeupPhotosUpload,
    meta: { title: "Makeup Photos Upload" },
  },
  {
    path: "/makeupPhotos/certificate",
    component: MakeupPhotosCertificate,
    meta: { title: "Makeup Photos Certificate" },
  },
  {
    path: "/makeupScore/relative",
    component: MakeupScoreRelative,
    meta: { title: "Makeup Score Relative", middleware: auth },
  },
  {
    path: "/makeupScore/relative/certificate",
    component: MakeupScoreRelativeCertificate,
    meta: { title: "Makeup Score Relative", middleware: auth },
  },
  {
    path: "/makeupScore/absolute",
    component: MakeupScoreAbsolute,
    meta: { title: "Makeup Score Absolute", middleware: auth },
  },
  {
    path: "/makeupScore/absolute/certificate",
    component: MakeupScoreAbsoluteCertificate,
    meta: { title: "Makeup Score Absolute", middleware: auth },
  },
  {
    path: "/login",
    component: Login,
    meta: { title: "Login" },
  },
  {
    path: "/account",
    component: Account,
    meta: { title: "Account", middleware: auth },
  },
  { path: "/:path(.*)", component: NotFound },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

// Creates a `nextMiddleware()` function which not only
// runs the default `next()` callback but also triggers
// the subsequent Middleware function.
function nextFactory(context, middleware, index) {
  const subsequentMiddleware = middleware[index];
  // If no subsequent Middleware exists,
  // the default `next()` callback is returned.
  if (!subsequentMiddleware) return context.next;

  return (...parameters) => {
    // Run the default Vue Router `next()` callback first.
    context.next(...parameters);
    // Than run the subsequent Middleware with a new
    // `nextMiddleware()` callback.
    const nextMiddleware = nextFactory(context, middleware, index + 1);
    subsequentMiddleware({ ...context, next: nextMiddleware });
  };
}

router.beforeEach((to, from, next) => {
  if (to.meta.middleware) {
    const middleware = Array.isArray(to.meta.middleware)
      ? to.meta.middleware
      : [to.meta.middleware];

    const context = {
      from,
      next,
      router,
      to,
    };
    const nextMiddleware = nextFactory(context, middleware, 1);

    return middleware[0]({ ...context, next: nextMiddleware });
  }

  return next();
});
