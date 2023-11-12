<script setup>
import {reactive} from "vue";
import Button from "@/components/Button.vue";
</script>


<template>
  <div>

  </div>
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