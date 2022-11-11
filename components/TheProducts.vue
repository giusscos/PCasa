<template>
    <section class="section main_prod">
        <div class="container">
            <div class="header-section scrub-x">
                <h2 class="title-section">
                    Prodotti Ecologici e <span class="evidence">senza</span> Sprechi
                </h2>
                <p class="desc-section">
                    Acquistando i nostri prodotti darai una mano all'ambiente riducendo gli sprechi
                </p>
            </div>
            <div class="content-cards scrub-y">
                <CardProd :info="cardInfo" v-for="(cardInfo, i) in cardsInfo" :key="i" />
            </div>
        </div>
    </section>
</template>
<script>
import gsap from 'gsap'

export default {
    name: 'TheProducts',
    data() {
        return {
            cardsInfo: [
                {
                    'title': 'Detersivi ecologici',
                    'desc': 'Paga solo il detersivo! Il contenitore lo porti da casa o lo forniamo noi!',
                    'route': '/detersivi',
                    'img': '/images/soaps.jpg',
                },
                {
                    'title': 'Artigianato locale',
                    'desc': 'Un ritorno al futuro di una serie di utensili e contenitori dei nostri antenati!',
                    'route': '/artigianato',
                    'img': '/images/ceramics.jpg',
                },
                {
                    'title': 'Prodotti tipici',
                    'desc': 'Porta sulla tua tavola i sapori della calabria!',
                    'route': '/prodotti-tipici',
                    'img': '/images/foods.jpg',
                },
            ]
        }
    },
    mounted() {
        gsap.from('.scrub-x', {
            scrollTrigger: {
                trigger: '.scrub-x',
                start: 'start bottom',
                end: 'bottom 70%',
                scrub: 2,
                delay: 0.01,
                ease: 'power4.inOut'
            },
            stagger: 0.1,
            x: -300,
        })

        gsap.from('.scrub-y', {
            scrollTrigger: {
                trigger: '.scrub-y',
                start: 'start bottom',
                end: 'bottom 80%',
                scrub: 1,
                ease: 'power4.inOut',
            },
            stagger: 0.2,
            y: 300,
        })
    }
}
</script>
<style lang="scss" scoped>
@import '~/assets/css/main.scss';

.main_prod {
    overflow: hidden;

}

.content-cards {
    display: flex;
    flex-wrap: wrap;
    row-gap: $max-size;
    column-gap: $standard-size;
    justify-content: center;
    padding-bottom: $ultra-size;
}

@media (min-width: $md) {
    .content-cards {
        padding: 0 $big-size $ultra-size;
    }
}
</style>