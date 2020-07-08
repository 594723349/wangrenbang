import Vue from "vue";
import VueRouter from "vue-router";

const Login = () => import(/* webpackChunkName: "about" */ "@/views/Login.vue");
const ServiceIndex = () => import(/* webpackChunkName: "about" */ "@/views/Service/index.vue");
const PlanIndex = () => import(/* webpackChunkName: "about" */ "@/views/Plan/index.vue");
const PersonalIndex = () => import(/* webpackChunkName: "about" */ "@/views/Personal/index.vue");
const PersonalFans = () => import(/* webpackChunkName: "about" */ "@/views/Personal/fans.vue");
const PersonalFollow = () => import(/* webpackChunkName: "about" */ "@/views/Personal/follow.vue");
const PersonalHistory = () => import(/* webpackChunkName: "about" */ "@/views/Personal/history.vue");
const PersonalSafe = () => import(/* webpackChunkName: "about" */ "@/views/Personal/safe.vue");
const PersonalProject = () => import(/* webpackChunkName: "about" */ "@/views/Personal/project.vue");
PersonalFollow;
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Service",
    alias: "/service",
    component: ServiceIndex
  },
  {
    path: "/plan",
    name: "Plan",
    component: PlanIndex
  },
  {
    path: "/login",
    component: Login,
    name: "Login"
  },
  {
    path: "/personal",
    component: PersonalIndex,
    name: "Personal"
  },
  {
    path: "/personal/fans",
    component: PersonalFans,
    name: "PersonalFans"
  },
  {
    path: "/personal/follow",
    component: PersonalFollow,
    name: "PersonalFollow"
  },
  {
    path: "/personal/history",
    component: PersonalHistory,
    name: "PersonalHistory"
  },
  {
    path: "/personal/safe",
    component: PersonalSafe,
    name: "PersonalSafe"
  },
  {
    path: "/personal/project",
    component: PersonalProject,
    name: "PersonalProject"
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
];

const router = new VueRouter({
  routes
});

export default router;
