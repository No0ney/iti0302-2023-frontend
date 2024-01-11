<script setup>
import axios from "axios";
import {onMounted, reactive, ref} from "vue";

const flights = ref([]);
const currentPage = ref(1);
const pageSize = ref(5);
const totalPages = ref(0);
const totalItems = ref(0);
const sorting = reactive({
  key: '',
  isAsc: false
});

const fetchFlights = () => {
  axios.get(`api/flight?page=${currentPage.value - 1}&size=${pageSize.value}&sort=${sorting.key}&order=${sorting.isAsc ? 'asc' : 'desc'}`)
      .then(response => {
        flights.value = response.data;
      })
      .catch(error => console.error("Error fetching flights", error));
};

const changePage = (page) => {
  currentPage.value = page;
  fetchFlights();
};

const sortFlights = (key) => {
  sorting.key = key;
  sorting.isAsc = sorting.key === key ? !sorting.isAsc : true;
  fetchFlights();
};

const formatDate = (dateString) => {
  const options = {year: 'numeric', month: 'long', day: 'numeric'};
  return new Date(dateString).toLocaleDateString(undefined, options);
};

onMounted(() => {
  axios.get("api/flight")
      .then(response => {
        flights.value = response.data;
      });
  axios.get(`api/flight/amount`)
      .then(response => {
        totalItems.value = response.data;
        totalPages.value = Math.ceil(totalItems.value / pageSize.value); // Calculate totalPages here
      })
      .catch(error => console.error("Error fetching total flights amount", error));
});
</script>


<template>
  <main>
    <h1>Flights</h1>
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
    <div class="pagination">
      <button
              v-for="page in totalPages"
              :key="page"
              @click="changePage(page)"
              :class="{ active: page === currentPage }">
        {{ page }}
      </button>
    </div>
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
  .pagination {
    display: flex;
    justify-content: center;
    margin-top: 20px;

    button {
      background-color: #188AC2;
      border: none;
      color: white;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 16px;
      margin: 4px 2px;
      cursor: pointer;
      padding: 10px 20px;
      border-radius: 5px;
      transition: background-color 0.3s, transform 0.3s;

      &:hover {
        background-color: #0f6a9d;
        transform: translateY(-2px);
      }

      &.active {
        background-color: #0e5b8d;
        font-weight: bold;
      }
    }
  }

  @media (max-width: 600px) {
    table {
      display: block;
      overflow-x: auto;
    }
    .pagination button {
      padding: 8px 16px;
      font-size: 14px;
    }
  }
}
</style>
