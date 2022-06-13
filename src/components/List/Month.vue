<template>
  <div class="list">
    <SummaryItem field="健康" :content="data.health" />
    <SummaryItem field="工作" :content="data.work" />
    <SummaryItem field="爱情" :content="data.love" />
    <SummaryItem field="财运" :content="data.money" />
    <SummaryItem field="本月" :content="data.all" />
  </div>
</template>

<script>
export default {
  name: "MonthList",
  props: {
    data: Object,
  },
};
</script>

<style lang="scss" scoped>
.list {
  padding: 0.15rem 0.1rem;
  box-sizing: border-box;
}
</style>