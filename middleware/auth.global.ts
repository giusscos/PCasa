export default defineNuxtRouteMiddleware(async (to, from) => {
  const session = useSupabaseSession();

  if (!session.value && (to.path === "/dashboard" || to.path === "/register")) {
    return navigateTo("/login");
  }

  if (session.value && (to.path === "/login" || to.path === "/register")) {
    return navigateTo("/dashboard");
  }
});
