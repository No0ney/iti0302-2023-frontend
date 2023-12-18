<script setup>
import SearchBar from "@/components/SearchBar.vue";
import Flight from "@/components/Flight.vue";
import axios from "axios";
import {ref} from "vue";
import {checkLogState} from "@/store";

checkLogState();

let flights = ref([]);

const findFlight = (departure, destination) => {
  axios.get("api/flight/find/" + departure + "/" + destination)
      .then(response => {
        flights.value = response.data;
      });
};
</script>

<template>
  <main>
    <h1>Choose your destination!</h1>
    <div>
      <SearchBar @find-flight="findFlight" />
      <ul class="flight-list" v-if="flights.length > 0">
        <Flight
            v-for="flight in flights"
            :flight="flight"
        >
          {{flight.departure}}, {{flight.destination}}
        </Flight>
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
}
</style>