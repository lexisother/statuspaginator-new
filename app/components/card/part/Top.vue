<template>
  <div class="flex flex-row items-center gap-1 pl-1 bg-[#3C3C3Caa] text-white font-medium">
    <template v-if="site.data!.craft.updates.total > 0">
      <Icon name="material-symbols:update" />
      <p>UPDATE AVAILABLE</p>
    </template>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  site: Site;
}>();
</script>
