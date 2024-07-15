<template>
  <v-container class="text-center">
    <h1>أختر المجال الذي تدرسة ثم اختر المهارة</h1>
    <h3>غطي احتياجاتك من المهارات في جميع التخصصات</h3>
  </v-container>
  <v-container>
    <v-row>
      <v-col
        lg="3"
        md="4"
        sm="6"
        xs="6"
        v-for="mSkill in allMinSkills"
        :key="mSkill.id"
      >
        <nuxt-link :to="`/skills/` + mSkill.id" style="text-decoration: none">
          <v-card
            class="mx-auto"
            max-width="200"
            style="width: 300px !important"
          >
            <v-img
              class="align-end text-white"
              height="200"
              :src="`https://api-mahrtex.000webhostapp.com` + mSkill.img"
              cover
            >
          </v-img>
            <!-- TODO: When i uplod the API to server change this link -->

            <v-card-text>
              <h1 style="text-align: center">{{ mSkill.name_ar }}</h1>
            </v-card-text>
          </v-card>
        </nuxt-link>
      </v-col>
    </v-row>
  </v-container>

  <v-pagination
    v-model="page"
    :length="totalPages"
    @update:model-value="getAllMinSkills"
    color="purple"
    elevation="4"
  ></v-pagination>
</template>

<script setup>
//   import { ref, onMounted } from "vue";
import useDataApi from "~/composables/useDataApi";
const allMinSkills = ref([]);
const totalPages = ref("");
const page = ref(1);

const getAllMinSkills = async () => {
  const { data, error } =  await useDataApi(`/api/topic?page=${page.value}`, {});
  allMinSkills.value = data.value.data.data;
  totalPages.value = data.value.totalPage;
};

onMounted(() => {
  getAllMinSkills();
});
</script>
