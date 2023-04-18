import { reactive } from 'vue'

const store = reactive({
  count: 0,
})

export function countAdd1() {
  store.count++
}

export default store
