<!-- pages/profile.vue -->
<template>
    <v-container>
      <v-card>
        <v-card-title class="headline">
          My Profile
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12">
              <v-text-field v-model="user.name" label="Name"></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-text-field v-model="user.email" label="Email"></v-text-field>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </template>

  <script setup>
import { reactive } from 'vue';

const user = reactive({
  name: 'John Doe',
  email: 'john@example.com',
});
</script>


  <style>
  /* Add custom styles here */
  </style>
