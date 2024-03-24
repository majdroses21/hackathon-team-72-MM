<template>
  <v-layout>
    <v-footer class="footer text-center d-flex flex-column ga-6">
      <v-container>
        <v-row>
          <v-col cols="6" md="3">
            <div class="apps d-sm-block">
              <h5 class="line text-h4 mb-6">تطبيقات</h5>
              <img
                class="mb-2"
                src="../assets/images/footer-appStore.png"
                alt="appStore"
              />
              <img
                class=""
                src="../assets/images/footer-playStore.png"
                alt="playStore"
              />
            </div>
          </v-col>
          <v-col cols="6" md="3">
            <div class="aboutUs d-sm-block">
              <h5 class="line text-h4 mb-6">معلومات عنا</h5>
              <nuxt-link class="link footer__link" to="aboutus"
              >من نحن ؟</nuxt-link
            >
            <nuxt-link class="link footer__link" to="ourgoals"
              >أهداف المنصة</nuxt-link
            >
            </div>
          </v-col>

          <v-col cols="6" md="3">
            <div class="Site_sections">
              <h5 class="line text-h4 mb-6">اقسام الموقع</h5>
              <nuxt-link class="link footer__link" to="Skills">
                المهارات</nuxt-link
              >
              <nuxt-link class="link footer__link" to="contactus"
                >تواصل معنا</nuxt-link
              >

            </div>
          </v-col>

          <v-col cols="6" md="3">
            <div class="us">
              <img src="../assets/images/logo1.png" alt="Logo" />
              <p class="text-h5">
                 تسعي المنصة جاهدة لتقديم التعلم وتبادل وتعزيز الخبرات في  العالم العربي
                نسعى لجعل المعرفة والخبرات متاحة للجميع ونشجع التعليم المستمر
              </p>
            </div>
          </v-col>
        </v-row>
      </v-container>
      <div>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          :icon="icon"
          class="mx-4"
          variant="text"
        ></v-btn>
      </div>

      <v-divider></v-divider>

      <div>{{ new Date().getFullYear() }} — <strong>Learn</strong></div>
    </v-footer>
  </v-layout>
</template>
<style>
.us img {
  width: 50%;
  height: 50px;
}
.apps img {
  display: block;
}

.footer {
  background-image: url("../assets/images/footer.jpg");
  background-size: cover;
  height: 50vh;
  box-shadow: 2px black;
  box-shadow: 0 5px 40px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}
.head div {
  width: 25%;
}
.line {
  position: relative;
}
.line::after {
  content: "";
  position: absolute;
  width: 100%;
  color: black;
  background-color: black;
  left: 0;
  height: 1px;
  opacity: 0.3;
  bottom: -8px;
}
.apps img {
  width: 84px;
  margin-left: calc(50% - 42px);
}
.link {
  text-decoration: none;
  color: black;
  font-size: 20px;
  display: block;
}
.footer__link:link,
.footer__link:visited {
  color: black;

  text-decoration: none;
  transition: all 0.2s;
}
.footer__link:hover,
.footer__link:active {
  color: #6c5ce7;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.4);
  transform: rotate(5deg) scale(1.1);
  border-radius: 9px;
}
</style>
<script setup>
const icons = ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"];
</script>
