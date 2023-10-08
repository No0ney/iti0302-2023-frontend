<template>
  <div class="about">
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
  </div>
</template>

<script setup>
  import axios from "axios";
  import {onMounted, ref} from "vue";

  const tickets = ref([]);

  onMounted(() => {
    axios.get("api/ticket")
        .then(response => {
          tickets.value = response.data;
        });
  })
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
