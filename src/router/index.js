import { createRouter, createWebHistory } from 'vue-router'
import FlightsView from '../views/FlightsView.vue'
import TicketsView from "@/views/TicketsView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: FlightsView
    },
    {
      path: "/ticket",
      name: "ticket",
      component: TicketsView
    }
  ]
})

export default router
