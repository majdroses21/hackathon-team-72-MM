<template>
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
                    <li>تبادل المعرفة والخبرات تلعب دوراً حيوياً في تطوير المجتمعات وتعزيز التواصل والتعلم المستمر. في الوطن العربي، هناك حاجة ماسة لمثل هذه المنصات التي تسهم في نشر المعرفة وتعزيز ثقافة التعلم المستمر إليك بعض النقاط التي تمثل أهمية وهدف منصات التبادل المعرفي والخبرات في الوطن العربي</li>
                    <li>نشر المعرفة والثقافة: تعتبر منصات التبادل المعرفي والخبرات مصادر هامة لنشر المعرفة والثقافة في المجتمع العربي. تتيح هذه المنصات للأفراد مشاركة معارفهم وخبراتهم في مختلف المجالات بما في ذلك العلوم، التكنولوجيا، الثقافة، الأدب، وغيرها.
                    </li>
                    <li>تبادل الخبرات والمهارات: تساهم منصات التبادل المعرفي في تيسير عملية تبادل الخبرات والمهارات بين الأفراد والمجتمعات في الوطن العربي. يمكن للأعضاء المشاركة بخبراتهم ومهاراتهم في مجالات مختلفة، وبالتالي يتم تعزيز التعلم المشترك وتطوير المهارات الشخصية والمهنية.
                    </li>
                    <li>تعزيز التواصل الاجتماعي والثقافي: تعتبر منصات التبادل المعرفي والخبرات مساحات للتواصل الاجتماعي والثقافي بين أفراد المجتمع العربي. تسهل هذه المنصات التواصل بين الأشخاص من خلفيات وثقافات مختلفة، مما يعزز الفهم المتبادل ويساهم في بناء جسور التواصل والتعاون.

                    </li>
                    <li>تعزيز التعلم المستمر: تشجع منصات التبادل المعرفي والخبرات على ثقافة التعلم المستمر في المجتمع العربي. من خلال المشاركة في هذه المنصات، يمكن للأفراد تحسين مهاراتهم ومعرفتهم بشكل دائم، مما يسهم في تطوير الذات وتحقيق النجاح في مختلف المجالات.
                    </li>
                    <li>تعزيز التنمية المجتمعية: تسهم منصات التبادل المعرفي والخبرات في تعزيز التنمية المجتمعية في الوطن العربي من خلال نشر المعرفة وتطوير المهارات وتعزيز التواصل والتعاون بين أفراد المجتمع.

                    </li>
                    <li>باختصار، تهدف منصات التبادل المعرفي والخبرات في الوطن العربي إلى تعزيز ثقافة التعلم والتواصل، وتشجيع التعاون والتبادل بين الأفراد والمجتمعات، وبناء مجتمعات أكثر تطورا وتنميةً.</li>
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
    background-color:#6c5ce7;
    right: 0;
    top: 0;
}
</style>
