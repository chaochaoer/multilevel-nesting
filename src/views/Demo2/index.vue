<template>
  <div>
    <p>这里是 demo2</p>
    {{ count }}
    <button @click="counter">累加</button>
    <button @click="jump">跳转到 团队管理2</button>
  </div>
</template>
<script>
export default {
  name: 'demo2-index'
}
</script>
<script setup>
import { useCounter } from "@/util"
import { useRouter } from "vue-router"

const router = useRouter()
const [count, counter] = useCounter()

const jump = () => {
  router.push('/team2')
}
</script>