<template>
    <div>
      <TheHero :title="indexTitle" :desc="indexDesc" :img="indexImg" />
    </div>
</template>

<script>
export default {
  name: 'StoriaPage',
  data(){
    return{
      indexTitle: 'La storia di Pcasa',
      indexDesc: 'Come siamo arrivati fin qui',
      indexImg: '/images/hero.jpeg',
    }
  },
  head() {
    return {
      title: 'La nostra Storia - Pcasa',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Pcasa è un negozio Calabrese con obiettivi ambiziosi e con a cuore l\'ambiente. Scopri la sua Storia!'
        }
      ]
    }
  }
}
</script>
