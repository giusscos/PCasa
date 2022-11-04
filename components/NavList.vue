<template>
    <ul class="list">
        <li class="list-item" v-for="(link, i) in links" :key="i" @click="setClose">
            <NuxtLink :to="link.route" class="item-link">
                {{ link.name }}
            </NuxtLink>
        </li>
    </ul>
</template>
<script>
export default {
    name: 'NavList',
    props: {
        links: Array
    },
    methods: {
        setClose(){
            const bodyEl = document.querySelector('body')

            if(bodyEl.classList.value === 'open'){
                bodyEl.classList.remove('open')
            }
        }
    }
}
</script>
<style lang="scss" scoped>
@import '~/assets/css/main.scss';

.list {
    pointer-events: none;
    z-index: 99;
    display: flex;
    gap: $bigger-size;
    flex-direction: column;

    .list-item {
        overflow: hidden;
        text-align: center;

        .item-link {
            display: block;
            transform: translateY(100%);
            transition: $slow-transition 0ms;

            font-weight: 500;
            font-size: $bigger-size;
            pointer-events: none;


            &.nuxt-link-exact-active {
                color: $color-link;
            }

            &:hover {
                color: $color-link;
            }
        }
    }
}

.open {
    .list {
        .list-item {
            .item-link {
                pointer-events: auto;
                transform: translateY(0);
                transition-delay: 400ms;
            }
        }
    }
}

@media (min-width: $md){
    .list {
        flex-direction: row;
        gap: $big-size;
        .list-item {
            text-align: right;
            .item-link {
                padding: $smaller-size 0;
                font-weight: 300;
                font-size: $standard-size;

                pointer-events: auto;
                transform: translateY(0);
            }
        }
    }
}
</style>