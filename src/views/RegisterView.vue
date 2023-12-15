<script setup>
import Form from "@/components/Form.vue";
import axios from "axios";

const createToken = (username, password) => {
  axios({
    method: 'post',
    url: '/api/flight/user',
    data: {
      username: username,
      password: password
    }
  });

  // axios({
  //   method: 'post',
  //   url: '/api/flight/login',
  //   data: {
  //     username: username,
  //     password: password
  //   }
  // })
  //     .then(response => {
  //       localStorage.setItem('user-token', response.data);
  //       this.$http.defaults.headers.common['Authorization'] = 'Bearer ' + response.data;
  //     });
};
</script>

<template>
  <main>
    <h1>Register</h1>
    <div>
      <Form @create-token="createToken">Register</Form>
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