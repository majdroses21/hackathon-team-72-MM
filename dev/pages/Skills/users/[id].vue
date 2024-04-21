<template>
  <Head>
    <title>Mx | مدرسوا {{ skillName }}</title>
  </Head>
  <div>
    <h1 class="mt-16" dir="rtl" style="margin-right: 190px">
      مدرسوا {{ skillName }}
    </h1>
    <v-container class="mt-1">
      <v-row v-if="allUsersRealted.length">
        <v-col cols="12" lg="3" md="6" sm="6" xs="1"
          v-for="(relatedUser, i) in allUsersRealted" :key="i">
          <v-card class="mx-auto" max-width="400">
            <v-img
              class="align-end text-white"
              height="200"
              :src="relatedUser.user.coverImg"
              cover
            >
            </v-img>
            <!-- About Teatcher -->
            <div class="d-flex teacher-profile mb-2">
              <div class="img-container">
                <v-img
                  :src="relatedUser.user.img"
                  class="prof-img"
                  cover
                ></v-img>
              </div>
              <h4 class="ml-2">{{ relatedUser.user.name }} &nbsp;</h4>
            </div>
            <v-card-text class="mt-4">
              <h3>Web Devloper</h3>
            </v-card-text>

            <v-card-actions class="d-flex justify-space-between">
              <v-rating
                :model-value="relatedUser.rating"
                color="amber"
                density="compact"
                size="small"
                half-increments
                readonly
              ></v-rating>

              <nuxt-link :to="'/profile/' + relatedUser.user.id">
                <v-btn elevation="7" color="purple"> Enroll </v-btn>
              </nuxt-link>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
      <v-alert
      v-else
      density="compact"
      dir="rtl"
      :text="'لم ينضم اي مدرسوا بعد لـ ' + skillName + ' !! '"
      title="404"
      type="warning"
    ></v-alert>
    </v-container>
  </div>
</template>

<script setup>
import useDataApi from "~/composables/useDataApi";

const { id } = useRoute().params;

const router = useRouter();
let skillName = router.currentRoute.value.query.skillName;

const allUsersRealted = ref([]);

try {
  const { data, error } = await useDataApi(`/api/skill/${id}/users`);
  allUsersRealted.value = data.value.data;
  throw createError({ statusCode: 404, statusMessage: "Skill Not Found" });
  console.log(error.value);
} catch (error) {
  console.log("Err :-C", error);
  if (error) {
    // router.push({path : '/'})
    console.log("errr" + error );
  }
}

// onMounted(() => {
// })
</script>
<style scoped>
.img-container {
  width: 50px;
  height: 50px;
}

.prof-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
}

.teacher-profile {
  position: absolute;
  /* top: 10px; */
  bottom: 85px;
  left: 10px;
  background-color: #000;
  color: #fff;
  border-radius: 30px;
  margin-top: 10px;
  align-items: center;
  /* justify-content:space-between ; */
  padding: 4px;
}
</style>
