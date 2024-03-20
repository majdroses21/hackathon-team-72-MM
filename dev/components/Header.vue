<template>
  <div class="header">
    <div class="desc">
      <p class=" text-center text-h4 font-bold">
        التعلم ليس مجرد اكتساب معرفة، بل هو رحلة مستمرة نحو التحول والتطور.
        فلنتحفز دائمًا لنتعلم ونتبادل الخبرات، ففي هذا الاستمرار تكمن قوتنا
        وتحقيق إنجازاتنا.
      </p>
    </div>

    <div class="search" dir="rtl">
      <input
        placeholder="ماذا تريد ان تتعلم اليوم"
        type="search"
        name=""
        id=""
        dir="auto"
      />
      <v-btn class="btnsearch" rounded>بحــث</v-btn>
    </div>
  </div>
</template>

<style scoped>
.header {
  background-image: url(../assets/images/male-hand-holding-question-mark-icon-neon-redbluepurple-backgroundbanner-with-copy-space-place-text_150455-21042.avif);
  background-size: cover;
  height: 70vh;
  width: 100%;
  position: relative;
}
@media (max-width: 776px) {
    .header {
        padding-top: 0 !important;
        height: 44vh;
        background-position: 50%;
    }
    .desc {
        width: 80% !important;
        font-size: 28px;
        top:30px !important;
        width: 90%;
        text-align: center!important;
    }
    .search {
        width: 80% !important;
        margin-left: 5%;
        text-align: center!important;
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
  width: 80% ;
  height: 40px;
  margin-right: 20%;
  border: none;
  &:focus {
   outline: 0;
 }
}
.btnsearch {
  position: absolute;
  right: 20px;
  height: 50px;
  top: 17px;
  font-size: 25px;
}
</style>

<script>
export default defineComponent({});
</script>
