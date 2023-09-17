<script lang="tsx" setup>
import { ref } from 'vue'
import { ElButton } from 'element-plus'
import indexStore from './index-store'

const localNum = ref(0)
const environmentName = import.meta.env.VITE_ENV_NAME

function localPlus1() {
  localNum.value++
}

function globalPlus1() {
  indexStore.count++
}

function SimpleComponent(props: { onClick: (...args: unknown[]) => unknown }) {
  return (
    <ElButton onClick={props.onClick}>
      目前局部值：{localNum.value} ←+1
    </ElButton>
  )
}
</script>

<template>
  <SimpleComponent @click="localPlus1" />
  <p>
    全局 count: {{ indexStore.count }}
    <el-button @click="globalPlus1()">Local +1</el-button>
  </p>
  <p>当前环境：{{ environmentName }}</p>
</template>
