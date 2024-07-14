import { defineStore } from "pinia";
// Import API Setting From Composempels
import useDataApi from "~/composables/useDataApi";
export const userStore = defineStore("user", {
  state: () => ({
    usrId: "",
    userName: "",
    userEmail: "",
    userImg: "",
    usrCovImg: "",
    usrCoins: "",
    usrRating: "",
    profilArr: ref([]),
    hasFilledData: null,
  }),
  actions: {
    async fetchUserProfile() {
      try {
        const userProfilData = await useDataApi("/api/profile");
        // console.log("%cFierd", "color: red;");
        const myData = userProfilData.data.value.data;

        this.usrId = myData.id;
        this.userName = myData.name;
        this.userEmail = myData.email;
        this.userImg = myData.img;
        this.usrCovImg = myData.coverImg;
        this.usrCoins = myData.coins;
        this.profilArr = myData.profile;
        // this.usrRating = profilArr.value[0].rating;
      } catch (error) {
        console.log("Your Error is:", error);
      }
    },
  },
});
