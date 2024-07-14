export default defineNuxtRouteMiddleware((to, from) => {
    // Guest + dashboard
    // Guest + guest
    // User + dashboard
    // User + guest

    // const loggedIn = useState('loggedIn', ()=>false)
    // const loggedIn = useCookie("loggedIn").value = false; 


    if(!loggedIn) return navigateTo('/')
  })
