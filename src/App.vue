<template>
  <div class="app">
    <MasterHeader />
    <main>
      <Container>
        <router-view />
      </Container>
    </main>
  </div>
</template>
<script>
import MasterHeader from '@/components/Header.vue'
import Container from '@/components/Container.vue'

export default {
  name: 'app',
  components: {
    MasterHeader,
    Container
  }
}
</script>

<style>
.main {
  padding-top: 30px;
}
</style>
