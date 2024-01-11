<template>
  <div>
    <div class="pagination-row">
      <button class="pagination-button">Previous page</button>
      Showing:
      <span
          class="showing"
          :class="perPage === amount && 'active'"
          v-for="(amount, index) in perPageOptions"
          :key="index"
          @click="setPerPage(amount)"
      >{{amount}}</span>
      <span class="inner-pagination-content">
                Page {{ page }} of {{ pages }}
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