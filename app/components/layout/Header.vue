<template>
  <div
    class="grid grid-cols-1 md:grid-cols-3 justify-items-center bg-blue-900 text-white px-24 py-4 shadow-md mb-4"
  >
    <div></div>
    <ProgressCircle
      :size="24"
      class="-translate-y-px"
      colorActive="#3D78FF"
      colorBack="#000000"
      colorDrop="#000000"
      :dropOpacity="1"
      :progress="clamp($appData.apiPct)"
      :gapWidth="0"
      :dropWidth="0"
    />
    <div></div>
  </div>
</template>

<script setup lang="ts">
const $appData = useAppDataStore();
</script>
