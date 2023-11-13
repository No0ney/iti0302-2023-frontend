<script setup>
import axios from "axios";
import {onMounted, ref} from "vue";
const flights = ref([]);

onMounted(() => {
  axios.get("api/flight")
      .then(response => {
        flights.value = response.data;
      });
});
</script>

<template>
  <main>
    <h1>Flights</h1>
    <table>
      <tr>
        <th>Departure</th>
        <th>Destination</th>
        <th>Departure Date</th>
      </tr>
      <tr v-for="flight in flights" :key="flight.id">
        <td>{{ flight.departure }}</td>
        <td>{{ flight.destination }}</td>
        <td>{{ flight.departuredate }}</td>
      </tr>
    </table>
  </main>
</template>

<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  padding: 40px 16px;

  h1 {
    margin-bottom: 24px;
    text-align: center;
    font-size: 2em;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.1);

    th {
      background-color: #188AC3;
      color: white;
      padding: 10px;
      text-align: left;
    }

    td {
      padding: 8px;
      text-align: left;
      border-bottom: 1px solid #ddd;
    }

    tr:nth-child(even) {
      background-color: #f2f2f2;
    }

    tr:hover {
      background-color: #ddd;
    }
  }

  @media (max-width: 600px) {
    table {
      display: block;
      overflow-x: auto;
    }
  }
}
</style>
