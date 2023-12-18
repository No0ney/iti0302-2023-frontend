<script setup>
import Form from "@/components/Form.vue";
import axios from "axios";
import {reactive} from "vue";

let logInState = reactive({
  mayLogIn: null
});

const createToken = (username, password) => {
  if (localStorage.getItem('user-token') !== null) {
    localStorage.removeItem('user-token');
  }
  axios({
    method: 'post',
    url: '/api/flight/user',
    data: {
      username: username,
      password: password
    }
  });
  logInState.mayLogIn = true;
};
</script>

<template>
  <main>
    <h1>Register</h1>
    <div>
      <Form @create-token="createToken">Register</Form>
      <p v-show="logInState.mayLogIn">You may now log in.</p>
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

  p {
    margin-top: 10px;
    text-align: center;
  }
}
</style>