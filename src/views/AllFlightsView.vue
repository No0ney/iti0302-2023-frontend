<script setup>
import Pagination from "@/components/Pagination.vue";
import AllFlightsTable from "@/components/AllFlightsTable.vue";

</script>

<template>
  <main>
    <h1>Flights</h1>
    <Pagination>
      <AllFlightsTable/>
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
