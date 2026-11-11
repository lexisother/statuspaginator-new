<template>
  <div v-if="error">
    <p>{{ error }}</p>
  </div>
  <div>
    <input type="text" v-model="email" />
    <input type="text" v-model="password" />

    <button @click="login">sign in</button>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ auth: "guest" });
const signInEmail = useSignIn("email");

const email = ref("");
const password = ref("");
const error = ref("");

async function login() {
  if (!email.value || !password.value) {
    error.value = "no email or password";
    return;
  }
  error.value = "";

  await signInEmail.execute(
    { email: email.value, password: password.value },
    {
      onSuccess: () => {
        navigateTo("/dashboard");
      },
    },
  );
}
</script>
