<template>
  <h1 class="text-red-500">authed</h1>

  <SiteGrid :sites="$appData.data.sites" />

  <button @click="logout">logout</button>
</template>

<script setup lang="ts">
definePageMeta({ layout: "authed" });

const $appData = useAppDataStore();
const { fetchSession } = useUserSession();
const { execute: signOut } = useSignOut();

debug("qhar");

async function logout() {
  await signOut({
    async onSuccess() {
      await fetchSession({ force: true });
      await navigateTo("/");
    },
  });
}
</script>
