<script>
export default {
  setup() {
    useHead({
      title: "404 Ti sei perso? - Pcasa",
      meta: [
        { name: 'description', content: "Hai perso la strada? Torna alla home in un click." },
      ]
    })
  }
}
</script>
<template>
    <section class="section h-screen bg-pcasa-red">
        <div class="container mx-auto px-4 h-full flex flex-col justify-center items-start gap-y-4">
            <h1 class="standard_title leading-none text-pcasa-white font-sans">
                404
            </h1>
            <h2 class="minus_title leading-none text-pcasa-white">
                Ti sei perso?
            </h2>
            <NuxtLink to="/"
                class="btn_base border-pcasa-white hover:bg-pcasa-white text-pcasa-white hover:text-pcasa-red shadow-xl"
                title="Vai alla home">
                Vai alla home
            </NuxtLink>
        </div>
    </section>
</template>
<style>
@import '~/assets/css/main.css';
</style>