<template>
  <div class="d-flex __column">
    <div class="website-block__title-wrapper d-flex">
      <h3 v-if="title" class="website-block__title capitalize">
        {{ title }}
      </h3>
      <span v-if="toggleable" @click="showBlock = !showBlock">{{
        showBlock ? "hide" : "show"
      }}</span>
    </div>
    <div v-show="showBlock" class="website-block__wrapper">
      <Card v-for="site in sites" class="website-block" :key="site.name" @click="onClick(site.url)">
        <template #header>
          <Image class="website-block__image" :src="getStaticImageUrl(site.image)" />
        </template>
        <template #footer>
          <p class="mt-2 capitalize">{{ site.name }}</p>
        </template>
      </Card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import type { IWebsite } from "@/const";

interface IWebsitesBlockProps {
  title?: string;
  sites: IWebsite[];
  toggleable: boolean;
  collapsed: boolean;
}

const { sites, title, toggleable = false, collapsed = false } = defineProps<IWebsitesBlockProps>();

const showBlock = ref(!(toggleable && collapsed));

const getStaticImageUrl = (fileName?: string) => {
  if (!fileName) return "./default.svg";
  if (fileName.split(".").length > 1) return `./${fileName}`;
  return `./${fileName}.png`;
};

const onClick = (url: string) => {
  window.open(url);
};
</script>

<style scoped lang="scss">
.website-block {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  border-radius: 8px;
  width: 100px;
  padding: 3px;

  &__wrapper {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }
  &__title-wrapper {
    align-items: center;
    justify-content: space-between;
  }
  &__image {
    display: flex;
  }
}
:deep(.p-card-body) {
  padding: 10px;
}
</style>
