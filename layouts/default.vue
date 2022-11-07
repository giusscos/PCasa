<template>
    <div class="default_layouts">
        <TheHeader />
        <main>
            <Nuxt />
        </main>
        <LazyTheFooter />
    </div>
</template>
<script>
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

if (process.client) {
    gsap.registerPlugin(ScrollTrigger);
}

export default {
    name: "defaultLayouts",
    mounted() {
        const bodyEl = document.querySelector('body')

        window.addEventListener('resize', (el) => {
            const currentWidth = el.target.innerWidth
            if (currentWidth > 750 && bodyEl.classList.value === 'open') {
                bodyEl.classList.remove('open')
            }
        })

        // Animation GSAP

        let tl = gsap.timeline()

        tl.to('.logo, .item-link', {
            opacity: 1,
            stagger: 0.2,
            ease: 'expo.inOut',
            duration: 1,
        })
            // .from('.main_footer > .container', {
            //     scrollTrigger: {
            //         trigger: '.main_footer > .container ',
            //         start: 'start bottom',
            //         end: 'bottom start',
            //         scrub: 0,
            //     },
            //     y: -400,
            // })
    }
}
</script>
<style lang="scss" scoped>
.default_layouts {
    display: flex;
    flex-direction: column;

    main {
        flex-grow: 1;
    }
}
</style>