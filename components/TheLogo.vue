<template>
  <div class="logo_wrapper">
    <NuxtLink class="logo-link" to="/"></NuxtLink>
    <h1 class="logo">Pcasa</h1>
  </div>
</template>
<script>
export default {
  name: "TheLogo",
};
</script>
<style lang="scss" scoped>
.logo_wrapper {
  position: relative;
  .logo-link {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .logo {
    font-size: 3rem;
  }
}
</style>