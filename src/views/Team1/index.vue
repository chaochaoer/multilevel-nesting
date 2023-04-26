<template>
  <div>
    <p>这里是 团队管理1</p>
    {{ count }}
    <button @click="counter">累加</button>
    <button @click="jump">跳转到下一级</button>
    <button @click="jumpTest">跳转到 demo1</button>
  </div>
</template>
<script>
export default {
  name: 'teamIndex1'
}
</script>
<script setup>
import { useCounter } from "@/util"
import { useRouter } from "vue-router"

const router = useRouter()
const [count, counter] = useCounter()
const jump = () => {
  router.push({
    name: 'TeamDetail1',
    params: {
      teamId: 1
    }
  })
}
const jumpTest = () => {
  router.push('/demo1')
}
</script>
