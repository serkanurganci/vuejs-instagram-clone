<template>
  <figure class="avatar">
    <img :src="src" :alt="alt" :width="size" :height="size" />
  </figure>
</template>
<script>
export default {
  name: 'Avatar',
  props: {
    src: {
      type: String,
      default: 'https://st.depositphotos.com/1052233/2885/v/600/depositphotos_28850541-stock-illustration-male-default-profile-picture.jpg',
    },
    alt: {
      type: String,
      default: 'Profile Picture',
    },
    size: {
      type: String,
      default: '56',
    },
  },
}
</script>
<style>
.avatar {
  padding: 3px;
  border-radius: 100%;
  display: inline-flex;
  background-image: linear-gradient(120deg, #fccb90 0%, #d57eeb 100%);
  margin: 0;
}
.avatar img {
  border: 2px solid white;
  border-radius: inherit;
}
</style>
