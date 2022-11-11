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
      indexImg: require('~/assets/images/hero_min.webp'),
    }
  },
  beforeMount() {
    const initialWidth = window.innerWidth
    
    window.addEventListener('load', () => {
      if (initialWidth > 750) {
        this.indexImg = require('~/assets/images/hero.webp')
      } else {
        this.indexImg = require('~/assets/images/hero_min.webp')
      }
    })
  }
}
</script>
