<script setup>
</script>

<template>
  <ul>
    <li>
      <div class="flight">
        <p>
          <slot></slot>
        </p>
      </div>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
li {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 16px 10px;
  margin-top: 24px;
  background-color: #f1f1f1;
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1),
  0 8px 10px -6px rgb(0 0 0 / 0.1);

  .flight {
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
</style>