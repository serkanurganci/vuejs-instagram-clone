<template>
  <div>
    <h1>Instagram Clone - Commit Deploy Deneme</h1>
    <CustomText class="a1">Hello World</CustomText>
    <CustomText class="a2" tag="p" size="sm">Hello World</CustomText>
    <CustomText class="a3" tag="div" size="xsm">Hello World</CustomText>
    <IconHome />
  </div>
</template>

<script>
import CustomText from '../components/CustomText.vue'
import IconHome from '@/assets/icons/home.svg'
export default {
  name: 'Home',
  components: {
    CustomText,
    IconHome
  }
}
</script>

<style scoped>
.a1 {
  color: rgb(var(--c37));
}
.a2 {
  color: rgb(var(--f24));
}
.a3 {
  color: rgb(var(--jbb));
}
</style>
