<template>
  <div class="base-page">
    <slot />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.base-page {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  padding: var(--sp-5);
  @include tablet-up() {
    width: 800px;
    max-width: 100%;
  }
  @include desktop-up() {
    width: 1440px;
    max-width: 100%;
  }
}
</style>
