<template>
    <div>
      <TheHero :title="indexTitle" :desc="indexDesc" :img="indexImg" />
    </div>
</template>

<script>
export default {
  name: 'ArtigianatoPage',
  data(){
    return{
      indexTitle: 'Titolo Artigianato Hook pagina Artigianato',
      indexDesc: 'Sottotitolo Artigianato Hook pagina Artigianato',
      indexImg: '/images/noctua-nh-d15s-2.jpeg',
    }
  }
}
</script>
