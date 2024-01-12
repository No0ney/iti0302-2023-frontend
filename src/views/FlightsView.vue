<script setup>
import SearchBar from "@/components/SearchBar.vue";
import Flight from "@/components/Flight.vue";
import axios from "axios";
import {reactive, ref} from "vue";
import {checkLogState, store} from "@/store";
import Button from "@/components/Button.vue";

checkLogState();

let flights = ref([]);

const bookingState = reactive({
  invalid: null,
  errMsg: '',
  success: null,
  successMsg: ''
});

const findFlight = (departure, destination) => {
  axios.get("api/flight/find/" + departure + "/" + destination)
      .then(response => {
        flights.value = response.data;
      });
};
const formatDate = (dateString) => {
  const options = {year: 'numeric', month: 'long', day: 'numeric'};
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const bookTicket = (flightID) => {
  bookingState.invalid = null;
  bookingState.success = null;
  axios.get("/api/flight/book/" + flightID)
      .then(response => {
        bookingState.success = true;
        bookingState.successMsg = 'Booked'
      })
      .catch(error => {
        console.error("Error booking ticket.", error);
        bookingState.invalid = true;
        bookingState.errMsg = "Can't be booked."
      });
}
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
          <p><strong>Departure:</strong> {{flight.departure}}</p>
          <p><strong>Destination:</strong> {{flight.destination}}</p>
          <p><strong>Airline:</strong> {{flight.company}}</p>
          <p><strong>Date:</strong> {{formatDate(flight.departuredate)}}</p>
          <div v-if="store.loggedIn">
            <p class="errMsg" v-if="bookingState.invalid">{{ bookingState.errMsg }}</p>
            <Button @click="bookTicket(flight.id)">Book</Button>
            <p class="successMsg" v-if="bookingState.success">{{ bookingState.successMsg }}</p>
          </div>
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

  .errMsg {
    color: red;
  }

  .successMsg {
    color: black;
  }

  Button {
    margin-top: 5px;
    background-color: lightgrey;
  }
}
</style>