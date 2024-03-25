<template>
    <v-container style="min-height: 434px; margin-top: 55px;">
        <v-fade-transition mode="out-in">
            <v-row>
                <v-col>
                    <div class="cover-container">
                        <v-img class="bg-grey-lighten-2" height="225" src="/images/cov.jpg" cover></v-img>
                        <div class="user-info">
                            <span class="userName">Majd Ahmed</span>
                            <v-rating :model-value="3.5" color="amber" density="compact" size="x-large" half-increments
                                readonly></v-rating>
                        </div>
                        <div class="img-container">
                            <v-img class="prof-img" cover src="/images/majd.jpg"></v-img>
                        </div>
                    </div>
                </v-col>
            </v-row>
        </v-fade-transition>


        <div class="content-container d-noneX">
            <div class="content" dir="rtl">
                <label> اكتب توضيح ماذا تريد تعلم في <span>JavaScript </span> للإجتماع مع <span>Majd</span></label>
                <v-textarea label="Type your messege here"></v-textarea>
                <v-btn class="text-none mb-4" color="black" size="large" variant="flat">
                    Connect
                </v-btn>
            </div>
            <div class="bio" dir="rtl">
                <div class="bio-line">
                    <div><v-icon>mdi-home</v-icon>&nbsp;</div>
                    <div>
                        <span>مبرمج في </span><span>AASED Company</span>
                    </div>
                </div>
                <br>
                <div class="bio-line">
                    <div><v-icon>mdi-school</v-icon>&nbsp;</div>
                    <div>
                        <span>خريج في تطوير الواجهة الأمامية (Front end Dev)</span>
                    </div>
                </div>
                <br>
                <div class="bio-line">
                    <div><v-icon>mdi-information</v-icon>&nbsp;</div>
                    <div>
                        <p dir="auto">هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد
                            النص العربي، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد
                            الحروف التي يولدها التطبيق.</p>
                    </div>
                </div>
            </div>
        </div>
    </v-container>
</template>


<style scoped>
/* Cover & profile Photos */
.img-container {
    position: relative;
    width: 200px;
    height: 200px;
    bottom: 80px;
    left: 25px;
}

.prof-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
    /* border: red solid; */
}

/*  */
/* Both */
.content-container {
    display: flex;
    margin-top: -65px;
    /* border: red solid; */

}

/* Bio */
.bio {
    /* border: red solid; */
    width: 25%;
    background-color: rgba(26, 26, 26, 0.666);
    color: #fff;
    height: 35vh;
    margin-left: 10px;
}

.bio-line {
    display: flex;
}

/* Content */
.content {
    /* border: #000 solid; */
    width: 75%;
    margin-right: 10px;
}

.user-info {
    display: flex;
    justify-content: space-between;
}

.user-info .userName {
    margin-left: 250px;
    font-size: 35px;
}

@media (max-width: 490px) {


    .content-container {
        display: block;
    }

    .bio {
        width: 90%;
        margin-left: auto;
        margin-right: auto;
        /* order: 1 !important; */
    }

    .content {
        /* border: red solid; */
        width: 90%;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 20px;

    }

}
</style>