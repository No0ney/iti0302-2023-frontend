<script setup>
import {reactive} from "vue";
import Button from "@/components/Button.vue";

const emit = defineEmits(['find-ticket'])

const ticketState = reactive({
  id: null,
  flight: null,
  seatNumber: '',
  price: null,
  invalid: null,
  errMsg: '',
});

const findInformation = () => {
  ticketState.invalid = null;
  if (ticketState.id !== null) {
    emit("find-ticket", ticketState.id, ticketState.flight, ticketState.seatNumber, ticketState.price);
    return;
  }
  ticketState.invalid = true;
  ticketState.errMsg = "Entered ID is invalid!"
}
</script>

<template>
  <div class="input-wrap" :class="{ 'input-err' : ticketState.invalid}">
    <input type="text" v-model="ticketState.id" placeholder="ID" />
    <Button @click="findInformation">Search</Button>
  </div>
  <p v-show="ticketState.invalid" class="err-msg">{{ ticketState.errMsg }}</p>
</template>

<style lang="scss" scoped>
.input-wrap {
  display: flex;
  transition: 250ms ease;
  border: none;

  input {
    width: 100%;
    padding: 8px 6px;
    margin: 2px;
    border: 2px solid #8dbee1;

    &:focus {
      outline: none;
    }
  }
}

.err-msg {
  margin-top: 6px;
  font-size: 12px;
  color: red;
}
</style>