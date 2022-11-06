<template>
  <div>
    <TheHero />
    <TheProducts />
    <TheAbout />
    <ThePartner />
    <Call2Action />
  </div>
</template>
<script>
import gsap from 'gsap'
export default {
  name: 'IndexPage',
  mounted() {
    const tl = gsap.timeline({ defaults: { ease: 'power4.inOut', duration: 1 } })
    tl.to('.img-hero', { 'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', '-webkit-clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', duration: 2 })
      .to('.title-hero, .desc-hero', { x: 0, stagger: 0.2 }, '-=0.8')

      
  }
}
</script>
<style lang="scss" scoped>
@import '~/assets/css/main.scss';
</style>
