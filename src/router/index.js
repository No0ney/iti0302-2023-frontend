import { createRouter, createWebHistory } from 'vue-router'
import FlightsView from '../views/FlightsView.vue'
import AllFlightsView from "@/views/AllFlightsView.vue";
import SearchByIdView from "@/views/SearchByIdView.vue";
import LoginView from "@/views/LoginView.vue";
import RegisterView from "@/views/RegisterView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: FlightsView
    },
    {
      path: "/flights",
      name: "flights",
      component: AllFlightsView
    },
    {
      path: '/id',
      name: "ticketid",
      component: SearchByIdView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    }
  ]
})

export default router
