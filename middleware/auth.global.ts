export default defineNuxtRouteMiddleware((to, _from) => {
  const session = useSupabaseSession();

  if (!session.value && to.path.includes("/dashboard")) {
    return navigateTo("/login");
  }

  if (session.value && (to.path === "/login" || to.path === "/sign-up")) {
    return navigateTo("/dashboard");
  }
});
