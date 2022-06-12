import {
  getData
} from "./request";

export default async (store) => {
  const consName = store.state.consName,
    field = store.state.field,
    data = await getData(consName, field);

  if (data.data.error_code) {
    store.commit('setErrorCode', data.error_code)
  }

  store.commit('setData', data)
}