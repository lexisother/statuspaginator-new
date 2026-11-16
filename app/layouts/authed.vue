<!-- Purely a wrapper for the timed API fetches, as they're only relevant for
    authed pages, and need to be done globally anyways -->
<template>
  <slot />
</template>

<script setup lang="ts">
import { API_FETCH_TIMER } from "~/constants";

const appData = useAppDataStore();

let timer: ReturnType<typeof setInterval>;

onMounted(() => {
  setInterval(async () => {
    debug("fetching data");
    const data = await (await fetch("/api/data")).json();
    appData.lastApiTime = data.clientTime;
  }, API_FETCH_TIMER);

  timer = setInterval(() => {
    debug("updating time");
    appData.now = Date.now();
  }, 100);
});

onUnmounted(() => {
  clearInterval(timer);
});
</script>
