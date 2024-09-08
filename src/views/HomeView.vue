<template>
  <main>
    <websites-block :sites="generalSites" />
    <fact-block />
  </main>
</template>

<script setup lang="ts">
import FactBlock from "@/components/FactBlock/FactBlock.vue";
import WebsitesBlock from "@/components/WebsitesBlock/WebsitesBlock.vue";

const generalSites = [
  {
    name: "YouTube",
    url: "https://www.youtube.com/",
    image: "youtube",
  },
  {
    name: "Movies",
    url: "https://movies2watch.tv/",
    image: "movies2watch",
  }
]


</script>
