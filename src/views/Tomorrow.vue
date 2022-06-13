<template>
  <div class="container">
    <cons-card
      :name="tomorrowData.name"
      :allIndex="tomorrowData.all"
    ></cons-card>
    <ConsList :data="tomorrowData" />
  </div>
</template>

<script>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import getData from "@/services";

import ConsList from "@/components/List/Tomorrow";
export default {
  name: "TomorrowPage",
  components: { ConsList },
  setup() {
    const store = useStore(),
      state = store.state;
    onMounted(() => {
      getData(store);
    });

    return {
      tomorrowData: computed(() => state.tomorrow),
    };
  },
};
</script>

<style lang="scss" scoped>
</style>