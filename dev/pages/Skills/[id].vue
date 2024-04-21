<template>
  <Head>
    <title>Mx| قسم {{ topicTitle }}</title>
  </Head>
  <v-container class="mt-14">
    <v-img class="align-end" height="200" :src="topicImg" cover></v-img>
  </v-container>

  <v-container>
    <v-row v-if="skills.length">
      <v-col
        lg="2"
        md="3"
        sm="4"
        xs="4"
        v-for="(onSkill, i) in skills"
        :key="i"
      >
        <v-card
          class="mx-auto"
          max-width="344"
          :to="{
            path: '/Skills/users/' + onSkill.id,
            query: { skillName: onSkill.name_ar },
          }"
          style="text-decoration: none"
        >
          <v-img height="200px" :src="onSkill.img" cover></v-img>

          <v-card-title class="text-center">
            <h3>{{ onSkill.name_en }}</h3>
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
    <v-alert
      v-else
      density="compact"
      text="No Any Skills Yet !"
      title="404"
      type="warning"
    ></v-alert>
  </v-container>
</template>

<script setup>
import useDataApi from "~/composables/useDataApi";
const { id } = useRoute().params;

const skills = ref([]);
const topicImg = ref("");
const topicTitle = ref("");

const getAllRelatedSkills = async () => {
  try {
    
    const { data ,error } = await useDataApi(`/api/topic/` + id);
    console.log(data.value.data);
    skills.value = data.value.data.skill;
    console.log(error);

  } catch (error) {
    console.log(error);
  }
};

const getTobicInfo = async () => {
  try {
    const {data , error} = await useDataApi(`/api/topic/` + id);
    topicImg.value = data.value.data.img;
    topicTitle.value = data.value.data.name_ar;
  } catch (error) {
    console.log(error);
  }
};

onMounted(() => {
  getAllRelatedSkills();
  getTobicInfo();
});
</script>
