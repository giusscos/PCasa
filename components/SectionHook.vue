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

        hookTl.from('.img_wrapper.hook', {
            scrollTrigger: {
                trigger: '.img_wrapper.hook',
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
    <section class="section hook">
        <div class="container">
            <div class="header_section">
                <h2 class="title_section">
                    Fai <span class="mark-seco-darker">ecologia</span> anche tu
                </h2>
                <div class="description_wrapper ">
                    <div class="img_wrapper hook">
                        <!-- <nuxt-img preset="bodyImg" width="400" src="hook.webp" alt="Fare ecologia" /> -->
                        <img width="400" src="/img/ecologia-semplice.webp" alt="Inizia a fare ecologia portando dei contenitori nel nostro negozio">
                    </div>
                    <div class="text_wrapper">
                        <p class="desc_text">
                            Fare ecologia &eacute; semplice!<br>Con poche abitudini puoi dare una mano a te stesso, al
                            tuo portafogli e al tuo Pianeta 🌍
                        </p>
                        <a class="btn_cta btn_cta-text" href="#" title="Scopri come fare ecologia">
                            Scopri come
                            <RightArrow class="svg_icon" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<style>
.title_section {
    font-size: 5rem;
    font-weight: 600;
    line-height: .75;
    width: 60%;
    letter-spacing: -0.2rem;
    margin-bottom: 5rem;
    text-transform: capitalize;
}

.description_wrapper {
    gap: 2rem;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;
}

.img_wrapper {
    -webkit-clip-path: polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%);
    clip-path: polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%);
}

.text_wrapper {
    display: flex;
    flex-direction: column;
    gap: 3rem;
}

.desc_text {
    font-size: 3.5rem;
    font-weight: 400;
    line-height: 1;
}

@media (min-width: 1024px) {
    .img_wrapper {
        flex-basis: calc((100% * 6) / 12);
    }

    .text_wrapper {
        flex-basis: calc((100% * 5) / 12);
    }
    .title_section{
        font-size: 7rem;
        line-height: .8;
    }
    .desc_text{
        font-size: 5rem;
    }
}
</style>