<template>
  <div class="min-h-screen bg-gray-800 text-white">
    <LayoutHeader :authed="loggedIn" />
    <div class="px-12 flex justify-center">
      <div class="w-full max-w-xl sm:max-w-2xl lg:max-w-4xl xl:max-w-full">
        <NuxtLayout>
          <NuxtPage />
        </NuxtLayout>
      </div>
    </div>
  </div>
  <NuxtRouteAnnouncer />
</template>

<script setup lang="ts">
const { loggedIn } = useUserSession();
</script>
