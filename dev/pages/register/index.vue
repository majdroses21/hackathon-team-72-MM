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

<template>

  <Head>
    <title>
      Mx| &nbsp; إنشاء حساب
    </title>
  </Head>
  <div class="overlay">
    <v-container class="flex min-h-dvh items-center justify-center Creat">
      <div class="form">
        <div class="text-center">
          <h1 class="text-3xl font-semibold lg:text-4xl">Create account</h1>
          <p class="mt-2 text-lg text-muted-foreground">
            Start teaching and learning science from experts in the Arab world!
            {{ foo }}
          </p>
        </div>
        <v-form class="mt-10" @submit.prevent="registerHandler" ref="regFormRef">
          <fieldset class="grid gap-5">
            <v-text-field :looding="true" :rules="[rules.email]" required v-model="email"
              label="البريد الإلكتروني"></v-text-field>
            <v-row>
              <v-col cols="6">
                <v-text-field :rules="[rules.required]" required v-model="firstName" label="الاسم الأول"></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field :rules="[rules.required]" required v-model="lastName" label="الاسم الأخير"></v-text-field>
              </v-col>
            </v-row>
            <v-text-field class="pass" label="الرقم السري *" v-model="password"
              :append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'" :type="showPassword ? 'text' : 'password'"
              @click:append="toggleShowPassword" :rules="[rules.required, rules.minLength]" required></v-text-field>
            <v-text-field class="pass" label="إعادة تأكيد الرقم السري*" v-model="password_conf"
              :append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'" :type="showPassword ? 'text' : 'password'"
              @click:append="toggleShowPassword" :rules="[rules.required, rules.minLength]" required></v-text-field>
            <br />
            <label for="birthday">Birthday:</label>
            <input v-model="birthday" type="date" id="birthday" name="birthday" /><br /><br />

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
          <NuxtLink class="text-sm font-semibold text-primary forgetpass" to="Sign-in">Sign in here</NuxtLink>
        </p>
      </div>
    </v-container>
  </div>
</template>

<script setup>
import useDataApi from "~/composables/useDataApi";
//Data
const email = ref("");
const firstName = ref("");
const lastName = ref("");
const password = ref("");
const password_conf = ref("")
const birthday = ref("");

const registerHandler = async () => {
  try {
    const registerRes = await useDataApi('/api/rigester', {
      method: 'POST',
      body: {
        name: firstName.value + ' ' + lastName.value,
        email: email.value,
        password: password.value,
        password_confirmation: password_conf.value
      }
    });
    console.log(registerRes.data.value.user);
    console.log('registerRes = ', registerRes);

    //Second log in the user created 
    const loginRes = await useDataApi("/api/login", {
      query: {
        email,
        password,
      },
    });

    let token = loginRes.data.value.access_token;
    useCookie("token").value = token;
    useSonner.success("You has create your accout successffly and Logged in Wellcome");
    setTimeout(() => {
      navigateTo("/");
    }, 1500);

    
  } catch (error) {
    console.error('error = ', error)
    useSonner.error(error.message);
  }
};


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
</script>