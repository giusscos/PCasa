<template>
  <ul class="list_wrapper">
    <li class="list-item" v-for="(item, i) in routes" :key="`${i}route`">
      <NuxtLink class="item-link" :to="item.route">{{ item.name }}</NuxtLink>
    </li>
  </ul>
</template>
<script>
export default {
  name: "ListNav",
  props: {
    routes: Array,
  },
};
</script>
<style lang="scss" scoped>
@import "~/assets/css/main.scss";
.list_wrapper {
  z-index: 100;
  display: flex;
  flex-direction: column;

  gap: $big-size;
  align-items: center;
  justify-content: center;

  .list-item {
    overflow: hidden;
    .item-link {
      display: block;
      text-align: center;

      font-size: $ultra-size;
      color: $color-prim;

      padding: $bigger-size 0;
      transform: translateY(100%);
      transition: $custom-fast-transition 0ms;

      &:hover{
        color: $color-link;
        filter: brightness(1.2);
        -webkit-filter: brightness(1.2);
      }

      &.nuxt-link-exact-active{
        color: $color-link;
      }
    }
  }
}

.open {
  .list_wrapper {
    .list-item {
      .item-link {
        transform: translateY(0%);
        transition-delay: 700ms;
      }
    }
  }
}

@media (min-width: $md) {
  .list_wrapper {
    flex-direction: row;
    .list-item {
      .item-link {
        padding: $small-size 0;
        font-size: $small-size;
        transform: translateY(0%);
      }
    }
  }
}
</style>