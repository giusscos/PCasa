<template>
  <div>
    <TheHero :title="indexTitle" :desc="indexDesc" :img="indexImg" />
    <TheProducts />
    <TheAbout />
    <ThePartner />
    <Call2Action />
  </div>
</template>
<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      indexTitle: 'Prodotti per la cura della casa',
      indexDesc: 'Prodotti di qualità e nel rispetto dell\'ambiente',
      // indexImg: require('~/assets/images/ceramics.png'),
      indexImg: '/index.webp',
    }
  }
}
</script>
