import ConsCard from './Card'

let MyPlugin = {}

MyPlugin.install = function (Vue) {
  Vue.component(ConsCard.name, ConsCard)
}

export default MyPlugin