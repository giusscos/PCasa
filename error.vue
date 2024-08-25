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
    <section class="h-screen bg-pcasa-error text-pcasa-text">
        <div class="container mx-auto h-full flex flex-col justify-center items-start gap-y-4">
            <h1 class="title-standard leading-none font-sans">
                404
            </h1>
            <h2 class="title-sm leading-none">
                Ti sei perso?
            </h2>
            <NuxtLink to="/"
                class="btn-standard border-pcasa-text hover:bg-pcasa-text hover:text-pcasa-error shadow-xl"
                title="Vai alla home">
                Vai alla home
            </NuxtLink>
        </div>
    </section>
</template>
<style>
@import '~/assets/css/main.css';
</style>