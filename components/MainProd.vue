<script>
export default {
    data() {
        return {
            mainProdsList: [
                {
                    'title': 'Detersivi alla spina',
                    'desc': `Porta un contenitore nel nostro negozio, al resto penseremo noi.`,
                    'src': 'detersivi.webp',
                    'altSrc': 'Detersivi alla spina',
                    'linkText': 'Scopri di più',
                    'linkUrl': '#',
                },
                {
                    'title': 'Artigianato locale',
                    'desc': `Oggetti che utilizzavano i nostri antenati sviluppati con le pi&ugrave; moderne tecnologie.`,
                    'src': 'artigianato.webp',
                    'altSrc': 'Artigianato locale',
                    'linkText': 'Scopri di più',
                    'linkUrl': '#',
                },
                {
                    'title': 'Prodotti tipici Calabresi',
                    'desc': `Porta sulla tua tavola i sapori unici della calabria e condividili con le persone che ami.`,
                    'src': 'prodotti-tipici.webp',
                    'altSrc': 'Prodotti tipici Calabresi',
                    'linkText': 'Scopri di più',
                    'linkUrl': '#',
                },
            ]
        }
    }
}
</script>
<template>
    <section class="section py-20">
        <div class="container mx-auto px-4 flex flex-col gap-y-4">
            <h2 class="title-sm leading-none">
                Prodotti scelti per <span
                    class="bg-pcasa-accent aspect-square pcasa-marker">te</span>
            </h2>
            <div class="grid grid-cols-1 max-w-[350px] mx-auto sm:mx-0 sm:max-w-none sm:grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
                <ListMainProd :prod="mainProd" v-for="(mainProd, i) in mainProdsList" :key="i + 'main-product'" />
            </div>
        </div>
    </section>
</template>
<style>
@import '~/assets/css/main.css';
</style>