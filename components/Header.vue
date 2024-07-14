<template>
  <div class="header">

    <v-container>
      <v-row>
        <v-col class="text-center" cols="12" lg="6">
          <div class="desc">
            <p class="ph text-center text-h4 font-bold hidden-xs-only">
              التعلم ليس مجرد اكتساب معرفة، بل هو رحلة مستمرة نحو التحول والتطور.
              فلنتحفز دائمًا لنتعلم ونتبادل الخبرات، ففي هذا الاستمرار تكمن قوتنا
              وتحقيق إنجازاتنا
            </p>
          </div>

          <div class="search">
            <input
            dir="rtl"
              placeholder="ماذا تريد ان تتعلم اليوم"
              type="search"
              name=""
              id=""
            />
            <v-btn color="#d955ff" class="btnsearch" rounded>بحــث</v-btn>
          </div>
        </v-col>
      </v-row>

  </v-container>
  </div>
</template>

<style scoped lang="scss">
.header {
  background-image: url(../assets/images/male-hand-holding-question-mark-icon-neon-redbluepurple-backgroundbanner-with-copy-space-place-text_150455-21042.avif);
  background-size: cover;
  height: 70vh;
  width: 100%;
  position: relative;
  margin-top: 64px;
}
@media (max-width: 776px) {
    .header {
        padding-top: 0 !important;
        height: 44vh;
        background-position: 50%;
    }
    .desc {
        width: 80% !important;
        top:30px !important;
        width: 90%;
        text-align: center!important;
    }
    .search {
        width: 80% !important;
    }

     .ph{
      font-size: 22px !important;
      margin-top: 7%;
      line-height:1.4 !important;
      font-weight: bold;
     }
}
@media (min-width:778px) and (max-width:992px) {
    .header {
        background-size: cover;
        background-position: 50%;
        height: 55vh;

    }
    .desc {
        width: 90% !important;

    }
    .search {
        width: 80% !important;

    }
    .ph{
      line-height: 1.5 !important;
      font-weight: bold;
     }

}
.desc {
    position: absolute;
    top: 35%;
    left: 50px;
    width: 50%;
    p {
        line-height: 1.1;
    }
}

.search {
  position: absolute;
  top: 70%;
  left: 10%;
  width: 40%;
  border-radius: 30px;
  background-color: #fff;
  padding: 20px;
}
.search  input {
  width: 75% ;
  height: 40px;
  margin-right: -10%;
  border: none;
  &:focus {
   outline: 0;
 }
}
.btnsearch {
  position: absolute;
  left:10px ;
  right: 20px;
  height: 50px;
  top: 17px;
  font-size: 25px;
  width: 20px;
}



</style>

<script>
export default defineComponent({});
</script>
