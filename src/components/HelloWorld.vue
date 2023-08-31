<script setup lang="ts">
import { useCounterStore } from '@/store'
import { onMounted, ref } from 'vue'
import User from '@/api/user'
const url = ref('')

onMounted(async () => {
  console.log('111')
  const res = await User.getUser()
  url.value = res.data.avatar_url
})

let useCount = useCounterStore()
const add = () => useCount.accumulate()
const setpAdd = () => {
  useCount.accumulateStep(10)
}

defineProps<{ msg: string }>()
</script>

<template>
  <h1 class="h1">{{ msg }} {{ useCount.count }}</h1>
  <t-button theme="primary" @click="add">ADD</t-button>
  <t-button theme="primary" @click="setpAdd">setpAdd</t-button>
  <t-image :src="url" fit="fill" :style="{ width: '120px', height: '120px' }" />
</template>

<style lang="less" scoped>
@color: red;
h1 {
  color: @color;
}
</style>
