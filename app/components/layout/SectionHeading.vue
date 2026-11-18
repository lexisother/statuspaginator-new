<template>
  <div class="py-6 flex justify-center min-h-16 items-end">
    <div id="clip" class="w-full border-b-8 border-gray-500">
      <div class="flex items-center bg-yellow-300 text-black h-8 pt-0.5 pl-2">
        {{ title.toUpperCase() }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string;
}>();
</script>

<style lang="css" scoped>
#clip {
  clip-path: polygon(0px 4px, 4px 0px, 240px 0px, 260px 20px, 100% 20px, 100% 100%, 0px 100%);
}
</style>
