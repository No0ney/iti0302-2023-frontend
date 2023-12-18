<script setup>
import { RouterLink } from "vue-router";
import { Icon } from '@iconify/vue';
import { store, checkLogState } from "@/store";

checkLogState();

</script>

<template>
  <header>
    <nav class="container">
      <div class="branding">
        <img src="../assets/plane-ticket-logo.png" alt="">
        <h1>Flight-o-roo</h1>
      </div>
      <ul class="nav-routes">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/flights">All flights</RouterLink>
        <RouterLink to="/id">Check Tickets</RouterLink>
        <RouterLink to="/login" v-if="!store.loggedIn">Log in</RouterLink>
        <RouterLink to="/profile" v-else>
          <Icon icon="iconamoon:profile" width="24" />
        </RouterLink>
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
header {
  background-color: #b1e5ff;
  nav {
    display: flex;
    align-items: center;
    padding: 25px 16px;

    .branding {
      display: flex;
      align-items: center;
      gap: 8px;
      img {
        max-width: 50px;
      }

      h1 {
        font-size: 24px;
      }
    }

    .nav-routes {
      display: flex;
      flex: 1;
      justify-content: flex-end;
      gap: 12px;
      list-style: none;

      a {
        text-decoration: none;
        color: inherit;
      }
    }
  }
}
</style>