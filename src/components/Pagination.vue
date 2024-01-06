<template>
  <div>
    <div class="pagination-row">
      <button class="pagination-button">Previous page</button>
      <span v-for="(item, index) in new Array(10)" :key="index">
        <button class="pagination-button">{{index + 1}}</button>
      </span>
      <button class="pagination-button">Next page</button>
    </div>
    <slot />
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>
  .pagination-button {
    padding: 8px;
    margin: 2px;
    border-radius: 3px;
    font-size: 1em;
    cursor: pointer;
  }

  .pagination-row {
    padding: 5px 0;
  }
</style>