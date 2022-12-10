<script>
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
if(process.client){
    gsap.registerPlugin(ScrollTrigger)
}
export default{
    name: 'ClipPathReverse',
    mounted(){
        const pathTlReverse = gsap.timeline({
            defaults: {
                ease: 'expo.inOut',
                duration: 2,
            }
        })

        pathTlReverse.from('.animation_wrapper-out', {
            scrollTrigger: {
                trigger: '.circle_animation-out',
                scrub: 1,
                markers: false,
                start: 'top 100%',
                end: 'bottom 55%',
            },
            transform: `scale(50)`
        })
        .to('.animation_wrapper-out', {
            scrollTrigger: {
                trigger: '.circle_animation-out',
                scrub: 1,
                markers: false,
                start: 'top 100%',
                end: 'bottom 55%',
            },
            transform: `scale(1)`
        })
    }
}
</script>
<template>
    <div class="animation_wrapper-out">
        <div class="circle_animation-out">
        </div>
    </div>
</template>
<style scoped>
.animation_wrapper-out {
    display: flex;
    align-items: flex-start;
    justify-content: center;
}
.circle_animation-out {
    background-color: var(--pc-color-seco-darker);
    width: 100px;
    height: 100px;
    aspect-ratio: 1/1;
    -webkit-clip-path: circle(50% at 50% 50%);
    clip-path: circle(50% at 50% 50%);
}
</style>