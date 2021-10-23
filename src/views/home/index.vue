<template>
  <div class="home">
    <div class="timeline">
      <CustomText>Home</CustomText>
      <Avatar />
      <Post />
    </div>
    <div class="sidebar">
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est magni minima suscipit perferendis nam soluta, veniam voluptatibus! Eaque ipsum
        ea, quam adipisci, assumenda dolor quod omnis quibusdam accusamus cumque culpa modi voluptatem sunt ducimus consequuntur aliquam. Rem, commodi
        inventore! Veniam sapiente accusamus nisi facilis expedita vel provident. Vel, ullam aut!
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est magni minima suscipit perferendis nam soluta, veniam voluptatibus! Eaque ipsum
        ea, quam adipisci, assumenda dolor quod omnis quibusdam accusamus cumque culpa modi voluptatem sunt ducimus consequuntur aliquam. Rem, commodi
        inventore! Veniam sapiente accusamus nisi facilis expedita vel provident. Vel, ullam aut!
      </p>
    </div>
  </div>
</template>

<script>
import CustomText from '../../components/CustomText.vue'
import Post from '../../components/Post.vue'
import Avatar from '../../components/Avatar'
export default {
  name: 'Home',
  components: {
    Avatar,
    Post,
    CustomText,
  },
}
</script>

<style scoped>
.home {
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  @media (--t) {
    max-width: none;
    display: grid;
    grid-template-columns: 1fr 293px;
    grid-column-gap: 30px;
  }
}
.timeline {
  max-width: 615px;
}
.sidebar {
  display: none;
  @media (--t) {
    display: block;
  }
}
</style>
