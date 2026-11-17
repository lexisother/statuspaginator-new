<template>
  <div class="min-h-screen">
    <LayoutHeader :authed="loggedIn" />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
  <NuxtRouteAnnouncer />
</template>

<script setup lang="ts">
const { loggedIn } = useUserSession();
</script>
