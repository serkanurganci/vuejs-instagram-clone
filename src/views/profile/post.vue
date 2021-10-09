<template>
  <div>
    <CustomText class="a1">Post</CustomText>
  </div>
</template>

<script>
import CustomText from '../../components/CustomText.vue'
export default {
  name: 'Post',
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
