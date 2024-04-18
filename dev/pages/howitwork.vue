<template>
     <Head>
        <title>
            Mx| كيف تعمل المنصة؟
        </title>
    </Head>
    <div class="how-works">
        <div class="howitwork">
            <div class="cover">
              <h1 class="head text-white">Hoiw It Work</h1>
              <v-btn :ripple="false" class="btn" rounded size="x-large"
                ><nuxt-link class="link" to="/">H<span class="li">ome</span></nuxt-link
                ><v-icon icon="mdi-chevron-right"></v-icon
                ><span class="text-button">About Us</span></v-btn
              >
            </div>
        </div>
        <v-container class="my-5 my-md-10">
            <h1 class="text-center font-weight-bold mb-6">
                <span class="textdark--text">كيف تعمل المنصة</span>
            </h1>
            <v-row>
                <v-col cols="12" md="6" class="d-flex align-center px-0 mb-3 mb-md-0 px-md-4 px-2">
                    <img class="howimg w-100" src="../assets/images/howwork1.jpg"  alt="">
                </v-col>
                <v-col dir="rtl" cols="12" md="6" class="px-2 px-md-4">

                    <div class="items">
                        <div class="item rounded">
                            <span class="d-flex align-center font-weight-regular">
                                <h1 class="textmuted--text me-2 font-weight-regular">01</h1>
                                <h2 class="textdark--text font-weight-medium"> الصفحه الرئيسيه</h2>
                            </span>
                            <p class="mt-3 textmuted--text p-0 m-0">
                                ابحث علي ما تريد ان تتعلمه مباشر اواختر المجال الذي  تريد ان تتعلم مهاراته
                            </p>
                        </div>
                        <div class="item active rounded">
                            <span class="d-flex align-center font-weight-regular">
                                <h1 class="textmuted--text me-2 font-weight-regular">02</h1>
                                <h2 class="textdark--text font-weight-medium">المهارات</h2>
                            </span>
                            <p class="mt-3 textmuted--text p-0 m-0">
                                اختر المهاره التي ترغب في تعلمها
                            </p>
                        </div>
                        <div class="item rounded">
                            <span class="d-flex align-center font-weight-regular">
                                <h1 class="textmuted--text me-2 font-weight-regular">03</h1>
                                <h2 class="textdark--text font-weight-medium">الأشخاص</h2>
                            </span>
                            <p class="mt-3 textmuted--text p-0 m-0">
                                اختر الشخص الذي تريد ان تتعلم منه المهاره
                            </p>
                        </div>
                        <div class="item rounded">
                            <span class="d-flex align-center font-weight-regular">
                                <h1 class="textmuted--text me-2 font-weight-regular">04</h1>
                                <h2 class="textdark--text font-weight-medium">التواصل </h2>
                            </span>
                            <p class="mt-3 textmuted--text p-0 m-0">
                                يمكنك التواصل مع الشخص الذي يمتلك المهاره عن طريق بريد الكتروني
                            </p>
                        </div>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    props: {
        title: null,
        step1: null,
        step1_desc: null,
        step2: null,
        step2_desc: null,
        step3: null,
        step3_desc: null,
        step4: null,
        step4_desc: null,
    },
}
</script>

<style scoped lang="scss">
.how-works {
    padding-top: 64px;
}

.howitwork {
    min-height: 60vh;
}
.btn {
    position: absolute;
    bottom: -24px;
    width: 223px;
  }
.cover {
    height: 56vh;
    position: relative;
    background-image: url(../assets/images/HowItWork-Cover.avif);
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
.how-works .item {
  background: #F7F7F7;
  border: solid 1px #D1E9FF;
  min-height: 135px;
  margin-bottom: 16px;
  padding: 20px;
  box-shadow: 0 5px 40px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  &.active {
    background: #c43cea !important;
    .textmuted--text {
      color: #fff !important;
      opacity: 0.9;
    }
    .textdark--text {
      color: #fff !important;
    }
  }
}
.howimg {
    min-height: 445px;
    box-shadow: 0 5px 40px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}
</style>
