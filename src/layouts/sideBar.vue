<template>
  <div>
    <router-link to="/team1" active-class="active">团队管理1</router-link>
    <p></p>
    <router-link to="/team2" active-class="active">团队管理2</router-link>
    <p></p>
    <router-link to="/team3" active-class="active">团队管理3</router-link>
    <p></p>
    <router-link to="/demo1" active-class="active">demo1</router-link>
    <p></p>
    <router-link to="/demo2" active-class="active">demo2</router-link>
  </div>
</template>

<script setup>

</script>

<style scoped>
.active {
  color: red;
}
</style>