<template>
  <div>
    <p>这里是 团队详情 props.type是{{ props.type }}</p>
    {{ count }}
    <button @click="counter">累加</button>
    <button @click="jump">跳转到下一级</button>
    <button @click="jumpTest">跳转到 demo</button>
  </div>
</template>
<script>
export default {
  name: 'TeamDetail'
}
</script>
<script setup>
import { useCounter } from "@/util"
import { useRouter } from "vue-router"
/* eslint-disable */
const props = defineProps({
  type: String
})

const router = useRouter()
const [count, counter] = useCounter()
const jump = () => {
  router.push({
    name: 'PersonDetail',
    params: {
      personId: 2
    }
  })
}
const jumpTest = () => {
  router.push('/demo')
}
</script>