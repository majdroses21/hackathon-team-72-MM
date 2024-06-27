export default defineNuxtRouteMiddleware((to, from) => {
    // Guest + dashboard
    // Guest + guest
    // User + dashboard
    // User + guest

    const loggedIn = useState('loggedIn', ()=>false)


    if(!loggedIn.value) return navigateTo('/')
  })
