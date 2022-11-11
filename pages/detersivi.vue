<template>
  <div>
    <TheHero :title="indexTitle" :desc="indexDesc" :img="indexImg" />
  </div>
</template>

<script>
export default {
  name: 'DetersiviPage',
  data() {
    return {
      indexTitle: 'Detersivi alla spina Ecologici',
      indexDesc: 'Un sollievo per il tuo portafogli e... per l\'ambiente',
      indexImg: require('~/assets/images/soaps.webp'),
    }
  },
  head() {
    return {
      title: 'Detersivi alla Spina Ecologici - Pcasa',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Detersivi alla spina ecologici. Paghi solo il prodotto, il contenitore lo porti da casa tu o lo offriamo noi! Basta una semplice bottiglia!'
        }
      ]
    }
  }
}
</script>
