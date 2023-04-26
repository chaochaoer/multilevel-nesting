<template>
  <div>
    <p>这里是 文章详情2</p>
    {{ count }}
    <button @click="counter">累加</button>
  </div>
</template>
<script>
export default {
  name: 'ArticleDetail2'
}
</script>
<script setup>
import { useCounter } from "@/util"
import { useRoute } from "vue-router"
console.log(useRoute().params)

const [count, counter] = useCounter()
</script>