<template>
  <div>
    <TheHero :title="indexTitle" :desc="indexDesc" :img="indexImg" />
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
  data(){
    return{
      indexTitle: 'Prodotti per la cura della casa',
      indexDesc: 'Prodotti per la casa di qualità e nel rispetto dell\'ambiente',
      indexImg: '/images/hero.jpeg',
    }
  },  
  mounted() {
    // Animation GSAP

    gsap.from('.scrub-x', {
      scrollTrigger: {
        trigger: '.scrub-x',
        start: 'start bottom',
        end: 'bottom start',
        scrub: 2,
        delay: 0.01,
        ease: 'power4.inOut'
      },
      stagger: 0.1,
      x: -300,
    })

    gsap.from('.scrub-x-rev', {
      scrollTrigger: {
        trigger: '.scrub-x-rev',
        start: 'start bottom',
        end: 'bottom start',
        scrub: 1,
        delay: 0.01,
        ease: 'power4.inOut'
      },
      stagger: 0.1,
      x: 300,
    })

    gsap.from('.scrub-y', {
      scrollTrigger: {
        trigger: '.scrub-y',
        start: 'start bottom',
        end: 'bottom bottom',
        scrub: 1,
        ease: 'power4.inOut',
      },
      stagger: 0.2,
      y: 300,
    })

    gsap.from('.scrub-y-rev', {
      scrollTrigger: {
        trigger: '.scrub-y-rev',
        start: 'start bottom',
        end: 'bottom start',
        scrub: 2,
        ease: 'power4.inOut',
      },
      stagger: 0.2,
      y: -300,
    })

    gsap.from('.scrub-y-rev2', {
      scrollTrigger: {
        trigger: '.scrub-y-rev2',
        start: 'start bottom',
        end: 'bottom center',
        scrub: 0,
        ease: 'power4.inOut',
      },
      stagger: 0.2,
      y: -300,
    })

    gsap.to('.path-y', {
      scrollTrigger: {
        trigger: '.path-y',
        start: 'start bottom',
        end: 'bottom center',
        scrub: 1,
        delay: 0.1,
        ease: 'power4.inOut',
      },
      stagger: 0.2,
      'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
      '-webkit-clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)'
    })

    gsap.from('.scale', {
      scrollTrigger: {
        trigger: '.scale',
        start: 'start bottom',
        end: 'bottom 70%',
        scrub: 2,
        ease: 'power4.inOut',
      },
      stagger: 0.2,
      scale: 0.3,
      opacity: 0
    })



  }
}
</script>
<style lang="scss" scoped>
@import '~/assets/css/main.scss';
</style>
