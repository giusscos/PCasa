<template>
    <section class="section main_prod">
        <div class="container">
            <div class="header-section">
                <h2 class="title-section scrub-x">
                    Prodotti Ecologici e <span class="evidence">senza</span> Sprechi
                </h2>
                <p class="desc-section scrub-x">
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
export default {
    name: 'TheProducts',
    data() {
        return {
            cardsInfo: [
                {
                    'title': 'Detersivi ecologici',
                    'desc': 'Paga solo il detersivo! Il contenitore lo porti da casa o lo forniamo noi!',
                    'route': '/detersivi',
                    'img': '/images/noctua-nh-d15s-2.jpeg',
                },
                {
                    'title': 'Artigianato locale',
                    'desc': 'Un ritorno al futuro di una serie di utensili e contenitori dei nostri antenati!',
                    'route': '/artigianato',
                    'img': '/images/noctua-nh-d15s-3.jpeg',
                },
                {
                    'title': 'Prodotti tipici',
                    'desc': 'Porta sulla tua tavola i sapori della calabria!',
                    'route': '/prodotti-tipici',
                    'img': '/images/noctua-nh-d15s-4.jpeg',
                },
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
@import '~/assets/css/main.scss';

.main_prod{
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