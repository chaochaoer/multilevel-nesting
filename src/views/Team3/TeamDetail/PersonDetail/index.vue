<template>
  <div>
    <p>这里是 个人详情3</p>
    {{ count }}
    <button @click="counter">累加</button>
    <button @click="jump">跳转到下一级</button>
  </div>
</template>
<script>
export default {
  name: 'PersonDetail3'
}
</script>
<script setup>
import { useCounter } from "@/util"
import { useRouter } from "vue-router"

const router = useRouter()

const [count, counter] = useCounter()
const jump = () => {
  router.push({
    name: 'ArticleDetail3',
    params: {
      articleId: 3
    }
  })
}
</script>