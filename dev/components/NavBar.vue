<!-- TODO: لما كون بالفوتر واضغط على رابط ما ابقى بالفوتر -->
<template>
  <v-layout>
    <v-app-bar class="fo" color="#862991
    " elevation="3">
      <v-container class="d-flex flex-row">
        <v-app-bar-nav-icon v-if="smAndDown" variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <!-- user img  -->
        <nuxt-link to="/my-profile" class="text-decoration-none text-white" v-if="!smAndDown && isLogged">
          <div class="user-prof">
            <v-avatar class="photoprofile">
              <v-img alt="John" :src="userImg"></v-img>
            </v-avatar>
            <h3 class="ml-1">{{ userName.split(' ')[0] }}</h3>
          </div>
        </nuxt-link>
        <!-- User Coins -->
        <v-btn rounded="xl" v-if="!smAndDown && isLogged" class="login" depressed>
          <h4>
            <v-icon icon="mdi mdi-currency-eur"></v-icon>
            <span>{{ usrCoins }}</span>
          </h4>
        </v-btn>
        <!-- sign IN -->
        <nuxt-link style="color: black" to="/Sign-in" v-if="!smAndDown && !isLogged">
          <v-btn rounded="xl" class="login" depressed>
            <h3>
              <v-icon icon="mdi-account"></v-icon>
              تسجيل الدخول
            </h3>
          </v-btn>
        </nuxt-link>
        <!-- Log Out -->
        <v-btn rounded="xl" v-if="!smAndDown && isLogged" class="login" depressed @click="logMeOut()">
          <h3>
            <v-icon icon="mdi-logout"></v-icon>
            <!-- تسجيل الخروج -->
          </h3>
        </v-btn>

        <v-btn rounded="xl" class="login">
          <nuxt-link v-if="!smAndDown" class="link" to="/contactus">
            تواصل معنا
          </nuxt-link>
        </v-btn>

        <v-btn rounded="xl" class="login">
          <nuxt-link v-if="!smAndDown" class="link" to="/aboutus">
            من نحن
          </nuxt-link>
        </v-btn>

        <v-btn rounded="xl" class="login">
          <nuxt-link v-if="!smAndDown" class="link" to="/ourgoals">
            أهداف المنصة
          </nuxt-link>
        </v-btn>

        <v-btn rounded="xl" class="login">
          <nuxt-link v-if="!smAndDown" class="link" to="/Skills">
            تصفح المهارات
          </nuxt-link>
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
          <v-btn color="#6c5ce7" rounded="xl" v-if="smAndDown" class="login" depressed>
            <i class="fa-regular fa-right-to-bracket"></i>
            <v-icon icon="mdi-account"></v-icon>
            تسجيل الدخول
          </v-btn>
        </nuxt-link>
        <nuxt-link class="linkdrawer" to="/">الرئيسية</nuxt-link>
        <nuxt-link class="linkdrawer" to="/contactus">المهارات</nuxt-link>
        <nuxt-link class="linkdrawer" to="/ourgoals">أهداف المنصة</nuxt-link>
        <nuxt-link class="linkdrawer" to="/aboutus">من نحن؟</nuxt-link>
        <nuxt-link class="linkdrawer" to="/howitwork">كيف تعمل المنصة</nuxt-link>
        <nuxt-link class="linkdrawer" to="/contactus">تواصل معنا</nuxt-link>
        <nuxt-link class="linkdrawer" to="/my-profile">الملف الشخصي</nuxt-link>
        <nuxt-link class="linkdrawer" to="/">المدونة</nuxt-link>
        <nuxt-link class="linkdrawer" to="/contactus">تسجيل الخروج</nuxt-link>
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

.user-prof {
  display: flex;
  text-align: center;
  align-items: center;
}
</style>
<script setup>
import { useDisplay } from "vuetify";
let isLogged = useCookie("loggedIn").value; 

// Destructure only the keys you want to use
const { smAndDown } = useDisplay();

const drawer = ref(false);
const group = ref(null);
watch(group, () => {
  drawer.value = false;
});

// Import Stor Settings
import { userStore } from '@/store/myProfileData';
const store = userStore();
const {userName ,userImg ,usrCoins  } = storeToRefs(store) ;
console.log('userName', userName.value);
onMounted(async () => {
  await store.fetchUserProfile();
})
const logMeOut = async () => {
  try {
    useCookie("loggedIn").value = false;
    useCookie("token").value = null;
    let { data, error } = await useDataApi('/api/logout');
    if (data.value.status) {
      useSonner.success(data.value.msg);
      setTimeout(() => {
        navigateTo({ name: "index" });
        window.location.reload();
      }, 2000);
    } else {
      useSonner.error(data.value.msg);
    }

  } catch (error) {
    console.log('Your error is: ', error);
  }
}

</script>
