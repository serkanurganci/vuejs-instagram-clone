<template>
  <div class="post">
    <!--    Post Header-->
    <header class="post-header section">
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
    <!--Post Media-->
    <div class="post-media">
      <img src="https://images.pexels.com/photos/8074612/pexels-photo-8074612.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="post-media" />
    </div>
    <!--    Post Action-->
    <div class="post-action section">
      <div class="post-action-buttons">
        <button type="button">
          <LikeIcon />
        </button>
        <button type="button">
          <CommentIcon />
        </button>
        <button type="button">
          <DirectIcon />
        </button>
        <button type="button" class="save-button">
          <SaveIcon />
        </button>
      </div>
    </div>

    <!--    View Count-->
    <div class="view-count section">
      <CustomText tag="b" class="section">89 Likes</CustomText>
    </div>
  </div>
</template>
<script>
import Avatar from './Avatar'
import CustomText from './CustomText'
import MoreIcon from '../assets/icons/more.svg'
import LikeIcon from '../assets/icons/like.svg'
import CommentIcon from '../assets/icons/comment.svg'
import DirectIcon from '../assets/icons/direct.svg'
import SaveIcon from '../assets/icons/save.svg'
export default {
  name: 'Post',
  components: { CustomText, Avatar, MoreIcon, LikeIcon, CommentIcon, DirectIcon, SaveIcon },
}
</script>
<style scoped>
.post {
  border: 1px solid rgb(var(--b6a));
  border-radius: 3px;
}
.section {
  padding-right: 8px;
  padding-left: 8px;
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
.post-action {
  padding-top: 4px;
  padding-bottom: 8px;
  &-buttons {
    display: flex;
    button {
      width: 40px;
      height: 40px;
      padding: 8px;
    }
    .save-button {
      margin-left: auto;
    }
  }
}
.view-count {
  margin-bottom: 8px;
}
</style>
