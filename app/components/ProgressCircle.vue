<template>
  <div class="w-max h-max block" :class="attrs.class" :style="attrs.style">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1000 1000"
      :width="size"
      :height="size"
      overflow="visible"
    >
      <defs>
        <clipPath :id="`clipTop${uID}`">
          <rect v-if="showFullClip" x="-500" y="-500" width="2000" height="2000" />

          <rect x="-500" y="-500" :width="clipSize" height="2000" />

          <rect
            :x="500 + 2000 * ((gapWidth * 0.5) / size)"
            y="-500"
            :width="clipSize"
            height="2000"
          />

          <rect x="-500" y="500" width="2000" height="1000" />
        </clipPath>

        <clipPath :id="`clipGap${uID}`">
          <rect v-if="showFullClip" x="-500" y="-500" width="2000" height="2000" />

          <rect
            x="-500"
            y="-500"
            :width="clipSize"
            height="2000"
            :transform="`rotate(${360 * progress} 500 500)`"
          />

          <rect
            :x="500 + 2000 * ((gapWidth * 0.5) / size)"
            y="-500"
            :width="clipSize"
            height="2000"
            :transform="`rotate(${360 * progress} 500 500)`"
          />

          <rect
            x="-500"
            y="500"
            width="2000"
            height="1000"
            :transform="`rotate(${360 * progress} 500 500)`"
          />
        </clipPath>
      </defs>

      <template v-if="progress >= 0">
        <circle
          cx="50%"
          cy="50%"
          :r="radius"
          fill="none"
          :stroke="colorDrop"
          :stroke-width="dropWidth"
          :opacity="dropOpacity"
        />

        <g :clip-path="`url(#clipTop${uID})`">
          <g :clip-path="`url(#clipGap${uID})`">
            <circle
              cx="50%"
              cy="50%"
              :r="radius"
              fill="none"
              :stroke="colorBack"
              :stroke-width="strokeWidth"
              :opacity="backOpacity"
            />

            <circle
              cx="50%"
              cy="50%"
              :r="radius"
              fill="none"
              :stroke="colorLight"
              :stroke-width="strokeWidth"
              :opacity="lightOpacity"
            />

            <circle
              cx="50%"
              cy="50%"
              :r="radius"
              fill="none"
              :stroke="colorActive"
              :stroke-width="strokeWidth"
              :stroke-dasharray="`${progressAngle} ${circumference - progressAngle}`"
              :stroke-dashoffset="strokeOffset"
            />
          </g>
        </g>
      </template>
    </svg>
  </div>
</template>

<script setup lang="ts">
import { computed, useAttrs } from "vue";

defineOptions({
  inheritAttrs: false,
});

const props = withDefaults(
  defineProps<{
    size?: number;
    progress?: number;
    strokeWidth?: number;
    dropWidth?: number;
    gapWidth?: number;

    colorDrop?: string;
    colorBack?: string;
    colorLight?: string;
    colorActive?: string;

    backOpacity?: number;
    lightOpacity?: number;
    dropOpacity?: number;
  }>(),
  {
    size: 32,
    progress: -1,

    colorDrop: "#000000",
    colorBack: "#141313",
    colorLight: "#EBEAE5",
    colorActive: "#FFE710",

    backOpacity: 0.24,
    lightOpacity: 0.24,
    dropOpacity: 0.32,
  },
);

const attrs = useAttrs();

const uID = getUniqueID();

const radius = 500;
const circumference = 2 * Math.PI * radius;
const strokeOffset = (1 / 4) * circumference;

const strokeWidth = computed(() => props.strokeWidth ?? scaleValue(96, 32, props.size));
const dropWidth = computed(() => props.dropWidth ?? strokeWidth.value * 2);
const gapWidth = computed(() => props.gapWidth ?? (dropWidth.value - strokeWidth.value) * 0.0256);

const progressAngle = computed(() => props.progress * circumference);

const clipSize = computed(() => 1000 - 2000 * ((gapWidth.value * 0.5) / props.size));
const showFullClip = computed(() => props.progress <= 0 || props.progress >= 1);
</script>
