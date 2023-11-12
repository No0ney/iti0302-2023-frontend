<script setup>
import axios from "axios";
import {onMounted, ref} from "vue";

const tickets = ref([]);

onMounted(() => {
  axios.get("api/flight")
      .then(response => {
        tickets.value = response.data;
      });
});
</script>

<template>
  <main>
    <h1>Tickets</h1>
    <table>
      <tr>
        <th>Departure</th>
        <th>Destination</th>
      </tr>
      <tr v-for="ticket in tickets">
        <td>{{ ticket.departure }}</td>
        <td>{{ ticket.destination }}</td>
      </tr>
    </table>
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
