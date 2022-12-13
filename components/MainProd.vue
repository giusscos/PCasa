<script>
export default {
    data() {
        return {
            mainProdsList: [
                {
                    'title': 'Detersivi alla spina🧴',
                    'desc': `Porta un contenitore nel nostro negozio, al resto penseremo noi.`,
                    'src': 'detersivi.webp',
                    'altSrc': 'Detersivi alla spina',
                    'linkText': 'Scopri i nostri detersivi',
                    'linkUrl': '#',
                },
                {
                    'title': 'Artigianato locale🏺',
                    'desc': `Oggetti che utilizzavano i nostri antenati sviluppati con le pi&ugrave; moderne tecnologie.`,
                    'src': 'artigianato.webp',
                    'altSrc': 'Artigianato locale',
                    'linkText': 'Scopri il nostro artigianato',
                    'linkUrl': '#',
                },
                {
                    'title': 'Prodotti tipici Calabresi😋',
                    'desc': `Porta sulla tua tavola i sapori unici della calabria e condividili con le persone che ami.`,
                    'src': 'prodotti-tipici.webp',
                    'altSrc': 'Prodotti tipici Calabresi',
                    'linkText': 'Scopri i nostri prodotti tipici',
                    'linkUrl': '#',
                },
            ]
        }
    }
}
</script>
<template>
    <section class="section main_prod">
        <div class="container">
            <div class="header_section">
                <h2 class="title_section">
                    Prodotti scelti per te
                </h2>
            </div>
            <ListMainProd :prod="mainProd" v-for="(mainProd, i) in mainProdsList" :key="3000 - i " />
        </div>
    </section>
</template>
<style scoped>
.section.main_prod {
    font-size: 4rem;
    font-weight: 600;
    color: var(--pc-color-white);
    background-color: var(--pc-color-seco-darker);
}
.section.main_prod .title_section{
    line-height: .9;
}
</style>