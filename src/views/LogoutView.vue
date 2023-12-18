<script setup>
import Button from "@/components/Button.vue";

const doLogOut = () => {
  localStorage.removeItem('user-token');
  window.location.replace('/login');
}
</script>

<template>
  <main>
    <h1>Log out</h1>
    <div>
      <p>Are you sure?</p>
      <p>Then click button below!</p>
    </div>
    <Button @click="doLogOut">Log out</Button>
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

  p {
    margin-top: 10px;
    text-align: center;
  }

  Button {
    margin-top: 8px;
  }
}
</style>