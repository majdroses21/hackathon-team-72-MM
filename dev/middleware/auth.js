export default defineNuxtRouteMiddleware((to, from) => {
    // Guest + dashboard
    // Guest + guest
    // User + dashboard
    // User + guest

    const loggedIn = useState('loggedIn', ()=>false)

    console.log('auth.js middleware says: loggedIn.value = ', loggedIn.value)

    if(!loggedIn.value) return navigateTo('/')
  })
