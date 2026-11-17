<!-- Purely a wrapper for the timed API fetches, as they're only relevant for
    authed pages, and need to be done globally anyways -->
<template>
  <slot />
</template>

<script setup lang="ts">
import { API_FETCH_TIMER } from "~/constants";

const appData = useAppDataStore();

const { data, refresh } = await useFetch("/api/data");
watchEffect(() => {
  if (data.value) {
    appData.lastApiTime = data.value.clientTime;
  }
});

let clockTimer: ReturnType<typeof setInterval>;
let fetchTimer: ReturnType<typeof setInterval>;

onMounted(() => {
  appData.lastApiTime = Date.now();

  clockTimer = setInterval(() => {
    appData.now = Date.now();
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
