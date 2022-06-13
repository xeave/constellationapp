<template>
  <div
    :class="['nav-item', { 'nav-current': index === curIndex }]"
    @click="navClick(index)"
  >
    {{ item }}
  </div>
</template>

<script>
export default {
  name: "NavItem",
  props: {
    item: String,
    curIndex: Number,
    index: Number,
  },
  /* 使用 setup 函数时，它将接收两个参数：学习setup
props
context 
https://v3.cn.vuejs.org/guide/composition-api-setup.html#props
*/
  setup(props, { emit }) {
    const navClick = (index) => {
      emit("navClick", index);
    };
    return {
      navClick,
    };
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