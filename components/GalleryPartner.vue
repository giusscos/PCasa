<template>
    <div class="partner_wrapper">
        <a :href="info.link" target="_blank" class="link-partner" :title="`Visita il sito di ${info.name}`"></a>
        <div class="svg-partner" v-html="require(`~/assets/svg/${info.svg}?raw`)"></div>
    </div>
</template>
<script>
export default {
    name: 'GalleryPartner',
    props: {
        info: Object,
    },
}
</script>
<style lang='scss' scoped>
@import '~/assets/css/main.scss';

.partner_wrapper {
    position: relative;
    flex-basis: calc(((100% * 12) / 12) - $standard-size);
    .link-partner {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }

    .svg-partner{
        display: flex;
        align-items: center;
        justify-content: center;
    }
}

@media (min-width: $sm){
    .partner_wrapper{
        flex-basis: calc(((100% * 6) / 12) - $standard-size);
    }
}
@media (min-width: $md){
    .partner_wrapper{
        flex-basis: calc(((100% * 3) / 12) - $standard-size);
    }
}
</style>