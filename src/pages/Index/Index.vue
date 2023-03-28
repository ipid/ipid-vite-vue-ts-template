<script lang="ts" setup>
import { ref } from 'vue'
import { ElButton } from 'element-plus'

const localNum = ref(0)

function localPlus1() {
  localNum.value++
}

</script>

<template>
  <p>Local count: {{ localNum }}
    <el-button @click="localPlus1()">Local +1</el-button>
  </p>
</template>

<style lang="scss" scoped>

</style>
