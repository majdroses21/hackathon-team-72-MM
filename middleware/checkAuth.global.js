export default defineNuxtRouteMiddleware(
    (to, from)=>{
        if (useCookie("token").value) {
          useCookie("loggedIn").value = true; 
          
          if (to.name == "Sign-in" || to.name == "register") {
            return navigateTo({name: "index"})
          }   
        }
        if (!useCookie("token").value && to.name == 'my-profile') {
          return navigateTo({name: "index"})
        }
      }
)