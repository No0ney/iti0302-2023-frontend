import { createRouter, createWebHistory } from 'vue-router'
import FlightsView from '../views/FlightsView.vue'
import TicketsView from "@/views/TicketsView.vue";
import SearchByIdView from "@/views/SearchByIdView.vue";

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
    },
    {
      path: '/id',
      name: "ticketid",
      component: SearchByIdView,
    }
  ]
})

export default router
