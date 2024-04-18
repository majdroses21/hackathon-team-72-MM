<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
      <v-sooner />
      <div class="poupup" v-if="loggedIn">
        <v-dialog v-model="hasFilledData" persistent max-width="450px">
          <v-form @submit.prevent>
          <v-stepper :items="['Step 1', 'Step 2', 'Step 3',]">

            <template v-slot:item.1>
              <v-card title="Step One" flat> <v-text-field  :rules="[rules.required]" required label="Basic Skill" v-model="basicSkill"></v-text-field>
                <v-text-field type="text" :rules="[rules.required]" required label="Sub Skills" v-model="subSkills"></v-text-field>
                <v-text-field type="text" label="Job Title" v-model="jobTitle"></v-text-field>
                <v-text-field type="text"  :rules="[rules.required]" required label="Education" v-model="education"></v-text-field></v-card>
            </template>

            <template v-slot:item.2>
              <v-card title="Step Two" flat> <v-text-field  :rules="[rules.required]" required label="Current Job" v-model="currentJob"></v-text-field>
                <v-textarea  :rules="[rules.required]" required label="Resume" v-model="resume"></v-textarea></v-card>
            </template>

            <template v-slot:item.3>
              <v-card title="Step Three" flat> <v-text-field  :rules="[rules.required]" required label="Platform Account Link" v-model="platformLink"></v-text-field>
                <v-file-input  :rules="[rules.required]" required label="Upload Profile Picture" v-model="profilePicture"></v-file-input>
                <v-file-input  :rules="[rules.required]" required label="Upload Cover Photo" v-model="coverPhoto"></v-file-input>
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
import { ref } from 'vue';
const router = useRouter();
let hasFilledData = true;
let loggedIn = useState('loggedIn', ()=>false)
const basicSkill = ref('');
const subSkills = ref('');
const jobTitle = ref('');
const education = ref('');
const currentJob = ref("");
const resume = ref("");
const platformLink = ref("");
const profilePicture = ref("");
const coverPhoto = ref("");


const rules = {
  required: (value) => !!value || 'This field is required',
  minLength: (value) => (value && value.length >= 8) || 'Password must be at least 8 characters',
  email: (value) => /.+@.+\..+/.test(value) || 'Invalid email address'
};
const submitForm = () => {
  // You can send the entered data to the server here
  console.log("basicSkill:", basicSkill.value);
  console.log("subSkills:", subSkills.value);
  console.log("jobTitle:", jobTitle.value);
  console.log("education:", education.value);
  console.log("currentJob:", currentJob.value);
  console.log("resume:", resume.value);
  console.log("platformLink:", platformLink.value);
  console.log("profilePicture:", profilePicture.value);
  console.log("coverPhoto:", coverPhoto.value);
  // After sending the data, you can redirect the user to the homepage or any other page
  router.push('/');
  document.querySelector(".poupup").style.display = 'none'
  loggedIn = useState('loggedIn', ()=>true)
  hasFilledData = false

};

</script>

