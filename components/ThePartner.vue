<template>
    <section class="section partner">
        <div class="container">
            <div class="header-section scrub-x-rev">
                <h2 class="title-section">
                    I nostri <span class="evidence">Fornitori</span>
                </h2>
                <p class="desc-section">
                    Ci affidiamo ad aziende e professionisti per portare qualit&aacute; e valore ai nostri prodotti
                </p>
            </div>
        </div>
        <div class="content-gallery">
            <LazyGalleryPartner :info="partnerInfo" v-for="(partnerInfo, i) in partnersInfo" :key="i" />
        </div>
    </section>
</template>
<script>
import gsap from 'gsap'

export default {
    name: 'ThePartner',
    data() {
        return {
            partnersInfo: [
                {
                    'name': 'Natural Soap',
                    'link': 'https://naturalsoap.it/',
                    'svg': 'partner-natural-soap.svg',
                },
                {
                    'name': 'Stan Home',
                    'link': 'https://stanhome.it/',
                    'svg': 'partner-stanhome.svg',
                },
                {
                    'name': 'Yodeyma',
                    'link': 'https://www.yodeyma.com/italia/it/',
                    'svg': 'partner-yodeyma.svg',
                },
                {
                    'name': 'Casa Forciniti',
                    'link': 'https://casaforciniti.it/',
                    'svg': 'partner-casa-forciniti.svg',
                },
            ],
        }
    },
    mounted() {
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

.section {
    &.partner {
        overflow: hidden;

        .header-section {
            margin-left: auto;
            align-items: flex-end;
            text-align: right;
        }
    }
}

.content-gallery {
    padding: $bigger-size $big-size;
    display: flex;
    flex-wrap: wrap;
    row-gap: $bigger-size;
    column-gap: $standard-size;
    justify-content: center;
    align-items: center;
}
</style>