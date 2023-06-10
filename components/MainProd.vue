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
        <div class="container mx-auto px-4 overflow-x-hidden flex flex-col gap-y-8">
            <h2 class="text-2xl sm:text-5xl md:text-8xl font-bold leading-none">
                Prodotti scelti per te
            </h2>
            <div class="w-full flex gap-x-8">
                <ListMainProd :prod="mainProd" v-for="(mainProd, i) in mainProdsList" :key="i + 'main-category'" />
            </div>
        </div>
    </section>
</template>
<style>
@import '~/assets/css/main.css';
</style>