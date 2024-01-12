<script setup>
import TicketSearchBar from "@/components/TicketSearchBar.vue";
import axios from "axios";
import {reactive, ref} from "vue";

let ticket = ref(null);

const findInformation = (id) => {
  axios.get("api/flight/ticket/" + id)
      .then(response => {
        if (response.data.id !== null) {
          ticket.value = response.data;
          ticketInfo.id = ticket.value.id;
          ticketInfo.flight = ticket.value.flight;
          ticketInfo.seatNumber = ticket.value.seatNumber;
          ticketInfo.price = ticket.value.price;
        }
        console.log(response.data)
      });
};

const ticketInfo = reactive({
  id: 0,
  flight: 0,
  seatNumber: '',
  price: 0.0,
});
</script>
<template>
  <main>
    <h1>Please enter your ticket id to check your ticket information.</h1>
    <div>
      <TicketSearchBar @find-ticket="findInformation"/>
      <ul v-if="ticket !== null">
        <li>
          <div class="ticket">
            <p><strong>Ticket ID:</strong> {{ ticketInfo.id }}</p>
            <p><strong>Flight Number:</strong> {{ ticketInfo.flight }}</p>
            <p><strong>Seat Number:</strong> {{ ticketInfo.seatNumber }}</p>
            <p><strong>Price:</strong> ${{ ticketInfo.price.toFixed(2) }}</p>
          </div>
        </li>
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

  li {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 16px 10px;
    margin-top: 24px;
    background-color: #f1f1f1;
    box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1),
    0 8px 10px -6px rgb(0 0 0 / 0.1);

    .ticket {
      width: 100%;
      max-width: 400px;
      margin: 0 auto;
    }

    h2 {
      font-size: 1.5rem;
      margin-bottom: 10px;
      color: #333;
    }

    p {
      margin: 8px 0;
      font-size: 1rem;
      color: #555;

      strong {
        font-weight: bold;
        margin-right: 8px;
      }
    }
  }
}
</style>
