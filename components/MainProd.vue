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
            <h2 class="minus_title leading-none">
                Prodotti scelti per <span
                    class="inline-block bg-pcasa-red aspect-square p-2 pt-1 md:p-4 md:pt-2 rounded-full text-pcasa-white leading-none">te</span>
            </h2>
            <div class="flex flex-row gap-x-4 md:gap-x-8 overflow-y-auto pb-10 relative">
                <ListMainProd :prod="mainProd" v-for="(mainProd, i) in mainProdsList" :key="i + 'main-category'" />
            </div>
        </div>
    </section>
</template>
<style>
@import '~/assets/css/main.css';
</style>