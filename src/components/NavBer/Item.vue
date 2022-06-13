<template>
  <div class="nav-item" :data-index="index">
    {{ item }}
  </div>
</template>

<script>
export default {
  name: "NavItem",
  props: {
    item: String,
    index: Number,
  },
};
</script>

<style lang="scss" scoped>
.nav-item {
  width: 1.6rem;
  height: 100%;
  font-size: 0.28rem;
  line-height: 0.64rem;
  text-align: center;
  color: #666;

  &.nav-current {
    color: #db7093;
    font-weight: bold;
  }
}
</style>