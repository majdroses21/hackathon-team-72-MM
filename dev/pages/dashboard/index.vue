<template>
    <div class="mt-15"></div>
  <v-card>
    <v-tabs
      v-model="tab"
      bg-color="primary"
    >
      <v-tab value="one">Mangment Main Skills</v-tab>
      <v-tab value="two">Mangment Sub-Skills</v-tab>
      <v-tab value="three">Item Three</v-tab>
    </v-tabs>

    <v-card-text>
      <v-window v-model="tab">
        <v-window-item value="one">
          One
        </v-window-item>

        <v-window-item value="two">
          Two
        </v-window-item>

        <v-window-item value="three">
          Three
        </v-window-item>
      </v-window>
    </v-card-text>
  </v-card>
  </template>
<script>
  export default {
    data: () => ({
      tab: null,
    }),
    
  }
</script>
