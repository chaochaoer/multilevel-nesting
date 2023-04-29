<template>
  <div>
    <p>这里是 团队详情3</p>
    {{ count }}
    <button @click="counter">累加</button>
    <button @click="jump">跳转到下一级</button>
    <button @click="jumpTest">跳转到 demo2</button>
  </div>
</template>
<script>
export default {
  name: 'TeamDetail3'
}
</script>
<script setup>
import { useCounter } from "@/util"
import { useRouter } from "vue-router"

const router = useRouter()
const [count, counter] = useCounter()
const jump = () => {
  router.push({
    name: 'PersonDetail3',
    params: {
      personId: 2
    }
  })
}
const jumpTest = () => {
  router.push('/demo2')
}
</script>