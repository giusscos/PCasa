<template>
  <div class="home">
    <section class="hero">
      <div class="hero-content">
        <h1 class="hero-title">
          Gestione intelligente<br>
          della plastica
        </h1>
        <NuxtLink to="/" class="hero-link">
          Scopri come
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
}
</script>
<style lang="scss" scoped>
@import '~/assets/css/main.scss';
.hero{
  height: 90vh;
  background-image: url('~assets/images/plastic-bottles-hero.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: bottom center;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  .hero-content{
    margin: 0 $big-size;
    padding: $big-size $ultra-size;
    border-radius: $standard-size;
    background-color: $color-prim-blur;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    .hero-title{
      font-size: $ultra-size;
      color: $color-seco-darker;
    }
    .hero-link{
      display: block;
      padding: $big-size 0 0;
      font-size: $big-size;
      color: $color-link-darker;
    }
  }
}
</style>