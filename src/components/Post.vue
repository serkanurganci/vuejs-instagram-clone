<template>
  <div class="post">
    <header class="post-header">
      <div class="post-header-author">
        <Avatar size="42" />
        <div class="post-header-author-info">
          <div>
            <CustomText tag="b">anadearmas</CustomText>
          </div>
          <div>
            <CustomText tag="span" size="xsm">Paid partnership with lamer</CustomText>
          </div>
        </div>
      </div>
      <button type="button" class="post-header-more">
        <MoreIcon />
      </button>
    </header>

    <div class="post-media">
      <img src="https://images.pexels.com/photos/8074612/pexels-photo-8074612.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="post-media" />
    </div>
  </div>
</template>
<script>
import Avatar from './Avatar'
import CustomText from './CustomText'
import MoreIcon from '../assets/icons/more.svg'
export default {
  name: 'Post',
  components: { CustomText, Avatar, MoreIcon },
}
</script>
<style scoped>
.post {
  border: 1px solid rgb(var(--b6a));
  border-radius: 3px;
}
.post-header {
  display: flex;
  align-items: center;
  height: 60px;
  padding: 12px 12px 12px 16px;
  &-author {
    display: flex;
    align-items: center;
    &-info {
      margin-left: 8px;
    }
  }
  &-more {
    margin-left: auto;
  }
}
</style>
