export default defineNuxtRouteMiddleware(
    (to, from)=>{
        if (localStorage.getItem("token")) {
          useState("loggedIn", () => true);    
          if (to.name == "Sign-in" || to.name == "register") {
            return navigateTo({name: "index"})
          }   
        }
        if (!localStorage.getItem("token") && to.name == 'my-profile') {
          return navigateTo({name: "index"})
        }
      }
)