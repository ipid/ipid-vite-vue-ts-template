import { defineStore } from 'pinia'

export const useIndexStore = defineStore('index', {
  state: () => ({
    count: 0,
  }),
})
