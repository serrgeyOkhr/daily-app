<template>
  <Panel class="fact-block" header="Random useless fact" toggleable>
    <Skeleton v-if="loading" />
    <div v-else>{{ randomFact }}</div>
  </Panel>
</template>

<script setup lang="ts">
import { ref } from "vue";
import useAPI from "@/hooks/useAPI";
const RANDOM_FACT_URL = "https://uselessfacts.jsph.pl/api/v2/facts/random";

const { API, loading } = useAPI();

const randomFact = ref("");
const getRandomFact = async () => {
  loading.value = true;
  await API.get(RANDOM_FACT_URL);
  if (API.OK) {
    randomFact.value = API.result.value?.text;
  }
};

getRandomFact();
</script>

<style scoped lang="scss">
.fact-block {
  width: 300px;
}
</style>