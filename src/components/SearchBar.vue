<script setup>
import {reactive} from "vue";
import Button from "@/components/Button.vue";

const emit = defineEmits(['find-flight'])

const flightState = reactive({
  departure: '',
  destination: '',
  invalid: null,
  errMsg: '',
});

const findFlight = () => {
  flightState.invalid = null;
  if (flightState.departure !== '' && flightState.destination !== '') {
    emit('find-flight', flightState.departure, flightState.destination);
    // flightState.departure = '';    this removes values from the
    // flightState.destination = '';  search bar, but we don't want that
    return;
  }
  flightState.invalid = true;
  flightState.errMsg = 'Please fill in all the blanks.'
}
</script>

<template>
  <div class="input-wrap" :class="{ 'input-err' : flightState.invalid }">
    <input type="text" v-model="flightState.departure" placeholder="Departure" />
    <input type="text" v-model="flightState.destination" placeholder="Destination" />
    <Button @click="findFlight">Search</Button>
  </div>
  <p v-show="flightState.invalid" class="err-msg">{{ flightState.errMsg }}</p>
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