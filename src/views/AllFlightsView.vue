<script setup>
import axios from "axios";
import {onMounted, reactive, ref} from "vue";
import Pagination from "@/components/Pagination.vue";

const flights = ref([]);

const sorting = reactive({
  key: '',
  isAsc: false
});

const sortFlights = (key) => {
  sorting.key = key;
  sorting.isAsc = sorting.key === key ? !sorting.isAsc : true;

  axios.get(`api/flight?sort=${key}&order=${sorting.isAsc ? 'asc' : 'desc'}`)
      .then(response => {
        flights.value = response.data;
      })
      .catch(error => {
        console.error("There was an error fetching the sorted data", error);
      });
};

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

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
    <Pagination>
    <table>
      <caption>Table of all available flights</caption>
      <tr>
        <th @click="sortFlights('departure')">Departure</th>
        <th @click="sortFlights('destination')">Destination</th>
        <th @click="sortFlights('departuredate')">Departure Date</th>
      </tr>
      <tr v-for="flight in flights" :key="flight.id">
        <td>{{ flight.departure }}</td>
        <td>{{ flight.destination }}</td>
        <td>{{ formatDate(flight.departuredate) }}</td>
      </tr>
    </table>
    </Pagination>
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
      background-color: #188AC2;
      color: white;
      padding: 10px;
      text-align: left;
      cursor: pointer;
    }

    th:hover {
      color: #ddd;
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
