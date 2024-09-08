<template>
  <div class="website-block__wrapper">
    <div v-for="site in sites" class="website-block" :key="site.name" @click="onClick(site.url)">
      <Image class="website-block__image" :src="getStaticImage(site.image)" />
      <p>{{ site.name }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  sites: {
    name: string;
    url: string;
    image?: string;
  }[];
}>();

const getStaticImage = (fileName?: string) => {
  // todo: return default svg
  return `/src/assets/${fileName}.png`;
}
const onClick = (url: string) => {
  window.open(url);
}

</script>

<style scoped lang="scss">
.website-block {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid red;
  border-radius: 8px;
  padding: 3px;

  &__wrapper {
    object-fit: contain;
    display: flex;
    gap: 10px;
  }
  &__image {
    display: flex;
  }
}
</style>
