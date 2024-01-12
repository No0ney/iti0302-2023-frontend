<script setup>
import axios from "axios";
import {onMounted, ref} from "vue";
const hello = ref();
const cat = ref();

onMounted(() => {
  axios.get("api/admin/hello")
      .then(response => {
        hello.value = response.data;
      })
      .catch(
          error => {
            window.location.replace('/login');
          }
      )
});
onMounted(() => {
  axios.get("api/flight/cat")
      .then(response => {
        cat.value = response.data
      })
    }
)
</script>

<template>
  <main>
    <h1>Your profile</h1>
    <p>{{ hello }}</p>
    <p><strong>Here is a random cat fact:</strong></p>
    <p>{{cat}}</p>
    <div class="logout">
      <RouterLink to="/logout">Log out</RouterLink>
    </div>
  </main>
</template>

<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  padding: 40px 16px;

  h1 {
    margin-bottom: 16px;
    text-align: center;
  }

  .logout {

    a {
      text-decoration: none;
      color: red;
    }

    a:hover {
      color: darkred;
    }
  }
}
</style>