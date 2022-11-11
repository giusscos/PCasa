<template>
  <div>
    <TheHero :title="indexTitle" :desc="indexDesc" :img="indexImg" />
    <TheProducts />
    <LazyTheAbout />
    <LazyThePartner />
    <LazyCall2Action />
  </div>
</template>
<script>
export default {
  name: 'IndexPage',
  data(){
    return{
      indexTitle: 'Prodotti per la cura della casa',
      indexDesc: 'Prodotti per la casa di qualità e nel rispetto dell\'ambiente',
      indexImg: '/images/hero.jpeg',
    }
  },  
}
</script>
<style lang="scss" scoped>
@import '~/assets/css/main.scss';
</style>
