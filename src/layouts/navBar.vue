<template>
  <div>
    <router-link :to="breadCrumbItem.realPath || breadCrumbItem.path" v-for="breadCrumbItem in breadCrumbList"
      :key="breadCrumbItem.path">
      {{ breadCrumbItem.meta.title }} /
    </router-link>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router"
import { watch, ref } from 'vue'
const { currentRoute } = useRouter();

const breadCrumbList = ref([])

const getBreadCrumb = () => {
  let params = currentRoute.value.params
  breadCrumbList.value = currentRoute.value.matched
    .filter(item => item.meta && item.meta.title)
  breadCrumbList.value.forEach(item => {
    if (item.meta.inferRealPath) {
      item.realPath = item.path
        .split('/')
        .map(item => {
          if (item.startsWith(':')) return params[item.slice('1')]
          else return item
        })
        .join('/')
    }
  });
};
getBreadCrumb()
watch(
  () => currentRoute.value.matched,
  () => {
    getBreadCrumb()
  },
  {
    immediate: true
  }
);
</script>