<template>
  <div>
    <TheHero :title="indexTitle" :desc="indexDesc" :img="indexImg" />
  </div>
</template>

<script>
export default {
  name: 'ProdottiTipiciPage',
  data() {
    return {
      indexTitle: 'Porta sempre con te i sapori della nostra Terra',
      indexDesc: 'Un viaggio di sapori unico e che solo la Calabria può farti assaporare',
      indexImg: require('~/assets/images/foods_min.webp'),
    }
  },
  head() {
    return {
      title: 'Prodotti tipici Calabresi - Pcasa',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Porta a tavola i sapori della Calabria. Un viaggio unico di sapori e tradizioni direttamente sulla tua tavola!'
        }
      ]
    }
  },
  beforeMount() {
    const initialWidth = window.innerWidth
    
    window.addEventListener('load', () => {
      if (initialWidth > 750) {
        this.indexImg = require('~/assets/images/foods.webp')
      } else {
        this.indexImg = require('~/assets/images/foods_min.webp')
      }
    })
  }
}
</script>
