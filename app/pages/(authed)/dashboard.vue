<template>
  <h1 class="text-red-500">authed</h1>
</template>

<script setup lang="ts">
const { loggedIn } = useUserSession();
if (!loggedIn.value) navigateTo("/login");

debug("qhar");
</script>
