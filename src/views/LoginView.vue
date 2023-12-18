<script setup>
import Form from "@/components/Form.vue";
import axios from "axios";
import {reactive} from "vue";

let loginState = reactive({
  cantLogIn: false
});

const createToken = (username, password) => {
  loginState.cantLogIn = false;
  if (localStorage.getItem('user-token') !== null) {
    localStorage.removeItem('user-token');
  }
  axios({
    method: 'post',
    url: '/api/flight/login',
    data: {
      username: username,
      password: password
    }
  })
      .then(response => {
        if (response.data !== null) {
          loginState.cantLogIn = false;
          localStorage.setItem('user-token', response.data);
          axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data;
          window.location.replace('/');
        }
      })
      .catch(
          error => {
            loginState.cantLogIn = true;
          }
      );
};
</script>

<template>
  <main>
    <h1>Log in</h1>
    <div>
      <Form @create-token="createToken" />
      <p class="err-msg" v-show="loginState.cantLogIn">Wrong username or password.</p>
    </div>
    <p>Don't have an account? </p>
    <div class="route">
      <RouterLink to="/register">Register here!</RouterLink>
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

  .err-msg {
    color: red;
  }

  .route {
    text-align: center;

    a {
      text-decoration: none;
      color: inherit;
    }

    a:hover {
      color: dimgrey;
    }
  }
}
</style>