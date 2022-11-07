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
      indexImg: 'https://picsum.photos/2000/1080',
    }
  }
}
</script>
