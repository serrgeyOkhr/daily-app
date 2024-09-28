<template>
  <div class="card">
    <Menubar :model="items">
      <template #item="{ item, props, hasSubmenu }">
        <router-link
          v-if="item.route"
          v-slot="{ href, navigate, isExactActive }"
          :to="item.route"
          custom
        >
          <a
            :href="href"
            v-bind="props.action"
            aria-hidden="false"
            :class="{ '__active-link': isExactActive }"
            @click="navigate"
          >
            <span :class="item.icon" />
            <span class="ml-2">{{ item.label }}</span>
          </a>
        </router-link>
        <a v-else :href="item.url" :target="item.target" v-bind="props.action">
          <span :class="item.icon" />
          <span class="ml-2">{{ item.label }}</span>
          <span v-if="hasSubmenu" class="pi pi-fw pi-angle-down ml-2" />
        </a>
      </template>
      <template #end>
        <ToggleButton v-model="checked" class="w-24" onLabel="Dark" offLabel="Light" />
      </template>
    </Menubar>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import type { MenuItem } from "primevue/menuitem";

const checked = ref(true);

watch(
  checked,
  (checked: boolean) => {
    document.documentElement.classList[checked ? "add" : "remove"]("dark-mode");
  },
  { immediate: true },
);

const items = ref<MenuItem[]>([
  {
    label: "Home",
    icon: "pi pi-home",
    route: { name: "home" },
  },
  {
    label: "Cosmos",
    icon: "pi pi-star",
    route: { name: "cosmos" },

  },
]);
</script>

<style scoped lang="scss">
.card {
  margin: 16px 16px 0 16px;

  .__active-link {
    background: var(--p-menubar-item-focus-background);
    border-radius: var(--p-menubar-base-item-border-radius);
  }
}
</style>
