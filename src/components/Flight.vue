<script setup>
const props = defineProps({
  flight: {
    type: Object,
    required: true,
  }
});
defineEmits([]);
</script>

<template>
  <li>
    <div class="flight">
      <p>
        <slot></slot>
      </p>
    </div>
  </li>
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

  &:hover {
    .todo-actions {
      opacity: 1;
    }
  }

  .flight {
    flex: 1;
  }
}
</style>