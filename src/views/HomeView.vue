<template>
  <div class="home">
    <main>
      <websites-block
        class="mb-4"
        title="fun sites"
        toggleable
        collapsed
        :sites="generalWebsites"
      />
      <websites-block class="mb-4" title="work sites" :sites="workWebsites" />
    </main>
    <aside class="home__aside">
      <div class="d-flex">
        <fact-block />
      </div>
    </aside>
  </div>
</template>

<script setup lang="ts">
import FactBlock from "@/components/FactBlock/FactBlock.vue";
import WebsitesBlock from "@/components/WebsitesBlock/WebsitesBlock.vue";
import { workWebsites, generalWebsites } from "@/config";
</script>
<style scoped lang="scss">
.home {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  padding: var(--sp-5);
  @include tablet-up() {
    flex-direction: row;
    align-items: flex-start;
    width: 800px;
    max-width: 100%;
  }
  @include desktop-up() {
    width: 1440px;
    max-width: 100%;
  }

  &__aside {
    max-width: 100%;
    @include tablet-up() {
      max-width: 25%;
    }
  }
}
</style>
