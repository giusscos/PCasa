<template>
    <div>
      <TheHero :title="indexTitle" :desc="indexDesc" :img="indexImg" />
    </div>
</template>

<script>
export default {
  name: 'ProdottiTipiciPage',
  data(){
    return{
      indexTitle: 'Titolo Prodotti Tipici Hook pagina Prodotti Tipici',
      indexDesc: 'Sottotitolo Prodotti Tipici Hook pagina Prodotti Tipici',
      indexImg: '/images/noctua-nh-d15s-2.jpeg',
    }
  }
}
</script>
