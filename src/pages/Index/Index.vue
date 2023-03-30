<script lang="ts" setup>
import { ref } from 'vue'
import { ElButton } from 'element-plus'
import { useIndexStore } from './index-store'

const indexStore = useIndexStore()
const localNum = ref(0)

function localPlus1() {
  localNum.value++
}

function globalPlus1() {
  indexStore.count++
}

</script>

<template>
  <p>Local count: {{ localNum }}
    <el-button @click="localPlus1()">Local +1</el-button>
  </p>
  <p>Global count: {{ indexStore.count }}
    <el-button @click="globalPlus1()">Local +1</el-button>
  </p>
</template>

<style lang="scss" scoped>

</style>
