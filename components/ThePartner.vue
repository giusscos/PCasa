<template>
    <section class="section partner">
        <div class="container">
            <div class="header-section">
                <h2 class="title-section">
                    I nostri <span class="evidence">Fornitori</span>
                </h2>
                <p class="desc-section">
                    Ci affidiamo ad aziende e professionisti per portare qualit&aacute; e valore ai nostri prodotti
                </p>
            </div>
            <div class="content-gallery">
                <GalleryPartner :info="partnerInfo" v-for="(partnerInfo, i) in partnersInfo" :key="i" />
            </div>
        </div>
    </section>
</template>
<script>
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
    }
}
</script>
<style lang="scss" scoped>
@import '~/assets/css/main.scss';

.section {
    &.partner {
        .header-section {
            margin-left: auto;
            align-items: flex-end;
            text-align: right;
        }
    }
}

.content-gallery {
    padding-top: $bigger-size;
    display: flex;
    flex-wrap: wrap;
    row-gap: $bigger-size;
    column-gap: $standard-size;
    justify-content: center;
    align-items: center;
}
</style>