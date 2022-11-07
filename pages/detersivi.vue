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
      indexImg: 'https://picsum.photos/2000/1080',
    }
  }
}
</script>
