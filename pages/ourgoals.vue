<template>
  <Head>
        <title>
            Mx| &nbsp; أهداف المنصة
        </title>
    </Head>
  <div class="ourgoals">
    <div class="cover">
      <h1 class="head">Our Goals</h1>
      <v-btn :ripple="false" class="btn" rounded size="x-large"
        ><nuxt-link class="link" to="/">H<span class="li">ome</span></nuxt-link
        ><v-icon icon="mdi-chevron-right"></v-icon
        ><span class="text-button">Our Goals</span></v-btn
      >
    </div>

    <v-container  class="mt-10">
        <h2 class="text-center">تهدف المنصه الي</h2>
      <v-row justify="center">
        <v-col cols="12">
          <v-card>
            <v-card-text class="text-center">
              <span class="display-1"
                > <ul class="text-end">
                    <li>تمكين العالم العربي ورفع مستواه الفكري والعلمي. هذه المنصة تسعى لتحقيق الأهداف التالية في الوطن العربي</li>
                    <li>تمكين الشباب: تمكين الشباب العربي من اكتساب المهارات اللازمة للنجاح في سوق العمل، سواء في مجال تكنولوجيا المعلومات أو غيرها من المجالات
                    </li>
                    <li>تتطوير حلول مبتكرة: تشجيع الابتكار وتطوير حلول جديدة تؤثر بشكل إيجابي على العملية التعليمية والاقتصادية في المنطقة </li>
                    <li>تعزيز التواصل الاجتماعي والثقافي: تعتبر منصات التبادل المعرفي والخبرات مساحات للتواصل الاجتماعي والثقافي بين أفراد المجتمع العربي. تسهل هذه المنصات التواصل بين الأشخاص من خلفيات وثقافات مختلفة، مما يعزز الفهم المتبادل ويساهم في بناء جسور التواصل والتعاون.

                    </li>
                    <li>تعزيز ثقافة الابتكار: تعزيز ثقافة الابتكار والتفكير الإبداعي في المجتمع العربي، وتشجيع الشباب على تطوير مشاريعهم الخاصة
                    </li>
                    <li>تعزيز التنمية المجتمعية: تسهم منصات التبادل المعرفي والخبرات في تعزيز التنمية المجتمعية في الوطن العربي من خلال نشر المعرفة وتطوير المهارات وتعزيز التواصل والتعاون بين أفراد المجتمع.

                    </li>
                    <li>توفير محتوى تعليمي متميز: توفير محتوى تعليمي عالي الجودة في مجموعة متنوعة من المجالات، مما يساهم في تطوير مهارات الشباب وتحسين فرصهم المهنية</li>
                    <li>التعاون مع شركاء الصناعة: التعاون مع كبرى الشركات العالمية في مجال تكنولوجيا المعلومات لتوفير فرص تدريب وتطوير للشباب العربي</li>
                </ul></span
              >
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "WordDisplay",
  props: {
    word: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.ourgoals {
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
ul li {
    font-size: 22px;
    list-style: none;
    padding: 12px;
    line-height: 1.2;
    position: relative;
}
ul li::after {
    position: absolute;
    content: "";
    border-radius: 50%;
    width: 10px;
    height: 10px;
    background-color:#862991;
    right: 0;
    top: 0;
}
</style>
