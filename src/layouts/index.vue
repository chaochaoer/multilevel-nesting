<template>
  <div class="container">
    <div style="margin-left: 150px;">
      <NavBar />
    </div>
    <div style="display:flex;">
      <div style="width: 100px;">
        <SideBar />
      </div>
      <div style="width: 300px;margin-left: 50px;">
        <router-view v-slot="{ Component }">
          <keep-alive :include="['teamIndex']">
            <component :is="Component" />
          </keep-alive>
        </router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'layouts-index',
}
</script>
<script setup>
import NavBar from "./navBar.vue"
import SideBar from "./sideBar.vue"
</script>

<style>
.container {
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
  width: 500px;
  margin: 0 auto;
  margin-top: 100px;
}
</style>

