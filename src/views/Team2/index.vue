<template>
  <div>
    <p>这里是 团队管理2</p>
    {{ count }}
    <button @click="counter">累加</button>
    <button @click="jump">跳转到下一级</button>
    <button @click="jumpTest">跳转到 demo2</button>
  </div>
</template>
<script>
export default {
  name: 'teamIndex2'
}
</script>
<script setup>
import { useCounter } from "@/util"
import { useRouter } from "vue-router"

const router = useRouter()
const [count, counter] = useCounter()
const jump = () => {
  router.push({
    name: 'TeamDetail2',
    params: {
      teamId: 1
    }
  })
}
const jumpTest = () => {
  router.push('/demo2')
}
</script>
