<template>
  <Skeleton v-if="loading" width="100%" height="150px" />
  <template v-else-if="imageResponse">
    <div class="astro-image__image-wrapper">
      <Image class="astro-image__image" :src="imageResponse.url" />
    </div>
    <div v-if="imageResponse.explanation" class="astro-image__info-block">
      <h3>{{ imageResponse.title }}</h3>
      <p>{{ imageResponse.explanation }}</p>
    </div>
    <div>
      <h5>Additional info</h5>
      <div class="fz-12">
        Image date: <span>{{ imageResponse.date }}</span>
      </div>
      <div v-if="imageResponse.hdurl" class="astro-image__link fz-12">
        HD version: <a :href="imageResponse.hdurl" target="_blank">full image</a>
      </div>
      <div v-if="imageResponse.concept_tags" class="fz-12">
        Tags: <span>{{ imageResponse.concept_tags }}</span>
      </div>
    </div>
  </template>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import useAPI from "@/hooks/useAPI";
import useLocalStorage from "@/hooks/useLocalStorage";
import { isSameDay } from "@/helpers/DateTime";
import { NASA_IMAGE_URL } from "@/config";

interface INasaImageData {
  resource: {
    image_set: string;
  };
  concept_tags: string;
  date: string;
  title: string;
  url: string;
  hdurl: string;
  explanation: string;
  concepts: Record<number, string>;
}

const { API, loading } = useAPI();
const { getItem, setItem } = useLocalStorage();

const localImage = ref<INasaImageData>({});
const imageResponse = ref<INasaImageData>({});

const isOldImage = computed(() => {
  if (!localImage.value || !localImage.value.date) return true;
  return !isSameDay(new Date(localImage.value.date), new Date());
});

const getData = async () => {
  try {
    loading.value = true;
    localImage.value = getItem("cosmos_item");
    if (!localImage.value || isOldImage.value) {
      await API.get(NASA_IMAGE_URL);
      imageResponse.value = API.result.value;
      setItem("cosmos_item", imageResponse.value);
    } else {
      imageResponse.value = localImage.value;
    }
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  getData();
});
</script>

<style scoped lang="scss">
.astro-image {
  &__image-wrapper {
    margin: 0 auto;
    position: relative;
  }
  &__link a {
    font-weight: 300;
    color: gray;
  }
}
</style>
