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

function SimpleComponent(props: { onClick: () => void }) {
  return <ElButton onClick={props.onClick}>目前局部值：{localNum.value} ←+1</ElButton>
}
</script>

<template>
  <div :class="$style.container">
    <SimpleComponent @click="localPlus1" />
    <p>
      全局 count: {{ indexStore.count }}
      <ElButton @click="globalPlus1()">Local +1</ElButton>
    </p>
    <p>当前环境：{{ environmentName }}</p>
  </div>
</template>

<style lang="scss" module>
@use './PageIndex.scss' as PageIndex;

.container {
  @include PageIndex.pad20px;
  width: fit-content;
  border: 1px solid #e1e1e1;
  border-radius: 12px;
}
</style>
