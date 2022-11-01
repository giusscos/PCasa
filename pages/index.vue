<template>
  <div class="home">
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="hero-title">
            Gestiamo la plastica<br />
            in modo intelligente
          </h1>
          <NuxtLink to="/" class="hero-link"> Scopri come </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
};
</script>
<style lang="scss" scoped>
@import "~/assets/css/main.scss";
.hero {
  height: 90vh;
  background-image: url("~assets/images/plastic-bottles-hero.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: bottom center;

  .container {
    height: 100%;
    display: flex;
    align-items: center;
  }

  .hero-content {
    padding: $big-size $ultra-size;
    border-radius: $standard-size;
    background-color: $color-prim-blur;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    box-shadow: 3px 5px 15px #666;
    .hero-title {
      font-size: $ultra-size;
      color: $color-seco-darker;
    }
    .hero-link {
      display: block;
      padding: $big-size 0 0;
      font-size: $big-size;
      color: $color-link-darker;

      &:hover {
        text-decoration: 4px underline;
      }
    }
  }
}
</style>