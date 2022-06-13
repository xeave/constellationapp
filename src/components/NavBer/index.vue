<template>
  <div class="nav-bar">
    <div class="scroll-wrapper">
      <div class="nav-wrapper" :style="`width: ${navData.length * 1.6}rem`">
        <nav-item
          v-for="(item, index) in navData"
          :key="index"
          :item="item"
          :curIndex="curIndex"
          :index="index"
          @navClick="navClick"
        ></nav-item>
      </div>
    </div>
  </div>
</template>

<script>
import navData from "@/datas/nav";
import NavItem from "./Item";
import { ref } from "vue";
export default {
  name: "NavBer",
  components: {
    NavItem,
  },
  setup() {
    const curIndex = ref(0);
    const navClick = (index) => {
      curIndex.value = index;
    };
    return {
      navData,
      curIndex,
      navClick,
    };
  },
};
</script>

<style lang="scss" scoped>
.nav-bar {
  position: fixed;
  top: 0.88rem;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 0.76rem;
  border-bottom: 1px solid #ddd;
  box-sizing: border-box;
  background-color: #fff;
  overflow: hidden;

  .scroll-wrapper {
    height: 0.92rem;
    overflow-x: auto;

    .nav-wrapper {
      display: flex;
      flex-direction: row;
      height: 0.92rem;
    }
  }
}
</style>