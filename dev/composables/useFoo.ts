export default () => {
    return useState('foo', () => 'bar')
  }

  /**
   import useDataApi from "~/composables/useDataApi";

const userName = ref("");
let usrId = ref("");
const userEmail = ref("");
const userImg = ref("");
const usrCovImg = ref("");
const usrCoins = ref("");
const usrRating = ref("");
const profilArr = ref([]);

try {
  const userProfilData = useDataApi("/api/profile");
  const myData = userProfilData.data.value.data;

  userName.value = myData.name;
  usrId.value = myData.id;
  userEmail.value = myData.email;
  userImg.value = myData.img;
  usrCovImg.value = myData.coverImg;
  usrCoins.value = myData.coins;
  profilArr.value = myData.profile;
  usrRating.value = profilArr.value[0].rating;
} catch (error) {
  console.log("Your Error is :", error);
}

const firstName = ref(userName.value.split(" ")[0]);
const lastName = ref(userName.value.split(" ")[1]);
const fullName = ref(firstName.value + " " + lastName.value);

export default userInfo = () => {
  const myId = () => useState("myId", () => usrId.value);
  const myName = () => useState("myName", () => userName.value);
  const myEmail = () => useState("myEmail", () => userEmail.value);
  const myImg = () => useState("myImg", () => userImg.value);
  const myCoverImg = () => useState("myCoverImg", () => usrCovImg.value);
  const myCoins = () => useState("myCoins", () => usrCoins.value);
  const myRating = () => useState("myRating", () => usrRating.value);
  const myFirstname = () => useState("myFirstname", () => firstName.value);
  const myLastname = () => useState("myLastname", () => lastName.value);
  return {
    myId,
    myName,
    myImg,
    myCoverImg,
    myEmail,
    myCoins,
    myRating,
    myFirstname,
    myLastname,
  };
};

   */