<template>
    <v-container class="mt-14">
        <v-img class="align-end" height="200" :src="topicImg" cover></v-img>
    </v-container>

    <v-container>
        <v-row>
            <v-col lg="2" md="3" sm="4" xs="4" v-for="(onSkill, i) in skills" :key="i" v-if="skills.length">
                <nuxt-link :to="'/Skills/users/' + onSkill.id"  style="text-decoration:none;" >
                    <v-card class="mx-auto" max-width="344">
                        <v-img height="200px" :src="onSkill.img" cover></v-img>

                        <v-card-title class=" text-center ">
                            <h3> {{ onSkill.name_en }} </h3>
                        </v-card-title>
                    </v-card>
                </nuxt-link>
            </v-col>
            <v-alert v-else density="compact" text="No Any Skills Yet !" title="404" type="warning"></v-alert>
        </v-row>
        
    </v-container>
</template>

<script setup>
const { id } = useRoute().params;
const url = "http://127.0.0.1:8000/api/topic/" + id;

import { ref } from "vue";

const skills = ref([]);

const topicImg = ref('');

const getAllRelatedSkills = async () => {
    await fetch(`http://127.0.0.1:8000/api/topic/` + id)
        .then((res) => res.json())
        .then((data) => skills.value = data.data.skill)
        .catch(() => { })
}

const getTobicImg = async () => {
    await fetch(`http://127.0.0.1:8000/api/topic/` + id)
        .then((res) => res.json())
        .then((data) => topicImg.value = data.data.img)
        .catch(() => { })
}

onMounted(() => {
    getAllRelatedSkills();
    getTobicImg()
})



</script>