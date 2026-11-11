<template>
  <div v-if="error">
    <p>{{ error }}</p>
  </div>
  <div>
    <input type="text" v-model="email" />
    <input type="text" v-model="password" />

    <button @click="register">sign up</button>
  </div>
</template>

<script setup lang="ts">
const signup = useSignUp("email");
const { loggedIn } = useUserSession();

if (loggedIn.value) navigateTo("/dashboard");

const email = ref("");
const password = ref("");
const error = ref("");

const register = async () => {
  if (!email.value || !password.value) {
    error.value = "no email or password";
    return;
  }
  error.value = "";

  await signup.execute(
    { name: "X", email: email.value, password: password.value },
    {
      onSuccess: () => {
        console.log("wack ass");
        navigateTo("/dashboard");
      },
    },
  );
};
</script>
