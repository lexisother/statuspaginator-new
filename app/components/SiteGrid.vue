<template>
  <div v-for="(sites, group) in groups">
    <LayoutSectionHeading :title="group" />
    <div
      class="grid gap-4 grid-cols-1 justify-items-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    >
      <CardSite v-for="site in sites" :site="site" />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  sites: Site[];
}>();

const groups = computed(() => mapToGroups(props.sites, (s) => ({ [s.type]: s })));
</script>
