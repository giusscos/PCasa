<template>
  <div class="hero_wrapper">
    <div class="text-hero">
      <h1 class="title-hero">
        {{ title }}
      </h1>
      <p class="desc-hero">
        {{ desc }}
      </p>
    </div>
    <div class="img-hero_wrapper">
      <div class="dark-filter"></div>
      <nuxt-img class="img-hero" alt="hero" :src="img" preset="fullOptimize" />
    </div>
  </div>
</template>
<script>
import gsap from 'gsap'

export default {
  name: 'TheHero',
  props: {
    title: String,
    desc: String,
    img: String,
  },
  mounted() {
    const tl = gsap.timeline({ defaults: { ease: 'power4.inOut', duration: 1 } })
    tl.to('.img-hero', {
      'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
      '-webkit-clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
      duration: 2,
    })
      .to('.title-hero, .desc-hero', {
        x: 0,
        opacity: 1,
        stagger: 0.2
      }, '-=0.8')
  }
}
</script>
<style lang="scss" scoped>
@import '~/assets/css/main.scss';

.hero_wrapper {
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);

  overflow: hidden;
  background-color: $color-prim-darker;

  .img-hero_wrapper {
    position: relative; 
    height: 100%;
    width: 100%;
    .dark-filter {
      z-index: 5;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;

      opacity: 0.5;
      background-color: #000;
    }
    .img-hero {
      z-index: 1;
      display: block;
      object-fit: cover;
      object-position: center;

      pointer-events: none;
      -webkit-clip-path: polygon(0 100%, 100% 100%, 100% 100%, 0% 100%);
      clip-path: polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%);
    }
  }

}

.text-hero {
  padding: $ultra-size $small-size $big-size;
  align-self: flex-end;
  max-width: 400px;
  height: 400px;
  z-index: 5;
  overflow: hidden;
}

.title-hero,
.desc-hero {
  color: $color-seco;
  transform: translateX(-200%);
  opacity: 0;
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