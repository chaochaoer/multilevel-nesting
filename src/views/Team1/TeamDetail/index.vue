<template>
  <div>
    <p>这里是 团队详情1 props.type是{{ props.type }}</p>
    {{ count }}
    <button @click="counter">累加</button>
    <button @click="jump">跳转到下一级</button>
    <button @click="jumpTest">跳转到 demo1</button>
  </div>
</template>
<script>
export default {
  name: 'TeamDetail1'
}
</script>
<script setup>
import { useCounter } from "@/util"
// import { onActivated, onDeactivated } from "vue"
import { useRouter } from "vue-router"
/* eslint-disable */
const props = defineProps({
  type: String
})
console.log(props.type, 'props.type1')
const router = useRouter()
const [count, counter] = useCounter()
const jump = () => {
  router.push({
    name: 'PersonDetail1',
    params: {
      personId: 2
    }
  })
}

// onActivated(() => {
//   console.log('111')
// })
// onDeactivated(() => {
//   console.log('111222')
// })

const jumpTest = () => {
  router.push('/demo1')
}
</script>