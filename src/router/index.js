import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: '/home'
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    component: () =>
      import(/* webpackChunkName: "portfolio" */ "../views/Portfolio.vue")
  },
  {
    path: "/home",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/Home.vue")
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
