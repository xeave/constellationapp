<template>
  <div class="container">
    <cons-card :name="todayData.name" :allIndex="todayData.all"></cons-card>
    <num-list :data="todayData"></num-list>
  </div>
</template>

<script>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import getData from "@/services";

import NumList from "@/components/NumList";

export default {
  name: "TodayPage",
  components: { NumList },
  setup() {
    const store = useStore(),
      state = store.state;
    onMounted(() => {
      getData(store);
    });

    return {
      todayData: computed(() => state.today),
    };
  },
};
</script>

<style lang="scss" scoped>
</style>