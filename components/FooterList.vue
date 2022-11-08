<template>
    <div class="list_wrapper">
        <span class="title-list">
            {{  info.title  }}
        </span>
        <ul class="list">
            <li v-for="(item, i) in info.links" :key="`${i}item`" class="item-list">
                <NuxtLink :to="item.route" class="link-item" :title="`Visita ${item.text}`" v-if="item.route !== ''">
                    {{  item.text  }}
                </NuxtLink>
                <a :href="item.link" target="_blank" class="link-item" :title="`${item.text}`" v-else>
                    {{  item.text  }}
                </a>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: 'FooterList',
    props: {
        info: Object,
    }
}
</script>
<style lang="scss" scoped>
@import '~/assets/css/main.scss';

.list_wrapper {
    padding: $ultra-size 0 0;

    .title-list {
        font-size: $big-size;
        padding: $smallest-size 0;
    }

    .item-list {
        padding: $smallest-size;

        border-bottom: 2px solid $color-seco;

        .link-item {
            font-size: $standard-size;
            color: $color-seco-darker;
            opacity: 0.8;
            transition: $fast-transition;

            &:hover {
                color: $color-seco;
                opacity: 1;
            }
        }
    }
}
</style>