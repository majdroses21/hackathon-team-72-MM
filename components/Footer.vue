<template>
  <footer style="margin-top:200px">
    <div class="waves">
      <din class="wave" id="wave1"></din>
      <din class="wave" id="wave2"></din>
      <din class="wave" id="wave3"></din>
      <din class="wave" id="wave4"></din>
    </div>
    <v-container>
      <v-row>
        <v-col class="d-flex flex-column text-center " cols="6" md="3">
          <div class="apps d-sm-block">
            <h5 style="color: white;" class="line text-h4 mb-6">تطبيقات</h5>
            <ul style="list-style: none;">
              <li>  <img
                class="mb-2 w-50"
                src="../assets/images/footer-appStore.png"
                alt="appStore"
              /></li>
              <li>
                <img
              class="w-50"
              src="../assets/images/footer-playStore.png"
              alt="playStore"
            />
              </li>
            </ul>
          </div>
        </v-col>
        <v-col class="d-flex flex-column text-center " cols="6" md="3">
          <div  style="color: white;" class="aboutUs d-sm-block">
            <h5 class="line text-h4 mb-6">روابط مفيدة</h5>
            <nuxt-link style="color: white;" class="link footer__link" to="/aboutus"
              >من نحن ؟</nuxt-link
            >
            <nuxt-link style="color: white;" class="link footer__link" to="/ourgoals"
              >أهداف المنصة</nuxt-link
            >
            <nuxt-link style="color: white;" class="link footer__link" to="/howitwork"
              >كيف تعمل المنصه</nuxt-link
            >
          </div>
        </v-col>

        <v-col class="d-flex flex-column text-center " cols="6" md="3">
          <div class="Site_sections">
            <h5 style="color: white;" class="line text-h4 mb-6">اقسام الموقع</h5>
           <div class="d-flex flex-column">
            <nuxt-link style="color: white;" class="link footer__link" to="/Skills">
              المهارات</nuxt-link
            >
            <nuxt-link style="color: white;" class="link footer__link" to="/contactus"
              >تواصل معنا</nuxt-link
            >
           </div>
          </div>
        </v-col>

        <v-col cols="6" md="3">
          <div class="us d-flex flex-column gap-4">
            <div class="mb-3" style="text-align: center;"><img class="logofooter" src="../assets/images/LogoNav.png" alt="Logo" /></div>
           <div class="mb-3">
            <p class="text-h" style="color: white;">
              تسعي المنصة جاهدة لتقديم التعلم وتبادل وتعزيز الخبرات في العالم
              العربي نسعى لجعل المعرفة والخبرات متاحة للجميع ونشجع التعليم
              المستمر
            </p>
           </div>
            <div >
              <ul class="d-flex justify-space-evenly justify-center icons">
                <li><a href="#"><v-icon class="facebook-icon" size="36">mdi-facebook</v-icon></a></li>
                <li><a href="#"><v-icon class="snapchat-icon" size="36">mdi-snapchat</v-icon></a></li>
                <li><a href="#"><v-icon class="x-icon" size="36">mdi-alpha-x</v-icon></a></li>
                <li><a href="#"><v-icon class="youtube-icon" size="36">mdi-youtube</v-icon></a></li>
                <li><a href="#"><v-icon class="whatsapp-icon" size="36">mdi-whatsapp</v-icon></a></li>
              </ul>
            </div>
          </div>
        </v-col>
      </v-row>
      <div style="color: white;" class="text-center">{{ new Date().getFullYear() }} — <strong>Learn</strong></div>
    </v-container>
  </footer>
</template>

<style>
footer {
  position: relative;
  width: 100%;
  background:rgb(134, 41, 145);
 min-height: 100px;

  padding: 20px 50px;
  display: flex;
  justify-content: center;
  align-items: center;
}

footer .wave {
  position: absolute;
  top: -100px;
  left: 0;
  width: 100%;
  height: 100px;
  background:url(../assets/images/wave.png);
  background-size: 1000px 100px;

}
footer .wave#wave1 {
  z-index: 1000;
  opacity: 1;
  bottom: 1;
  animation: animateWave 10s linear infinite;
}
footer .wave#wave2 {
  z-index: 999;
  opacity: 0.5;
  bottom: 10px;
  animation: animateWave_02 10s linear infinite;
}
footer .wave#wave3 {
  z-index: 1000;
  opacity: 0.2;
  bottom: 15px;
  animation: animateWave 9s linear infinite;
}
footer .wave#wave4 {
  z-index: 999;
  opacity: 0.7;
  bottom: 20px;
  animation: animateWave_02 9s linear infinite;
}

@keyframes animateWave {
  0% {
    background-position-x: 1000px ;
  }
 100% {
    background-position-x: 0px ;
  }

}
@keyframes animateWave_02 {
  0% {
    background-position-x: 0px ;
  }
 100% {
    background-position-x: 1000px ;
  }

}

.facebook-icon, .snapchat-icon, .x-icon, .youtube-icon, .whatsapp-icon {
  background-color: white;
  color: #862991;
  border-radius: 50%;
  padding: 8px;
  border: 2px solid #862991;
}
.icons {
  list-style: none;
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



.logofooter {
  width:200px;
}

</style>




