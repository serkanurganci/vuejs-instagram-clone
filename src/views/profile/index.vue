<template>
  <div>
    <h1>Instagram Clone - Commit Deploy Deneme</h1>
    <CustomText class="a1">Profile</CustomText>
    <div id="nav">
      <router-link to="/profile">POSTS</router-link> |
      <router-link to="/profile/igtv">IGTV</router-link> |
      <router-link to="/profile/save">SAVED</router-link> |
      <router-link to="/profile/tag">TAGGED</router-link> |
    </div>
    <router-view />
  </div>
</template>

<script>
import CustomText from '../../components/CustomText.vue'
export default {
  name: 'Profile',
  components: {
    CustomText
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
