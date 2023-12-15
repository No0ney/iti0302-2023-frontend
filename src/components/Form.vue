<script setup>
import {reactive} from "vue";
import Button from "@/components/Button.vue";

const emit = defineEmits(['create-token'])

const userState = reactive({
  username: '',
  password: '',
  invalid: null,
  errMsg: '',
});

const createToken = () => {
  userState.invalid = null;
  if (userState.username !== '' && userState.password !== '') {
    emit('create-token', userState.username, userState.password);
    return;
  }
  userState.invalid = true;
  userState.errMsg = 'Please fill in all the blanks.'
}
</script>

<template>
  <div class="input-wrap" :class="{ 'input-err' : userState.invalid }">
    <input type="text" v-model="userState.username" placeholder="Username" />
    <input type="password" v-model="userState.password" placeholder="Password" />
    <p v-show="userState.invalid" class="err-msg">{{ userState.errMsg }}</p>
    <Button @click="createToken"><slot>Log in</slot></Button>
  </div>
</template>

<style lang="scss" scoped>
.input-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: 250ms ease;
  border: none;

  input {
    width: 50%;
    padding: 8px 6px;
    margin: 2px;
    border: 2px solid #8dbee1;

    &:focus {
      outline: none;
    }
  }

  Button {
    margin-top: 5px;
    width: 35%;
  }
}

.err-msg {
  margin-top: 6px;
  margin-bottom: 6px;
  font-size: 12px;
  color: red;
}
</style>