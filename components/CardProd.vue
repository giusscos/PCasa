<template>
    <div class="product_wrapper" :class="index === 1 ? 'right' : ''">
        <NuxtLink :to="info.route" class="link-card" :title="`Visita la pagina ${info.title}`"></NuxtLink>
        <div class="img-product_wrapper rotate">
            <nuxt-img class="img-product" :src="info.img" :alt="`Copertina ${info.title}`" preset="cover"
                sizes="sm:300px md:400px" />
        </div>
        <div class="text-product">
            <h3 class="title">
                {{ info.title }}
            </h3>
            <p class="desc">
                {{ info.desc }}
            </p>
        </div>
    </div>
</template>
<script>
import gsap from 'gsap'

export default {
    name: 'CardProd',
    props: {
        info: Object,
        index: Number,
    },
    mounted() {
        gsap.to('.rotate', {
            scrollTrigger: {
                trigger: '.prods',
                start: 'start bottom',
                end: 'bottom start',
                scrub: 2,
                ease: 'power4.inOut',
            },
            rotate: 90,
        })

        gsap.to('.text-product', {
            scrollTrigger: {
                trigger: '.prods',
                start: 'start bottom',
                end: 'bottom start',
                scrub: 1,
                ease: 'power4.inOut',
                x: 0,
            },
            stagger: 0.1,
            x: 0,
        })
    }
}
</script>
<style lang="scss" scoped>
@import '~/assets/css/main.scss';

.product_wrapper {
    display: flex;
    flex-direction: column;
    &.right {
        .img-product_wrapper {
            order: 0;
            transform: rotate(20deg);
            max-width: 300px;
            aspect-ratio: 9/16;
        }

        .text-product {
            align-items: flex-end;
            transform: translateX(-150px);

            .desc {
                text-align: right;
            }
        }
    }

    .img-product_wrapper {
        transform: rotate(-20deg);
    }

    .text-product {
        transform: translateX(150px);
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;

        .title{
            font-size: $max-size;
        }
        .desc{
            font-size: $big-size;
        }
    }
}
@media (min-width: $md){
    .product_wrapper{
        flex-direction: row;

        &.right{
            .img-product_wrapper{
                order: 1;
            }
        }
    }
}
</style>