<template>
  <div>
    <p>这里是 文章详情1</p>
    {{ count }}
    <button @click="counter">累加</button>
  </div>
</template>
<script>
export default {
  name: 'ArticleDetail1'
}
</script>
<script setup>
import { useCounter } from "@/util"
import { useRoute } from "vue-router"
console.log(useRoute().params)

const [count, counter] = useCounter()
</script>