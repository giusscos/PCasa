<template>
  <div>
    <TheHero :title="indexTitle" :desc="indexDesc" :img="indexImg" />
  </div>
</template>

<script>
export default {
  name: 'ArtigianatoPage',
  data() {
    return {
      indexTitle: 'Ri-vivi l\'artigianato dei nostri antenati',
      indexDesc: 'Untensili del passato, realizzati da mastri artigiani locali, con le più moderne tecnologie',
      indexImg: require('~/assets/images/ceramics_min.webp'),
    }
  },
  head() {
    return {
      title: 'Artigianato Calabrese - Pcasa',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Opere di artigianato realizzate da mastri artigiani locali calabresi con le più moderne tecniche di realizzazione!'
        }
      ]
    }
  },
  beforeMount() {
    const initialWidth = window.innerWidth
    
    window.addEventListener('load', () => {
      if (initialWidth > 750) {
        this.indexImg = require('~/assets/images/ceramics.webp')
      } else {
        this.indexImg = require('~/assets/images/ceramics_min.webp')
      }
    })
  }
}
</script>
