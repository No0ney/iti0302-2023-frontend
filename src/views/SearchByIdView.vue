<script setup>
import TicketSearchBar from "@/components/TicketSearchBar.vue";
import Ticket from "@/components/Ticket.vue";
import axios from "axios";
import {ref} from "vue";

let tickets = ref([]);

const findInformation = (id) => {
  axios.get("api/flight/ticket/" + id)
      .then(response => {
        tickets.value = response.data;
        console.log(response.data)
      });
};

</script>
<template>
  <main>
    <h1>Please enter your ticket id to check your ticket information.</h1>
      <div>
        <TicketSearchBar @find-ticket="findInformation" />
        <ul class="ticket-list" v-if="tickets.length > 0">
          <Ticket
          v-for="ticket in tickets" :ticket="ticket">
            {{ticket.id}}
          </Ticket>
        </ul>
      </div>
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