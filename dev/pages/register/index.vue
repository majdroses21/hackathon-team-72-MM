<template>
  <div class="overlay">
    <v-container class="flex min-h-dvh items-center justify-center Creat">
      <div class="form">
        <div class="text-center">
          <h1 class="text-3xl font-semibold lg:text-4xl">Create account</h1>
          <p class="mt-2 text-lg text-muted-foreground">
            Start teaching and learning science from experts in the Arab world!
          </p>
        </div>
        <v-form
          class="mt-10"
          @submit.prevent="registerHandler"
          ref="regFormRef"
        >
          <fieldset class="grid gap-5">
            <v-text-field
              :rules="[rules.email]"
              required
              v-model="email"
              label="البريد الإلكتروني"
            ></v-text-field>
            <v-row>
              <v-col cols="6">
                <v-text-field
                  :rules="[rules.required]"
                  required
                  v-model="firstName"
                  label="الاسم الأول"
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  :rules="[rules.required]"
                  required
                  v-model="lastName"
                  label="الاسم الأخير"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-text-field
              class="pass"
              label="الرقم السري *"
              v-model="password"
              :append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
              :type="showPassword ? 'text' : 'password'"
              @click:append="toggleShowPassword"
              type="password"
              :rules="[rules.required, rules.minLength]"
              required
            ></v-text-field>
            <br />
            <label for="birthday">Birthday:</label>
            <input
              v-model="birthday"
              type="date"
              id="birthday"
              name="birthday"
            /><br /><br />

            <div class="pl-3 pr-3 d-flex flex-column ga-2">
              <v-btn type="submit" class="w-fill">Create account </v-btn>
              <div class="or">or</div>
              <v-btn class="w-full" outlined>
                <v-icon>mdi-google</v-icon> Sign in with Google
              </v-btn>
            </div>
          </fieldset>
        </v-form>
        <p class="mt-10 text-center text-sm">
          Already have an account?
          <NuxtLink
            class="text-sm font-semibold text-primary forgetpass"
            to="Sign-in"
            >Sign in here</NuxtLink
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
  margin-bottom: 150px;
}
.form {
  width: 40%;
  padding: 20px 0;
  margin: 70px auto;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  margin-top: 31px;
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

.Creat {
  margin-top: 64px;
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
definePageMeta({
  middleware: "guest",
});

import { ref } from "vue";
const nuxtApp = useNuxtApp();
const email = ref("");
const firstName = ref("");
const lastName = ref("");
const password = ref("");
const birthday = ref("");
const showPassword = ref(false);
let registerErrors = ref(null);
let registerLoading = ref(false);
let regFormRef = ref(null);
let isLogged = useState("loggedIn", () => false);

const registerHandler = async () => {
  console.log("regFormRef = ", regFormRef);
  const { valid } = await regFormRef.value.validate();
  if (!valid) return;
  registerLoading = true;
  try {
    // const registerRes = await $axios.post('auth/register', {
    //   email,
    //   password
    // })

    // redirect to dashboard

    // Request end and success
    isLogged.value = true;

    navigateTo("/dashboard");

    useSonner.success("Account successfully created");
  } catch (error) {
    // Request end and failed
    // registerErrors = error.response.message
    useSonner.error("Pet updated successfully");
  } finally {
    // Request end
    registerLoading = false;
  }
};

const toggleShowPassword = () => {
  showPassword.value = !showPassword.value;
};

const rules = {
  required: (value) => !!value || "This field is required",
  minLength: (value) =>
    (value && value.length >= 8) || "Password must be at least 8 characters",
  email: (value) => /.+@.+\..+/.test(value) || "Invalid email address",
};

const submitForm = () => {
  if ($v.name.$invalid || $v.email.$invalid || $v.password.$invalid) {
    // Handle form validation errors
    return;
  }
  // Submit form logic
};
</script>
