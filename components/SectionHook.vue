<template>
    <section class="section py-20 bg-pcasa-white rounded-t-2xl mt-[-1rem]">
        <div class="container mx-auto px-4">
            <h2 class="minus_title pb-4 leading-none">
                Fai ecologia smart anche <span
                    class="inline-block bg-pcasa-red aspect-square p-2 pt-1 md:p-4 md:pt-2 rounded-full text-pcasa-white leading-none">tu</span>
            </h2>
            <div class="flex flex-wrap gap-x-4 gap-y-8">
                <div class="w-full md:w-6/12 rounded-lg overflow-hidden">
                    <!-- <nuxt-img preset="bodyImg" width="400" src="hook.webp" alt="Fare ecologia" /> -->
                    <img width="400" src="/img/ecologia-semplice.webp"
                        alt="Inizia a fare ecologia portando dei contenitori nel nostro negozio"
                        class="block w-full h-full object-cover object-center">
                </div>
                <div class="w-full md:w-5/12 flex flex-col gap-y-4">
                    <p class="standard_paragraph leading-none">
                        Fare ecologia smart &eacute; semplice!<br>Con poche abitudini puoi dare una mano a te stesso, al
                        tuo portafogli e al tuo Pianeta 🌍
                        <br><br>
                        Il riutilizzo della plastica richiede un cambio di mentalità e l'adozione di nuove
                        abitudini, ma ogni piccolo passo conta nel ridurre l'impatto ambientale della plastica.
                    </p>
                    <NuxtLink to="/ecologia" title="Scopri come fare ecologia"
                        class="btn_base border-pcasa-red hover:bg-pcasa-red text-pcasa-red hover:text-pcasa-white">
                        Inizia ora
                    </NuxtLink>
                </div>
            </div>
        </div>
    </section>
</template>
<style>
@import '~/assets/css/main.css';</style>