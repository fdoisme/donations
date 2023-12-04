import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "../views/HomeView.vue"
import ProjectView from "../views/ProjectView.vue"
import DashboardView from "../views/DashboardView.vue"
import UnderConstruction from "../views/UnderConstruction.vue"
import RegisterView from "../views/RegisterView.vue"
import LoginView from "../views/LoginView.vue"
import CheckoutView from "../views/CheckoutView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/project',
      name: 'project',
      component: ProjectView
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView
    },
    {
      path: '/checkout/:id',
      name: 'checkout',
      component: CheckoutView
    },
    {
      path: '/503',
      name: '503',
      component: UnderConstruction
    },
  ]
})

export default router
