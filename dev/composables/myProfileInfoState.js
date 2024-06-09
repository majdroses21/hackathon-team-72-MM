import useDataApi from '~/composables/useDataApi'

export default function useUserState() {
  const userName = useState('userName', () => '')
  const usrId = useState('usrId', () => '')
  const userEmail = useState('userEmail', () => '')
  const userImg = useState('userImg', () => '')
  const usrCovImg = useState('usrCovImg', () => '')
  const usrCoins = useState('usrCoins', () => '')
  const usrRating = useState('usrRating', () => '')
  const profilArr = useState('profilArr', () => [])

  const fetchUserProfile = async () => {
    try {
      const userProfilData = await useDataApi('/api/profile')
      const myData = userProfilData.data.value.data
      console.log(myData)

      userName.value = myData.name
      usrId.value = myData.id
      userEmail.value = myData.email
      userImg.value = myData.img
      usrCovImg.value = myData.coverImg
      usrCoins.value = myData.coins
      profilArr.value = myData.profile
      usrRating.value = profilArr.value[0].rating
    } catch (error) {
      console.log('Your Error is:', error)
    }
  }

  const firstName = computed(() => userName.value.split(' ')[0])
  const lastName = computed(() => userName.value.split(' ')[1])
  const fullName = computed(() => `${firstName.value} ${lastName.value}`)

  return {
    userName,
    usrId,
    userEmail,
    userImg,
    usrCovImg,
    usrCoins,
    usrRating,
    profilArr,
    fetchUserProfile,
    firstName,
    lastName,
    fullName,
  }
}
