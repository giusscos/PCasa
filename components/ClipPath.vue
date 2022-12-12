<script>
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
if(process.client){
    gsap.registerPlugin(ScrollTrigger)
}
export default{
    name: 'ClipPath',
    mounted(){
        const pathTl = gsap.timeline({
            defaults: {
                ease: 'expo.inOut',
                duration: 2,
            }
        })

        pathTl.to('.animation_wrapper-in', {
            scrollTrigger: {
                trigger: '.circle_animation-in',
                scrub: 1,
                markers: false,
                start: 'top 70%',
                end: 'bottom 0',
            },
            transform: `scale(50)`
        })
    }
}
</script>
<template>
    <div class="animation_wrapper-in">
        <div class="circle_animation-in">
        </div>
    </div>
</template>
<style scoped>
.animation_wrapper-in {
    display: flex;
    align-items: flex-start;
    justify-content: center;
}
.circle_animation-in {
    background-color: var(--pc-color-seco-darker);
    width: 100px;
    height: 100px;
    aspect-ratio: 1/1;
    -webkit-clip-path: circle(50% at 50% 50%);
    clip-path: circle(50% at 50% 50%);
}
</style>