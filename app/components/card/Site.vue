<template>
  <div
    v-if="site.data"
    id="card"
    class="flex flex-col bg-black border-inactive-gray border-2 cursor-pointer"
  >
    <template v-if="!site.data">
      <div class="w-full h-full relative overflow-hidden grid [grid-area:1/1] min-w-0 min-h-0">
        <div class="bg-gray-900 [grid-area:1/1] filter-[brightness(175%)]"></div>
        <div
          class="[grid-area:1/1] opacity-85 mix-blend-soft-light"
          :style="`background-image: url(${static1}); mix-blend-mode: soft-light;`"
        ></div>
        <div
          class="[grid-area:1/1] opacity-85 mix-blend-soft-light"
          :style="`background-image: url(${static2}); mix-blend-mode: overlay;`"
        ></div>
        <div
          class="[grid-area:1/1] opacity-65 mix-blend-soft-light"
          :style="`background-image: url(${static1}); mix-blend-mode: overlay;`"
        ></div>
        <div class="relative left-1/2 top-1/2">text</div>
      </div>
    </template>
    <template v-else>
      <!-- card header -->
      <CardPartTop :site="site" />
      <!-- <div class="flex flex-row items-center gap-1 pl-1 bg-[#3C3C3Caa] text-white font-medium">
      <Icon name="material-symbols:check" />
      <p>UP TO DATE</p>
    </div> -->
      <div class="h-full">
        <!-- card body -->
      </div>
      <div class="h-full">
        <!-- card meta -->
      </div>
      <div class="border-t-2 border-dark-gray">
        <!-- card footer, CardPartVersions to replace the mess under it -->
        <!-- <CardPartVersions /> -->
        <div v-if="false" class="flex flex-row justify-between mx-2 my-1">
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
    </template>
  </div>
</template>

<script setup lang="ts">
import static1 from "~/assets/fx/static1.gif";
import static2 from "~/assets/fx/static2.gif";

const props = defineProps<{
  site: Site;
}>();
</script>

<style scoped>
#card {
  width: 320px;
  height: 270px;
}
</style>
