<template>
  <Head>
        <title>
            Mx| تواصل معنا
        </title>
    </Head>
  <div class="contact">
    <div class="cover">
      <h1 class="head">Contact Us</h1>
      <v-btn  :ripple="false" class="btn" rounded size="x-large"
        ><nuxt-link class="link" to="/">H<span class="li">ome</span></nuxt-link
        ><v-icon icon="mdi-chevron-right"></v-icon
        ><span class="text-button">Contact Us</span></v-btn
      >
    </div>
</div>
<div class="form">
    <v-container>
        <h2 class="text-center mb-5">تواصل معنا</h2>
        <p style="font-size: 20px;" class="text-center mb-15">نحن هنا لمساعدتك, ونحن نقدر مدخلاتك يمكنك التواصل معنا عبر النموذج ادناه</p>
        <v-form  class="text-center" @submit.prevent="submitForm">
          <v-row>
            <v-col cols="12" >
              <v-text-field  :rules="nameRules"  style="width: 49%; float:left" v-model="firstname" label="First Name" required></v-text-field>
              <v-text-field :rules="nameRules"  style="width: 49%; float:right" v-model="lastname" label="Last Name" required></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field  :rules="emailRules"  v-model="email" label="Email" required></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-textarea v-model="message" label="Message"></v-textarea>
            </v-col>
            <v-col cols="12">
              <v-btn class="text-center" type="submit" color="primary">Send Message </v-btn>
            </v-col>
          </v-row>
        </v-form>
      </v-container>
    </div>


</template>
<style scoped lang="scss">
.contact {
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
  background-image: url(../assets/images/contact.png);
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
    text-transform: lowercase
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
@media (max-width:600px) {
     .cover{
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
     @media (min-width: 601px) and (max-width: 960px)  {
        .cover{
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
      firstname: '',
      lastname: '',
      email: '',
      message: '',
      nameRules: [
        value => {
          if (value) return true

          return 'Name is required.'
        },
        value => {
          if (value?.length <= 10) return true

          return 'Name must be less than 10 characters.'
        },
      ],
      emailRules: [
        value => {
          if (value) return true

          return 'E-mail is requred.'
        },
        value => {
          if (/.+@.+\..+/.test(value)) return true

          return 'E-mail must be valid.'
        },
      ],
    };
  },
  methods: {
    async submitForm() {
      try {
        const response = await this.$axios.post('/api/send-email', {
          firstname: this.firstname,
          lastname: this.lastname,
          email: this.email,
          message: this.message
        });
        console.log('Email sent successfully', response);
        // Optionally, you can show a success message or redirect the user
      } catch (error) {
        console.error('Error sending email', error);
        // Optionally, you can show an error message to the user
      }
    }
  }
};
</script>
