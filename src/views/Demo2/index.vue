<template>
  <div>
    <p>这里是 demo2</p>
    {{ count }}
    <button @click="counter">累加</button>
    <button @click="jump">跳转到 团队管理</button>
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
import { onActivated, onDeactivated } from "vue";
onActivated(() => {
  console.log("active demo2");
});
onDeactivated(() => {
  console.log("deactive demo2");
});
const router = useRouter()
const [count, counter] = useCounter()

const jump = () => {
  router.push('/team')
}
</script>