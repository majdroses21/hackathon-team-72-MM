<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
      <v-sooner />
      <div class="poupup" v-if="loggedIn">
        <v-dialog v-model="hasUserFilledData" max-width="450px">
          <!-- {{ hasFilledData }} -->
          {{ hasUserFilledData + ' ' + profilArr.length }}
          <v-form @submit.prevent>
            <v-stepper :items="['Step 1', 'Step 2', 'Step 3',]">
              <template v-slot:item.1>
                <v-card title="Step One" flat>
                  <!-- <v-text-field :rules="[rules.required]" required label="Basic Skill"
                    v-model="basicSkill"></v-text-field> -->
                  <!-- <v-text-field type="text" :rules="[rules.required]" required label="Sub Skills" v-model="subSkills"></v-text-field> -->
                  <v-autocomplete :items="skilsArray" item-title="name_ar" item-value="id" clearable
                    v-model="subSkills"></v-autocomplete>
                  <v-text-field type="text" label="Job Title" v-model="jobTitle"></v-text-field>
                  <v-text-field type="text" :rules="[rules.required]" required label="Education"
                    v-model="education"></v-text-field>
                </v-card>
              </template>

              <template v-slot:item.2>
                <v-card title="Step Two" flat>
                  <v-text-field :rules="[rules.required]" required label="Current Job"
                    v-model="currentJob"></v-text-field>
                  <v-textarea :rules="[rules.required]" required label="Resume" v-model="resume"></v-textarea>
                </v-card>
              </template>

              <template v-slot:item.3>
                <v-card title="Step Three" flat>
                  <v-text-field :rules="[rules.required]" required label="Platform Account Link"
                    v-model="platformLink"></v-text-field>
                  <v-file-input :rules="[rules.required]" required label="Upload Profile Picture"
                    v-model="profilePicture"></v-file-input>
                  <v-file-input :rules="[rules.required]" required label="Upload Cover Photo"
                    v-model="coverPhoto"></v-file-input>
                  <v-btn @click="submitForm" color="red" type="submit">Submit</v-btn>
                </v-card>
              </template>
            </v-stepper>
          </v-form>
        </v-dialog>
      </div>
    </NuxtLayout>
  </div>
</template>

<style>
body {
  box-sizing: border-box;
}

/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 9px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #d1cfcf;
}

/*
.page-enter-active, .page-leave-active{
  transition: 0.2s all ease-in-out;
}

.page-enter-frome, .page-leave-to{
  opacity: 0;
  transform: scale(0,0);
  filter: blur(1rem);
}
*/
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>

<script setup>
// Import Stor Settings
import { userStore } from '@/store/myProfileData';
const  store = userStore();
const  { usrId, profilArr, userName, usrRating } = storeToRefs(store);

// This For To know if show the popup or hid it
let popupStatus = ref(profilArr);
  useCookie('hasUserFilledData');
  if (popupStatus.value == 0) { // its Main User not fiils data yat => PopUp is showen => it's True
    useCookie('hasUserFilledData').value = true
  } else {
    useCookie('hasUserFilledData').value = false
  }
  console.log(popupStatus.value);

  let hasUserFilledData = ref(useCookie('hasUserFilledData'));



// Here I Get The data  filds Forme The Forme And Send it to tha db  
import useDataApi from "~/composables/useDataApi";

// const router = useRouter();
let loggedIn = ref(useCookie("loggedIn"));
// The Forme info gte data to sent
const subSkills = ref("");
const jobTitle = ref("");
const education = ref("");
const currentJob = ref("");
const resume = ref("");
const platformLink = ref("");
const profilePicture = ref("");
const coverPhoto = ref("");


// This Ruls For Form Valdations
const rules = {
  required: value => !!value || "This field is required",
  minLength: value =>
    (value && value.length >= 8) || "Password must be at least 8 characters",
  email: value => /.+@.+\..+/.test(value) || "Invalid email address"
};

//  in here i'm feching this api to get the info showing in the Select in The Forme
let skilsArray = ref([]);
let topicsArray = ref([]);

const fechDataForSelects = async () => {
  try {
    const { data, error } = await useDataApi('/api/getUserProfile');
    skilsArray.value = data.value.skills
    // topicsArray.value = data.value.topics
  } catch (error) {
  }
}
fechDataForSelects();


// This Stuf for sending images
const onFileChange = (event, type) => {
  const file = event.target.files[0];
  if (type === 'profilePicture') {
    profilePicture.value = file;
  } else if (type === 'coverPhoto') {
    coverPhoto.value = file;
  }
};
// This For Submit The Data 
const submitForm = async () => {
  const formData = new FormData();
  formData.append('user_id', usrId.value);
  formData.append('skill_id', subSkills.value);
  formData.append('jobTitle', jobTitle.value);
  formData.append('education', education.value);
  formData.append('currentJob', currentJob.value);
  formData.append('resume', resume.value);
  formData.append('platformLink', platformLink.value);
  // formData.append('rating', 3);
  formData.append('rating', usrRating.value);
  formData.append('img', profilePicture.value[0]);
  formData.append('coverImg', coverPhoto.value[0]);
  const { data, error } = await useDataApi("/api/setUserProfile", {
    method: "POST",
    body: formData,
  });


};
onMounted(async () => {
   await store.fetchUserProfile();
})

</script>
