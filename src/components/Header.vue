<template>
  <header class="header">
    <Container class="header-inner">
      <router-link to="/" class="logo">Instagram</router-link>
      <form class="search">
        <input type="text" placeholder="search" />
      </form>
      <nav class="nav">
        <router-link to="/">
          <HomeIcon v-if="$route.name !== 'Home'" />
          <HomeFillIcon v-else />
        </router-link>
        <router-link to="/direct">
          <DirectIcon v-if="$route.name !== 'Direct'" />
          <DirectFillIcon v-else />
        </router-link>

        <router-link to="/explore">
          <ExploreIcon v-if="$route.name !== 'Explore'" />
          <ExploreFillIcon v-else />
        </router-link>
        <router-link to="/profile">Profile </router-link>
      </nav>
    </Container>
  </header>
</template>
<script>
import Container from './Container.vue'
import HomeIcon from '@/assets/icons/home.svg'
import HomeFillIcon from '@/assets/icons/home-fill.svg'
import DirectIcon from '@/assets/icons/direct.svg'
import DirectFillIcon from '@/assets/icons/direct-fill.svg'
import ExploreIcon from '@/assets/icons/explore.svg'
import ExploreFillIcon from '@/assets/icons/explore-fill.svg'
export default {
  name: 'MasterHeader',
  components: {
    Container,
    HomeIcon,
    HomeFillIcon,
    DirectIcon,
    DirectFillIcon,
    ExploreIcon,
    ExploreFillIcon
  }
}
</script>
<style>
.header {
  z-index: 90;
  border: 1px solid rgb(var(--b6a));
  background: white;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
}
.header-inner {
  display: flex;
  align-items: center;
  justify-content: center;
  height: var(--header-height);
  @media (--t) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
  }
}
.logo {
  font-size: 1.5rem;
  font-weight: bold;
}
.search {
  text-align: center;
}
.search input {
  display: none;
  @media (--t) {
    display: block;
    background: rgb(var(--b3f));
    border: 1px solid rgb(var(--b6a));
    padding: 3px 10px 3px 10px;
    color: rgba(var(--i1d, 38, 38, 38), 1);
    outline: 0;
    font-size: 1.2rem;
  }
}
.search input::placeholder {
  text-align: center;
}
.nav {
  z-index: 90;
  background-color: white;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 1px solid rgb(var(--b6a));
  height: 44px;
  @media (--t) {
    height: auto;
    position: static;
    justify-content: end;
    border-top: 0;
  }
}
.nav a {
  margin-left: 20px;
}
</style>
