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
.list_wrapper{
  display: flex;
  flex-direction: column;
  
  gap: 2.5rem;
  align-items: center;
  justify-content: center;

  .list-item{
    .item-link{
      font-size: 2.75rem;
      padding: 2rem 0;
    }
  }
}
</style>