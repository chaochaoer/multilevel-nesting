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
          <!-- <transition name="fade-transform" mode='out-in'> -->
            <keep-alive>
              <component :is="Component" />
            </keep-alive>
          <!-- </transition> -->
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

/* 进入动画 */
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all 0.3s linear;
}

.fade-transform-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}

.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>

