<template>
  <div class="container">
    <cons-card :name="todayData.name" :allIndex="todayData.all"></cons-card>
    <num-list :data="todayData"></num-list>
    <cons-list :data="todayData"></cons-list>
  </div>
</template>

<script>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import getData from "@/services";

import NumList from "@/components/NumList";

import ConsList from "@/components/List/Today";

export default {
  name: "TodayPage",
  components: { NumList, ConsList },
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