<template>
  <div>
    <p>这里是 demo1</p>
    {{ count }}
    <button @click="counter">累加</button>
    <button @click="jump">跳转到 团队管理1</button>
  </div>
</template>
<script>
export default {
  name: 'demo1-index'
}
</script>
<script setup>
import { useCounter } from "@/util"
import { useRouter } from "vue-router"

const router = useRouter()

const [count, counter] = useCounter()
const jump = () => {
  router.push('/team1')
}
</script>