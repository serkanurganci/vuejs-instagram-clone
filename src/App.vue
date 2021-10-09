<template>
  <div class="app">
    <MasterHeader />
    <router-view />
  </div>
</template>
<script>
import MasterHeader from '@/components/Header.vue'

export default {
  name: 'app',
  components: {
    MasterHeader
  }
}
</script>

<style></style>
