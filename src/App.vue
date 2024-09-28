<template>
  <div class="app main-layout">
    <NavBar />
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import NavBar from "@/components/NavBar/NavBar.vue";
</script>
<style scoped lang="scss">
.main-layout {
}
</style>
