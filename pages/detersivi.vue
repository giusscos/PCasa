<template>
    <div>
      <TheHero :title="indexTitle" :desc="indexDesc" :img="indexImg" />
    </div>
</template>

<script>
export default {
  name: 'DetersiviPage',
  data(){
    return{
      indexTitle: 'Titolo Detersivi Hook pagina detersivi',
      indexDesc: 'Sottotitolo Detersivi Hook pagina detersivi',
      indexImg: '/images/noctua-nh-d15s-2.jpeg',
    }
  }
}
</script>
