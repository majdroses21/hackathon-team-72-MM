<template>
  <div class="overlay">
    <v-container class="flex min-h-dvh items-center justify-center register">
      <div class="form">
        <div class="text-center">
          <h1 class="text-3xl font-semibold lg:text-4xl">Forgot password</h1>
          <p class="mt-2 text-lg text-muted-foreground">
            Let us help you sign in your account
          </p>
        </div>
        <form class="mt-10">
          <fieldset class="grid gap-5">
            <v-text-field
              label="البريد الإلكتروني *"
              placeholder="Mohazem@example.com"
              type="email"
            ></v-text-field>
            <div class="pl-3 pr-3 d-flex flex-column ga-2">
              <v-btn type="submit" class="w-fill"> Send instructions </v-btn>
              <div class="or">or</div>
              <v-btn class="w-full" outlined>
                <nuxt-link class="underline" to="Sign-in"
                  >Go to sign in</nuxt-link
                >
              </v-btn>
            </div>
          </fieldset>
        </form>
        <p class="mt-10 text-center text-sm">
          Already have an account?
          <NuxtLink
            class="text-sm font-semibold text-primary forgetpass"
            to="/Sign-in"
            >Sign in here</NuxtLink
          >
        </p>
      </div>
    </v-container>
  </div>
</template>

<style scoped lang="scss">
.form {
  width: 40%;
  padding: 20px 0;
  margin: 70px auto;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
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

.register {
  margin-top: 64px;
}
.underline {
  text-decoration: none;
  color: black;
}
.forgetpass {
  color: rgb(2 121 255) !important;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
}
.overlay {
  background-image: url(../../assets/images/workplace-with-blue-office-supplies_23-2147843328.jpg);
  background-size: cover;
  background-position: 50%;
  height: 100vh;
  width: 100%;
}
@media (max-width: 767px) {
  .form {
    width: 100%;
  }
}
</style>

<script></script>
