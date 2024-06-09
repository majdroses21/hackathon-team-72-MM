<template>

    <Head>
        <title>
            Mx| My Profile
        </title>
    </Head>
    <v-container style="min-height: 434px; margin-top: 55px;">
        <v-fade-transition mode="out-in">
            <v-row>
                <v-col>
                    <div class="cover-container ">
                        <dev style="position: relative;">
                            <v-img class="bg-grey-lighten-2" height="225" :src="usrCovImg" cover></v-img>
                            <v-btn color="rgb(134, 41, 145)" icon="mdi-camera-plus" class="change-pic"></v-btn>
                        </dev>
                        <div class="user-info">
                            <span class="userName">{{ userName }}</span>
                            <v-rating :model-value="usrRating" color="amber" density="compact" size="x-large"
                                half-increments readonly></v-rating>
                        </div>
                        <div class="img-container">
                            <v-btn color="rgb(134, 41, 145)" icon="mdi-camera-plus" class="change-pic">
                            </v-btn>
                            <v-img class="prof-img" cover :src="userImg" alt="not found"></v-img>
                        </div>
                    </div>
                </v-col>
            </v-row>
        </v-fade-transition>
        <hr>
        <v-container>

            <v-form dir="rtl">
                <div class="d-flex">
                    <v-text-field class="ml-3 mr-3" v-model="lastName" label="الاسم الأخير"></v-text-field>
                    <v-text-field class="ml-3 mr-3" v-model="firstName" label="الاسم الأول" dir="auto"></v-text-field>
                </div>
                <div class="d-flex">
                    <v-text-field class="ml-3 mr-3" v-model="userEmail" label="عنوان البريد الإلكتروني"></v-text-field>
                    <v-text-field class="ml-3 mr-3" v-model="email" label="العمل الحالي"></v-text-field>
                </div>
                <div class="d-flex">
                    <v-text-field class="ml-3 mr-3" v-model="email" label="التعليم"></v-text-field>
                    <v-text-field class="ml-3 mr-3" v-model="email" label="Bio- نبذة"></v-text-field>
                </div>


                <v-btn color="rgb(134, 41, 145)" @click="updateForm">تحديث</v-btn>
            </v-form>
        </v-container>
    </v-container>
</template>

<script setup>
import useUserState from '~/composables/myProfileInfoState.js'

const { 
  userName, 
  usrId, 
  userEmail, 
  userImg, 
  usrCovImg, 
  usrCoins, 
  usrRating, 
  firstName,
  lastName,
  fullName, 
  fetchUserProfile 
} = useUserState()

// Fetch user profile when component is mounted
fetchUserProfile()
// Update Forme




</script>

<style scoped>
/* Cover & profile Photos */
.img-container {
    position: relative;
    width: 200px;
    height: 200px;
    bottom: 110px;
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

.change-pic {
    position: absolute;
    z-index: 1;
    bottom: 0;
    right: 0;
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
