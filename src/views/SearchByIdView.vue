<script setup>
import TicketSearchBar from "@/components/TicketSearchBar.vue";
import Flight from "@/components/Flight.vue";
import axios from "axios";
import {ref} from "vue";

let tickets = ref([]);

const findInformation = (id) => {
  axios.get("api/ticket/id")
      .then(response => {
        tickets.value = response.data;
      });
};

</script>
<template>
  <main>
    <h1>Enter your ticket id</h1>

  </main>
</template>

<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  padding: 40px 16px;

  h1 {
    margin-bottom: 16px;
    text-align: center;
  }

  td {
    text-align: center;
  }
}
</style>