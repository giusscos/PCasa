<script>
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger';
if (process.client) {
    gsap.registerPlugin(ScrollTrigger)
}
export default {
    name: 'SectionHook',
    mounted() {
        const hookTl = gsap.timeline({
            defaults: {
                ease: 'power4.inOut',
                duration: 1.5,
            }
        })

        hookTl.from('.img_wrapper.about', {
            scrollTrigger: {
                trigger: '.img_wrapper.about',
                markers: false,
                scrub: 1,
                start: 'top 100%',
                end: 'bottom 90%',
            },
            'clip-path': 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)',
            '-webkit-clip-path': 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)',
        })
    }
}
</script>
<template>
    <section class="section about-us">
        <div class="container">
            <div class="header_section">
                <h2 class="title_section">
                    Siamo un azienda che pensa in <span class="mark-green">verde</span>
                </h2>
            </div>
            <div class="description_wrapper">
                <div class="img_wrapper about">
                    <img width="400" src="/img/about-us.webp" alt="Il team pcasa">
                </div>
                <div class="text_wrapper">
                    <p class="desc_text">
                        Ci impegniamo nel proporre soluzioni <span class="mark-green">verdi</span> per rispettare
                        l'ambiente che ci circonda.<br>Ti va di unirti a noi?🌱
                    </p>
                    <a class="btn_cta btn_cta-text" href="#" title="Scopri come entrare nel nostro team">
                        Scopri come
                        <RightArrow class="svg_icon" />
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>
<style>

</style>