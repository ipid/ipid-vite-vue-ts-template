<script lang="tsx" setup>
import { ref } from 'vue'
import { ElButton } from 'element-plus'
import indexStore, { countAdd1 } from './index-store'

const localNum = ref(0)
const environmentName = import.meta.env.VITE_ENV_NAME

function localPlus1() {
  localNum.value++
}

function globalPlus1() {
  countAdd1()
}

function SimpleComponent() {
  return <ElButton>按钮</ElButton>
}

</script>

<template>
  <p>局部 count: {{ localNum }}
    <el-button @click="localPlus1()">Local +1</el-button>
  </p>
  <p>全局 count: {{ indexStore.count }}
    <el-button @click="globalPlus1()">Local +1</el-button>
  </p>
  <p>简单的 JSX 组件：<SimpleComponent /></p>
  <p>当前环境：{{ environmentName }}</p>
</template>

<style lang="scss" scoped>

</style>
