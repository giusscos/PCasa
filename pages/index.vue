<template>
  <div>
    <div class="hero_wrapper">
      <div class="dark-filter"></div>
      <img class="img-hero" src="https://picsum.photos/2000/1080" alt="hero">
      <div class="text-hero">
        <h1 class="title-hero">
          Diamo una seconda vita
          alle Bottiglie di plastica
        </h1>
        <p class="desc-hero">
          Riutilizziamo sempre le stesse bottiglie di plastica per ridurre i rifiuti
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'IndexPage',
}
</script>
<style lang="scss" scoped>
@import '~/assets/css/main.scss';

.hero_wrapper {
  position: relative;
  height: 100vh;

  .dark-filter {
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    opacity: 0.5;
    background-color: #000;
  }

  .img-hero {
    display: block;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
}

.text-hero {
  max-width: 400px;
  z-index: 5;
  position: absolute;
  top: 60%;
  left: 40%;
  transform: translate(-50%, -50%);
}

.title-hero,
.desc-hero {
  color: $color-seco;
}

.title-hero {
  line-height: 0.95;
  font-size: $big-size;
  margin-bottom: $small-size;
}

.desc-hero {
  line-height: 1.2;
  font-size: $standard-size;
}

@media (min-width: $md) {
  .title-hero {
    line-height: 1.1;
    font-size: $max-size;
  }

  .desc-hero {
    font-size: $big-size;
  }
}
</style>
