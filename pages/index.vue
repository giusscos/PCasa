<template>
  <main>
    <section class="section h-screen bg-pcasa-red">
      <div class="container mx-auto px-4 h-full flex items-center">
        <div class="flex flex-col gap-y-4 text-pcasa-white">
          <h1 class="standard_title leading-none">
            Ecologia smart
          </h1>
          <h2 class="standard_paragraph leading-tight">
            Riutiliziamo la plastica in modo intelligente<br>evitando gli sprechi.
          </h2>
          <NuxtLink to="/ecologia" title="Scopri come facciamo ecologia"
            class="btn_base border-pcasa-white hover:bg-pcasa-white text-pcasa-white hover:text-pcasa-red shadow-xl">
            Scopri come
          </NuxtLink>
        </div>
      </div>
    </section>
    <section class="section py-20 bg-pcasa-white rounded-t-2xl mt-[-1rem]">
        <div class="container mx-auto px-4">
            <h2 class="minus_title pb-4 leading-none">
                Fai ecologia smart anche <span
                    class="inline-block bg-pcasa-red aspect-square p-2 pt-1 md:p-4 md:pt-2 rounded-full text-pcasa-white leading-none">tu</span>
            </h2>
            <div class="flex flex-wrap gap-x-4 gap-y-8">
                <div class="w-full md:w-6/12 rounded-lg overflow-hidden">
                    <nuxt-img preset="landingVertical" src="/img/ecologia-semplice.webp" sizes="xs:100% sm:100% md:400px lg:500px"
                        alt="Inizia a fare ecologia portando dei contenitori nel nostro negozio" loading="lazy"
                        class="block w-full h-full object-cover object-center" />
                    <!-- <img width="400" src="/img/ecologia-semplice.webp"
                        alt="Inizia a fare ecologia portando dei contenitori nel nostro negozio"
                        class="block w-full h-full object-cover object-center"> -->
                </div>
                <div class="w-full md:w-5/12 flex flex-col gap-y-4">
                    <p class="standard_paragraph leading-none">
                        Fare ecologia smart è semplice!<br>Con poche abitudini puoi dare una mano a te stesso, al
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
    <MainProd />
    <section class="section py-20">
        <div class="container mx-auto px-4">
            <h2 class="pb-4 minus_title leading-none">
                Siamo un azienda che pensa in <span
                    class="inline-block bg-pcasa-green px-2 md:px-4 pb-2 md:pb-4 rounded-full text-pcasa-white leading-none">verde</span>
            </h2>
            <div class="flex flex-wrap gap-x-4 gap-y-8">
                <div class="w-full lg:w-6/12 rounded-lg overflow-hidden">
                    <nuxt-img preset="landingVertical" src="/img/team-pcasa.webp" alt="Il team pcasa" loading="lazy" sizes="xs:100% sm:100% md:400px lg:500px"
                        class="block w-full h-full object-cover object-center" />
                    <!-- <img width="400" class="block w-full h-full object-cover object-center" src="/img/team-pcasa.webp"
                        alt="Il team pcasa"> -->
                </div>
                <div class="w-full lg:w-5/12 flex flex-col gap-y-4">
                    <p class="standard_paragraph leading-tight">
                        Proponiamo soluzioni verdi e smart per rispettare
                        l'ambiente che ci circonda. Contiamo nell'aiuto di
                        ogni singolo individuo per poter cambiare in meglio il modo in cui
                        interagiamo con l'ambiente.
                        <br><br>
                        Abbiamo obiettivi ambiziosi ma... qualcuno deve pur farlo.
                        E tu, vorresti unirti a noi?🌱
                    </p>
                    <NuxtLink to="/contatti" title="Scopri come entrare nel nostro team"
                        class="btn_base border-pcasa-green hover:bg-pcasa-green text-pcasa-green hover:text-pcasa-white">
                        Scopri come
                    </NuxtLink>
                </div>
            </div>
        </div>
    </section>
  </main>
</template>
<style>
@import '~/assets/css/main.css';
</style>