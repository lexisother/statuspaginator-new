<template>
  <div
    v-if="site.data"
    id="card"
    class="flex flex-col bg-black border-inactive-gray border-2 cursor-pointer"
  >
    <!-- card header -->
    <div class="flex flex-row items-center gap-1 pl-1 bg-[#3C3C3Caa] text-white font-medium">
      <Icon name="material-symbols:check" />
      <p>UP TO DATE</p>
    </div>
    <div class="h-full">
      <!-- card body -->
    </div>
    <div class="h-full">
      <!-- card meta -->
    </div>
    <div class="border-t-2 border-dark-gray">
      <!-- card footer, CardPartVersions to replace the mess under it -->
      <!-- <CardPartVersions /> -->
      <div class="flex flex-row justify-between mx-2 my-1">
        <div class="flex flex-row items-center gap-1">
          <Icon name="simple-icons:craftcms" />
          <span>{{ site.data!.craft.version }}</span>
        </div>

        <div class="text-gray-700">|</div>

        <div class="flex flex-row items-center gap-1">
          <Icon name="simple-icons:php" />
          <span>{{ site.data!.php }}</span>
        </div>

        <!-- <div class="text-gray-700">|</div> -->

        <!-- <div class="flex flex-row items-center gap-1">
          <Icon name="simple-icons:nodedotjs" />
          <span>v26.0.0</span>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  site: Site;
}>();
</script>

<style scoped>
#card {
  width: 320px;
  height: 270px;
}
</style>
