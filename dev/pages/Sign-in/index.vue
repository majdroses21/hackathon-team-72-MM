<template>
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
          <v-text-field
            label="البريد الإلكتروني *"
            placeholder="Mohazem@example.com"
            type="email"
            :rules="[rules.required, rules.email]"
            required
          ></v-text-field>
          <v-text-field
            class="pass"
            label="الرقم السري *"
            :append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
            :type="showPassword ? 'text' : 'password'"
            @click:append="toggleShowPassword"
            type="password"
            :rules="[rules.required, rules.minLength]"
            required
          ></v-text-field>
          <div class="pl-3 pr-3 d-flex flex-column ga-2">
            <p>
              <NuxtLink
                class="text-sm font-semibold text-primary forgetpass"
                to="/forgot-password"
                >forgot passwor?</NuxtLink
              >
            </p>
            <v-btn type="submit" class="w-fill"> Sign in </v-btn>
            <div class="or">or</div>
            <v-btn  class="p-5 w-full" outlined>
              <v-icon>mdi-google</v-icon> Sign in with
              Google
            </v-btn>
          </div>
        </fieldset>
      </v-form>
      <p class="mt-10 text-center text-sm">
        Don't have an account?
        <NuxtLink
          class="text-sm font-semibold text-primary forgetpass"
          to="/register"
          >Create one here?</NuxtLink
        >
      </p>
    </div>
  </v-container>
</div>
</template>

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

@media (max-width: 767px) {
  .form {
    width: 100%;
  }
}
</style>

<script setup>
import { ref } from "vue";
import api from "~/composables/api"
const name = ref('');
const email = ref('');
const password = ref("");
const showPassword = ref(false);
const loggedIn = useState('loggedIn', ()=>false)
const token = useState('token', ()=>null)

const toggleShowPassword = () => {
  showPassword.value = !showPassword.value;
};

const rules = {
  required: (value) => !!value || 'This field is required',
  minLength: (value) => (value && value.length >= 8) || 'Password must be at least 8 characters',
  email: (value) => /.+@.+\..+/.test(value) || 'Invalid email address'
};

const submitForm = async() => {

  // Submit form logic
  try {
    const loginRes = await api('/api/login', {
      query: {
        email,
        password
      }
    })
    console.log('loginRes = ', loginRes)
    if(loginRes.status){
      // login success
      loggedIn.value = true
      token.value = loginRes.access_token

      navigateTo("/dashboard");
    }
    // throw 'UNEXPRECTED ERROR'
  } catch (error) {
    useSonner.error("Error: ", error.response.message);
  }
};
</script>
