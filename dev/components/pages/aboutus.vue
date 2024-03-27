<template>
  <div class="aboutus">
    <div class="cover">
      <h1 class="head">About Us</h1>
      <v-btn :ripple="false" class="btn" rounded size="x-large"
        ><nuxt-link class="link" to="/">H<span class="li">ome</span></nuxt-link
        ><v-icon icon="mdi-chevron-right"></v-icon
        ><span class="text-button">About Us</span></v-btn
      >
    </div>
  </div>
  <div class="form">
    <v-container>
      <h2 class="text-center mb-5">من نحن ؟</h2>
      <p style="font-size: 20px" class="text-center mb-15">
        وسيلة حديثة ومبتكرة لتبادل المعرفة والخبرات بين الأفراد في المجتمع
        العربي
      </p>
    </v-container>
    <v-container>
      <v-row>
        <!-- Image on the right -->
        <v-col cols="12" md="6" class="d-flex justify-center">
          <img style="width: 100%;" src="../assets/images/team-business-people-stacking-hands.jpg" alt="">
        </v-col>

        <!-- Text on the left -->
        <v-col cols="12" md="6">
          <v-card>
            <v-card-text style="text-align: end">
              <h2>نحن هنا من أجللك</h2>
              <p style="line-height: 1.5; font-size: 18px; font-weight: bold">
                يمكن لمنصة تبادل الخبرات أن تكون مفيدة في تبادل المعرفة العملية
                والنظرية في مجالات متنوعة مثل التكنولوجيا، الإبداع، العلوم،
                والأعمال. يمكن للأفراد المشاركين في هذه المنصة أن يستفيدوا من
                تجارب الآخرين، يتبادلوا الأفكار، ويعززوا مهاراتهم من خلال
                التفاعل والتعاون. باستخدام منصة تبادل الخبرات، يمكن للأفراد أن
                يبنوا شبكة علاقات اجتماعية ومهنية قوية، ويزيدوا من فرص التطوير
                الشخصي والمهني. كما يمكن للمنصة أن تسهم في تعزيز التفاهم
                والتعاون بين الأشخاص من خلفيات وثقافات مختلفة. باختصار، منصة
                تبادل الخبرات تعتبر بيئة مثالية لتعزيز التعلم المستمر وتطوير
                المهارات الشخصية والمهنية. يجب الاستفادة من هذه المنصة كوسيلة
                فعالة لتواصل الأفراد وتبادل الخبرات في سبيل بناء مجتمع أكثر
                تطورا وتقدما تعتبر هذه المنصة بمثابة مساحة افتراضية تجمع بين
                الخبرات المختلفة وتسهل عملية التواصل والتعلم المستمر
              </p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<style scoped lang="scss">
.aboutus {
  height: 60vh;
  padding-top: 64px;
}
.btn {
  position: absolute;
  bottom: -24px;
  width: 223px;
}
.link {
  text-decoration: none;
  color: black;
}
.text-button {
  color: rgb(71, 69, 69);
}
.cover {
  height: 56vh;
  position: relative;
  background-image: url(../assets/images/download.avif);
  width: 100%;
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}
.cover img {
  background-size: cover;
  height: 100%;
  width: 100%;
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
}
.head {
  color: white;
  font-size: 41px;
  font-weight: 400;
}
.li {
  text-transform: lowercase;
}
.form {
  margin: 50px auto;
  margin-bottom: 50px;
  width: 70%;
}
@media (max-width: 960px) {
  .cover {
    min-height: 12.375rem !important;
  }
}
@media (max-width: 600px) {
  .cover {
    background-size: contain;
    margin-top: -99px;
  }
  .btn {
    position: absolute;
    bottom: 72px;
    width: 223px;
  }
  .form {
    margin-top: -15px;
  }
}
@media (min-width: 601px) and (max-width: 960px) {
  .cover {
    background-size: contain;
    margin-top: -156px;
  }
  .btn {
    position: absolute;
    bottom: 123px;
    width: 223px;
  }
  .form {
    margin-top: -15px;
  }
}
</style>
<script>
export default {
  data() {
    return {
      firstname: "",
      lastname: "",
      email: "",
      message: "",
      name: "ImageLeftTextRight",
      nameRules: [
        (value) => {
          if (value) return true;

          return "Name is required.";
        },
        (value) => {
          if (value?.length <= 10) return true;

          return "Name must be less than 10 characters.";
        },
      ],
      emailRules: [
        (value) => {
          if (value) return true;

          return "E-mail is requred.";
        },
        (value) => {
          if (/.+@.+\..+/.test(value)) return true;

          return "E-mail must be valid.";
        },
      ],
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await this.$axios.post("/api/send-email", {
          firstname: this.firstname,
          lastname: this.lastname,
          email: this.email,
          message: this.message,
        });
        console.log("Email sent successfully", response);
        // Optionally, you can show a success message or redirect the user
      } catch (error) {
        console.error("Error sending email", error);
        // Optionally, you can show an error message to the user
      }
    },
  },
};
</script>
