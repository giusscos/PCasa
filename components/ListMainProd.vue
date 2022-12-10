<script>
export default {
    mame: 'ListMainProd',
    props: {
        prod: Object
    }
}
</script>
<template>
    <div class="description_wrapper">
        <h3 class="title_prod">
            {{ prod.title }}
        </h3>
        <div class="img_wrapper">
            <img height="800" :src="prod.src" :alt="prod.altSrc">
        </div>
        <div class="text_wrapper">
            <p class="desc_text" v-html="prod.desc"></p>
            <a class="btn_cta btn_cta-text" :href="prod.linkUrl" :title="prod.linkText">
                {{prod.linkText}}
                <RightArrow class="svg_icon" />
            </a>
        </div>
    </div>
</template>
<style>
.description_wrapper{
    padding: 3rem 0;
}
.title_prod{
    flex-basis: 100%;
    line-height: .95;
}
@media (min-width: 1024px){
    .description_wrapper:nth-child(odd)>.img_wrapper{
        order: 1;
    }
}
</style>