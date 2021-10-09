<template>
  <component :is="tag" :class="size">
    <slot />
  </component>
</template>
<script>
export default {
  name: 'CustomText',
  props: {
    tag: {
      type: String,
      default: 'span'
    },
    size: {
      type: String,
      default: 'normal', //normal:14px, sm:12px, xs:11px, xxs:10px
      validator: function (value) {
        return ['normal', 'sm', 'xsm', 'xxsm'].indexOf(value) !== -1
      }
    }
  }
}
</script>
<style scoped>
.sm {
  font-size: 12px;
}
.xsm {
  font-size: 11px;
}
.xxsm {
  font-size: 10px;
}
</style>
