<template>
  <base-page class="home">
    <main class="home__main-wrapper d-flex">
      <div class="d-flex __column">
        <websites-block class="mb-4" title="fun sites" toggleable :sites="generalWebsites" />
        <websites-block class="mb-4" title="work sites" :sites="workWebsites" />
      </div>
    </main>
    <aside class="home__aside">
      <div class="home__aside-container">
        <fact-block />
      </div>
    </aside>
  </base-page>
</template>

<script setup lang="ts">
import { workWebsites, generalWebsites } from "@/config";
import FactBlock from "@/components/FactBlock/FactBlock.vue";
import WebsitesBlock from "@/components/WebsitesBlock/WebsitesBlock.vue";
import BasePage from "@/components/BasePage/BasePage.vue";
</script>
<style scoped lang="scss">
.home {
  justify-content: space-between;
  align-items: center;
  @include tablet-up() {
    flex-direction: row !important;
    align-items: flex-start;
  }
  &__main-wrapper {
    flex-wrap: wrap;
    gap: 25px;
    flex-grow: 1;
    flex-direction: column;
  }
  &__aside {
    max-width: 100%;
    @include tablet-up() {
      width: 25%;
      margin-left: 25px;
      flex-shrink: 0;
    }
    &-container {
      width: 100%;
    }
  }
}
</style>
