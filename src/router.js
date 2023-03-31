import { createRouter, createWebHistory  } from "vue-router"

const routes = [ 
  {
    path: "/",
    component: () => import("./views/Home.vue")
  },
  {
    path: "/news",
    component: () => import("./views/News.vue")
  },
  {
    path: "/games",
    component: () => import("./views/Games.vue")
  },
  {
    path: "/games/:id",
    component: () => import("./views/Game.vue")
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router