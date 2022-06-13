<template>
  <div class="container">
    <cons-card :name="weekData.name" :allIndex="weekData.all"></cons-card>
    <ConsList :data="weekData" />
  </div>
</template>

<script>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import getData from "@/services";

import ConsList from "@/components/List/Week";
export default {
  name: "WeekPage",
  components: { ConsList },
  setup() {
    const store = useStore(),
      state = store.state;
    onMounted(() => {
      getData(store);
    });

    return {
      weekData: computed(() => state.week),
    };
  },
};
</script>

<style lang="scss" scoped>
</style>