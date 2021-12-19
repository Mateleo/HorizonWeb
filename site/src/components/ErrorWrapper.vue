<template>
  <p class="error-message">
    {{ error }}
  </p>
</template>

<script lang="js">
export default {
  props: {
    error: {
      type: String,
      default: '<Error>'
    },
    success: {
      type: String,
      default: '<Success>'
    }
  }
}
</script>

<style lang="scss">
.success-message {
  @apply text-blue-400;
}
.error-message {
  @apply text-red-500;
}
</style>
