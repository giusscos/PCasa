<template>
    <div class="card_wrapper scrub-y">
        <NuxtLink :to="info.route" class="link-card"></NuxtLink>
        <header class="header-card">
            <h3 class="title-card">
                {{ info.title }}
            </h3>
            <p class="desc-card">
                {{  info.desc  }}
            </p>
        </header>
        <div class="img-card_wrapper">
            <img class="img-card" :src="info.img" :alt="`Copertina ${info.title}`">
        </div>
    </div>
</template>
<script>
export default {
    name: 'CardProd',
    props: {
        info: Object,
    }
}
</script>
<style lang="scss" scoped>
@import '~/assets/css/main.scss';

.card_wrapper {
    flex-basis: calc((100% * 12) / 12);
    position: relative;
    overflow: hidden;
    border-radius: $smaller-size;
    background-color: #f7f7f7;
    box-shadow: 3px 5px 50px #ddd;

    display: flex;
    flex-direction: column;

    transition: $fast-transition;

    &:hover{
        box-shadow: 10px 20px 50px #999;
    }
    .link-card {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
    }

    .header-card {
        padding: $big-size $smallest-size $smallest-size;
        text-align: center;
        flex-grow: 1;
        .title-card {
            text-transform: capitalize;
            font-size: $big-size;
        }
        .desc-card{
            padding: $smaller-size $smallest-size 0;
            font-size: $standard-size;
        }
    }
    .img-card {
        display: block;
    }
}
@media (min-width: $md){
    .card_wrapper{
        flex-basis: calc(((100% * 6) / 12) - $standard-size); 
    }
}
@media (min-width: $lg){
    .card_wrapper{
        flex-basis: calc(((100% * 4) / 12) - $standard-size);
    }
}
</style>