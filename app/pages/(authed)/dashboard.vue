<template>
  <h1>authed</h1>
</template>

<script setup lang="ts">
const { loggedIn } = useUserSession();
if (!loggedIn.value) navigateTo("/login");

console.log("qhar");
</script>
