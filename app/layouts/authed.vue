<!-- Purely a wrapper for the timed API fetches, as they're only relevant for
    authed pages, and need to be done globally anyways -->
<template>
  <slot />
</template>

<script setup lang="ts">
import { API_FETCH_TIMER } from "~/constants";

const $appTime = useAppTimeStore();
const $appData = useAppDataStore();

const { data, refresh } = await useFetch("/api/data");
watchEffect(() => {
  if (data.value) {
    $appTime.lastApiTime = data.value.clientTime;
    $appData.data = data.value.data;
  }
});

let clockTimer: ReturnType<typeof setInterval>;
let fetchTimer: ReturnType<typeof setInterval>;

onMounted(() => {
  $appTime.lastApiTime = Date.now();

  clockTimer = setInterval(() => {
    $appTime.now = Date.now();
  }, 100);

  fetchTimer = setInterval(() => {
    refresh();
  }, API_FETCH_TIMER);
});

onUnmounted(() => {
  clearInterval(clockTimer);
  clearInterval(fetchTimer);
});
</script>
