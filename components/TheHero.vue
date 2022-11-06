<template>
  <div class="hero_wrapper">
    <div class="text-hero">
      <h1 class="title-hero">
        Diamo una seconda vita
        alle Bottiglie di plastica
      </h1>
      <p class="desc-hero">
        Riutilizziamo sempre le stesse bottiglie di plastica per ridurre i rifiuti
      </p>
    </div>
    <div class="img-hero_wrapper">
      <div class="dark-filter"></div>
      <img class="img-hero" src="https://picsum.photos/2000/1080" alt="hero">
    </div>
  </div>
</template>
<script>
export default {
  name: 'TheHero',
}
</script>
<style lang="scss" scoped>
@import '~/assets/css/main.scss';

.hero_wrapper {
  height: 100vh;
  display: grid;
  grid-template-columns: repeat(1, 1fr);

  overflow: hidden;
  background-color: $color-prim-darker;

  .img-hero_wrapper {
    position: relative;

    .dark-filter {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;

      opacity: 0.5;
      background-color: #000;
    }
  }

  .img-hero {
    height: 100%;
    display: block;
    object-fit: cover;
    object-position: center;

    pointer-events: none;
    -webkit-clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0% 100%);
    clip-path: polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%);
  }
}

.text-hero {
  padding: $ultra-size $small-size;
  align-self: flex-end;
  max-width: 400px;
  height: 400px;
  z-index: 5;
  overflow-x: hidden;
}

.title-hero,
.desc-hero {
  color: $color-seco;
  transform: translateX(-200%);
}

.title-hero {
  line-height: 1;
  font-size: $max-size;
  margin-bottom: $small-size;
}

.desc-hero {
  line-height: 1.2;
  font-size: $big-size;
}

@media (min-width: $md) {
  .hero_wrapper {
    grid-template-columns: repeat(2, 1fr);
    
    .text-hero {
      align-self: center;
      margin-left: auto;
      text-align: right;
      max-width: 600px;
      
      .title-hero,
      .desc-hero {
        transform: translateX(100%);
      }
    }
  }
}
</style>