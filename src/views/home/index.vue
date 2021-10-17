<template>
  <div class="home">
    <CustomText>Home</CustomText>
    <Avatar />
  </div>
</template>

<script>
import CustomText from '../../components/CustomText.vue'
import Avatar from '@/components/Avatar.vue'
export default {
  name: 'Home',
  components: {
    CustomText,
    Avatar
  }
}
</script>

<style scoped></style>
