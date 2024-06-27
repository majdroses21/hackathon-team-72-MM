export default defineNuxtRouteMiddleware((to, from) => {
    // Guest + dashboard
    // Guest + guest
    // User + dashboard
    // User + guest

    const loggedIn = useState('loggedIn', ()=>false)


    if(loggedIn.value) return navigateTo('/dashboard')


    // const guestPages
    // Only guest [login, register]
    // Only user [dashboard]

    // if (to.params.id === '1') {
    //   return abortNavigation()
    // }
    // // In a real app you would probably not redirect every route to `/`
    // // however it is important to check `to.path` before redirecting or you
    // // might get an infinite redirect loop
    // if (to.path !== '/') {
    //   return navigateTo('/')
    // }
  })
