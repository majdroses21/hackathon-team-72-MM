<style scoped lang="scss">
.overlay {
  background-image: url(../../assets/images/workplace-with-blue-office-supplies_23-2147843328.jpg);
  background-size: cover;
  background-position: 50%;
  height: 100vh;
  width: 100%;
  padding-top: 64px;
  margin-bottom: 150px;
}

.form {
  width: 40%;
  padding: 20px 0;
  margin: 70px auto;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}

.pass {
  width: 100% !important;
}

.or {
  text-align: center;
  position: relative;
}

.or::after {
  content: "";
  height: 1px;
  color: black;
  background-color: black;
  width: 47%;
  position: absolute;
  right: -8px;
  top: 12px;
}

.or::before {
  content: "";
  height: 1px;
  color: black;
  background-color: black;
  width: 47%;
  position: absolute;
  left: -8px;
  top: 12px;
}

.forgetpass {
  color: rgb(2 121 255) !important;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}

.login-alert {
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 99;
}

@media (max-width: 767px) {
  .form {
    width: 100%;
  }
}
</style>

<template>

  <Head>
    <title>Mx| &nbsp; تسجيل الدخول</title>
  </Head>
  <div class="overlay">
    <v-container class="flex min-h-dvh items-center justify-center register">
      <div class="form">
        <div class="text-center">
          <h1 class="text-3xl font-semibold lg:text-4xl">Sign in</h1>
          <p class="mt-2 text-lg text-muted-foreground">
            Welcom back! Enter your details to get started.
          </p>
        </div>
        <v-form @submit.prevent="submitForm" class="mt-10">
          <fieldset class="grid gap-5">
            <v-text-field label="البريد الإلكتروني *" placeholder="Mohazem@example.com" type="email"
              :rules="[rules.required, rules.email]" v-model="email" required></v-text-field>

            <v-text-field class="pass" label="الرقم السري *" :append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
              :type="showPassword ? 'text' : 'password'" @click:append="toggleShowPassword" v-model="password"
              required></v-text-field>
            <!-- :rules="[rules.required, rules.minLength]" -->
            <div class="pl-3 pr-3 d-flex flex-column ga-2">
              <p>
                <NuxtLink class="text-sm font-semibold text-primary forgetpass" to="/forgot-password">forgot passwor?
                </NuxtLink>
              </p>
              <v-btn type="submit" class="w-fill"> Sign in </v-btn>
              <div class="or">or</div>
              <!-- TODO : Get user info by Google -->
              <v-btn class="p-5 w-full" outlined>
                <v-icon>mdi-google</v-icon>
                &nbsp; Sign in with Google
              </v-btn>
            </div>
          </fieldset>
        </v-form>
        <p class="mt-10 text-center text-sm">
          Don't have an account?
          <NuxtLink class="text-sm font-semibold text-primary forgetpass" to="/register">Create one here?</NuxtLink>
        </p>
      </div>
    </v-container>
  </div>
  <!-- TODO: Fix Aletrs With Api Call -->

  <!-- Success Alert -->
  <!-- title="Loged in Succesfuly" -->
  <v-alert :text="loginMessege" type="success" closable v-model="alertStatus" class="login-alert"></v-alert>
  <!-- Error Alert -->
  <v-alert v-if="(loginStatus = false)" :text="loginMessege" type="error" closable class="login-alert"></v-alert>
  <!-- v-model="alertStatus" -->
</template>

<script setup>

import useDataApi from "~/composables/useDataApi";
// Data
const email = ref("mjd@gmail.com");
const password = ref("123123");
let alertStatus = false;

// This will Show and hide the pasword
const showPassword = ref(false);
const toggleShowPassword = () => {
  showPassword.value = !showPassword.value;
};

// This ruls for validation for required filds in the Form
const rules = {
  required: (value) => !!value || "This field is required",
  minLength: (value) =>
    (value && value.length >= 8) || "Password must be at least 8 characters",
  email: (value) => /.+@.+\..+/.test(value) || "Invalid email address",
};

// Submit form login
const submitForm = async () => {
  try {
    const loginRes = await useDataApi("/api/login", {
      method: 'POST',
      query: {
        email,
        password,
      },
    });
    console.log(loginRes.data.value);
    let token = loginRes.data.value.access_token;
    let loginMessege = loginRes.data.value.msg;
    let loginStatus = loginRes.data.value.status;

    // login success
    if (loginStatus) {
      useCookie("token").value = token
      useState("loggedIn", () => true);
      alertStatus = true;
      console.log();
      useSonner.success(loginMessege);
      setTimeout(() => {
        navigateTo("/");
      }, 1000);
    }
  } catch (error) {
    useSonner.error("Error: ", error.response.message);
  }
};
</script>
