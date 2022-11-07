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
      indexTitle: 'Titolo La storia Hook pagina la storia',
      indexDesc: 'Sottotitolo La storia Hook pagina la storia',
      indexImg: '/images/noctua-nh-d15s-2.jpeg',
    }
  }
}
</script>
