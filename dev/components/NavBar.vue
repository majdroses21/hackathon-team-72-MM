<template>
  <v-app class="navbar">
    <v-app-bar app color="#EEE">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-btn depressed>
        <i class="fal fa-sign-in me-3" />
        <v-icon icon="mdi-chevron-left"></v-icon>
        تسجيل الدخول
      </v-btn>

      <nuxt-link class="link ll" to="/Skills"> تصفح المهارات</nuxt-link>
      <nuxt-link class="link" to="/">تواصل معنا </nuxt-link>
      <v-toolbar-title>
        <!-- Spacer -->
        <v-spacer></v-spacer>

        <v-img src="../assets/images/images.jpg" max-height="48"></v-img>
      </v-toolbar-title>

      <v-toolbar-title>
        <v-img src="/path/to/your/logo.png" max-height="48"></v-img>
      </v-toolbar-title>

      <!-- Spacer -->
      <v-spacer></v-spacer>
      <nuxt-link to="/"
        ><img class="logo" src="../assets/images/images.jpg" alt="logo"
      /></nuxt-link>

      <!-- Logout Button -->
    </v-app-bar>
  </v-app>
</template>

<script>
export default defineComponent({});
</script>
<style scoped>
.link {
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
  color: black;
  margin-right: 5px;
  padding: 3px;
}
.navbar {
  height: 64px !important;
}

.link:active,
.link:focus,
.link:hover {
  color: blue;
}
.navbar {
  height: 64px;
  display: flex;
  justify-content: center;
  background-color: rgba(221, 221, 221, 0.303);
}
.logo {
  width: 50px;
}
</style>

<!-- <v-row>
  <v-col cols="2">
    <v-btn depressed color="red">
      <i class="fal fa-sign-in me-3" />
      <v-icon icon="mdi-chevron-left"></v-icon>
      login
  </v-btn>
  </v-col>
  <v-col cols="3">
    <nuxt-link to="/">تواصل معنا</nuxt-link>
    <nuxt-link to="/Skills">تصفح المهارات</nuxt-link>
    <nuxt-link to="/contact">من نحن</nuxt-link>
  </v-col>

</v-row>

<v-toolbar-title class="d-flex justify-end">
  <img src="../assets/images/Untitled-1.png" alt="Logo" height="50" />
</v-toolbar-title> -->
<!--

<nav>
  <div class="navbar">
    <v-container>
      <v-row>
        <v-col class="d-flex" cols="5">
          <ul>
            <li>
              <v-btn depressed>
                <i class="fal fa-sign-in me-3" />
                <v-icon icon="mdi-chevron-left"></v-icon>
                تسجيل الدخول
              </v-btn>
            </li>
            <li>
              <nuxt-link class="link ll" to="/Skills">
                تصفح المهارات</nuxt-link
              >
            </li>
            <li><nuxt-link class="link" to="/">تواصل معنا </nuxt-link></li>
          </ul>
        </v-col>
        <v-col cols="5"></v-col>
        <v-col cols="2">
          <nuxt-link to="/">
            <img src="../assets/images/images.jpg" alt="Logo" height="50" />
          </nuxt-link>
        </v-col>
      </v-row>
    </v-container>
  </div>
</nav> -->
