<template>
  <v-layout>
    <v-app-bar
      class="fo"
      color="#862991
    "
      elevation="3"
    >
      <v-container class="d-flex flex-row">
        <!-- <v-app-bar-nav-icon v-if="!smAndDown"></v-app-bar-nav-icon> -->
        <v-app-bar-nav-icon
          v-if="smAndDown"
          variant="text"
          @click.stop="drawer = !drawer"
        ></v-app-bar-nav-icon>
        <v-avatar class="photoprofile" v-if="!smAndDown && isLogged">
          <v-img
            alt="John"
            src="https://cdn.vuetifyjs.com/images/john.jpg"
          ></v-img>
        </v-avatar>
        <nuxt-link style="color: black" to="/Sign-in">
          <v-btn rounded="xl" v-if="!smAndDown" class="login" depressed>
            <i class="fa-regular fa-right-to-bracket"></i>
            <v-icon icon="mdi-chevron-left"></v-icon>
            تسجيل الدخول
          </v-btn>
        </nuxt-link>
        <v-btn rounded="xl" class="login">
          <nuxt-link v-if="!smAndDown" class="link" to="/contactus"
            >تواصل معنا</nuxt-link
          >
        </v-btn>
        <v-btn rounded="xl" class="login"
          ><nuxt-link v-if="!smAndDown" class="link" to="/Skills"
            >تصفح المهارات</nuxt-link
          >
        </v-btn>
        <v-spacer></v-spacer>
        <div class="logo">
          <nuxt-link to="/">
            <!-- <h1 class="ds">fhrth</h1> -->
            <img src="../assets/images/LogoNav.png" alt="" />
          </nuxt-link>
        </div>
      </v-container>
    </v-app-bar>
    <!-- <v-navigation-drawer v-model="drawer" color="red"></v-navigation-drawer> -->
    <v-navigation-drawer v-model="drawer" location="bottom" temporary>
      <div class="d-flex flex-column">
        <nuxt-link class="linkdrawer" style="color: black" to="/Sign-in">
          <v-btn
            color="#6c5ce7"
            rounded="xl"
            v-if="smAndDown"
            class="login"
            depressed
          >
            <i class="fa-regular fa-right-to-bracket"></i>
            <v-icon icon="mdi-account"></v-icon>
            تسجيل الدخول
          </v-btn>
        </nuxt-link>
        <nuxt-link class="linkdrawer" to="/">الرئيسية</nuxt-link>
        <nuxt-link class="linkdrawer" to="/profile">الملف الشخصي</nuxt-link>
        <nuxt-link class="linkdrawer" to="/contactus">المهارات</nuxt-link>
        <nuxt-link class="linkdrawer" to="/">المدونة</nuxt-link>
        <nuxt-link class="linkdrawer" to="/">تواصل معنا</nuxt-link>
      </div>
    </v-navigation-drawer>
  </v-layout>
</template>

<style scoped lang="scss">
.link {
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
  color: white;
  margin-right: 5px;
  padding: 3px;
  line-height: 1.5;
}
.ds {
  color: white;
}
.login {
  line-height: 1.5;
  color: white;
  margin-top: 5px !important;
}
.photoprofile {
  margin-top: 5px;
}
.logo {
  color: white;
}
.logo img {
  width: 155px;
}
.linkdrawer {
  padding: 15px;
  text-decoration: none;
  color: black;
  font-weight: bold;
  font-size: 20px;
  text-align: center;
  &:hover {
    background: rgb(226, 226, 226);
    color: #6c5ce7;
    transition: 0.3s;
  }
}
</style>
<script setup>
import { watch, ref } from "vue";
import { useDisplay } from "vuetify";
let isLogged = useState("loggedIn", () => false);

// Destructure only the keys you want to use
const { smAndDown } = useDisplay();
console.log(useDisplay);

const drawer = ref(false);
const group = ref(null);
watch(group, () => {
  drawer.value = false;
});
</script>
