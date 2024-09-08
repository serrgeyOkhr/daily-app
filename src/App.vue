<template>
  <div class="app main-layout">
    <ToggleButton v-model="checked" class="w-24" onLabel="Dark" offLabel="Light" />
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

const checked = ref(true);

watch(
  checked,
  (checked: boolean) => {
    document.documentElement.classList[checked ? "add" : "remove"]("dark-mode");
  },
  { immediate: true },
);
</script>
<style scoped lang="scss">
.main-layout {
}
</style>
