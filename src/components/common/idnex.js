import ConsCard from '@/components/common/Card'

import ConsItme from '@/components/common/ConsItem'

import SummaryItem from '@/components/common/SummaryItem'

let MyPlugin = {}

MyPlugin.install = function (Vue) {
  Vue.component(ConsCard.name, ConsCard)
  Vue.component(ConsItme.name, ConsItme)
  Vue.component(SummaryItem.name, SummaryItem)
}

export default MyPlugin