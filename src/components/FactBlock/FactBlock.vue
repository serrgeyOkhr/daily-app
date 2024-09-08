<template>
  <Panel class="fact-block" header="Random useless fact" toggleable collapsed>
    <Skeleton v-if="loading" />
    <div v-else>{{ randomFact }}</div>
  </Panel>
</template>

<script setup lang="ts">
import { ref } from "vue";
import useAPI from "@/hooks/useAPI";
import { RANDOM_FACT_URL } from "@/config";

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
  max-width: 300px;
}
</style>
