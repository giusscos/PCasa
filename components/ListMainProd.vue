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
            <img height="800" :src="`img/${prod.src}`" :alt="prod.altSrc">
            <!-- <nuxt-img preset="bodyImg" height="800" :src="prod.src" :alt="prod.altSrc" loading="lazy" /> -->
        </div>
        <div class="text_wrapper">
            <p class="desc_text" v-html="prod.desc"></p>
            <a class="btn_cta btn_cta-text" :href="prod.linkUrl" :title="prod.linkText">
                {{ prod.linkText }}
            </a>
        </div>
    </div>
</template>
<style scoped>
.description_wrapper {
    padding: 3rem 0;
}

.text_wrapper>.btn_cta-text,
.text_wrapper>.btn_cta-text>.svg_icon {
    color: var(--pc-color-white);
    fill: var(--pc-color-white);
}

.text_wrapper>.btn_cta-text:hover,
.text_wrapper>.btn_cta-text:hover>.svg_icon {
    color: var(--pc-color-link);
    fill: var(--pc-color-link);
}

.title_prod {
    font-size: 3.85rem;
    flex-basis: 100%;
    font-weight: 500;
    line-height: .95;
}

@media (min-width: 1024px) {
    .description_wrapper:nth-child(odd)>.img_wrapper {
        order: 1;
    }

    .title_prod {
        font-size: 5.85rem;
    }
}
</style>