<template>
  <div class="container">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'Container'
}
</script>
<style>
.container {
  max-width: 955px;
  margin: 0 auto;
}
</style>
