<template>
  <section class="container mx-auto px-5 md:px-10 py-10 md:py-20 bg-pcasa-accent rounded-xl">
    <div class="flex items-center py-10">
      <div class="flex flex-col gap-y-4">
        <h1 class="title-standard leading-none">
          Ecologia smart
        </h1>
        <h2 class="paragraph-standard leading-tight">
          Riutiliziamo la plastica in modo intelligente<br>evitando gli sprechi.
        </h2>
        <NuxtLink to="/ecologia" title="Scopri come facciamo ecologia"
          class="btn-standard border-pcasa-text hover:bg-pcasa-text hover:text-pcasa-accent shadow-xl">
          Scopri come
        </NuxtLink>
      </div>
    </div>
  </section>
  <section class="section py-20 rounded-t-2xl mt-[-1rem]">
    <div class="container mx-auto px-4">
      <h2 class="title-sm pb-4 leading-none">
        Fai ecologia smart anche <span class="bg-pcasa-error aspect-square pcasa-marker">tu</span>
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-8">
        <div class="w-full rounded-lg overflow-hidden">
          <img width="400" src="/img/ecologia-semplice.webp"
            alt="Inizia a fare ecologia portando dei contenitori nel nostro negozio" class="img-cover" loading="lazy">
        </div>
        <div class="w-full flex flex-col gap-y-4">
          <p class="paragraph-standard">
            Fare ecologia smart è semplice!<br>Con poche abitudini puoi dare una mano a te stesso, al
            tuo portafogli e al tuo Pianeta 🌍
            <br><br>
            Il riutilizzo della plastica richiede un cambio di mentalità e l'adozione di nuove
            abitudini, ma ogni piccolo passo conta nel ridurre l'impatto ambientale della plastica.
          </p>
          <NuxtLink to="/ecologia" title="Scopri come fare ecologia"
            class="btn-standard border-pcasa-error hover:bg-pcasa-error text-pcasa-error hover:text-pcasa-text">
            Inizia ora
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
  <MainProd />
  <section class="section py-20">
    <div class="container mx-auto px-4">
      <h2 class="pb-4 title-sm leading-none">
        Siamo un azienda che pensa in <span
          class="inline-block bg-pcasa-accent-alt px-2 md:px-4 pb-2 md:pb-4 rounded-full leading-none">verde</span>
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-8">
        <div class="w-full rounded-lg overflow-hidden">
          <img width="400" class="img-cover" src="/img/team-pcasa.webp" alt="Il team pcasa" loading="lazy">
        </div>
        <div class="w-full flex flex-col gap-y-4">
          <p class="paragraph-standard">
            Proponiamo soluzioni verdi e smart per rispettare
            l'ambiente che ci circonda. Contiamo nell'aiuto di
            ogni singolo individuo per poter cambiare in meglio il modo in cui
            interagiamo con l'ambiente.
            <br><br>
            Abbiamo obiettivi ambiziosi ma... qualcuno deve pur farlo.
            E tu, vorresti unirti a noi?🌱
          </p>
          <NuxtLink to="/contatti" title="Scopri come entrare nel nostro team"
            class="btn-standard border-pcasa-accent-alt hover:bg-pcasa-accent-alt text-pcasa-accent-alt hover:text-pcasa-text">
            Scopri come
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
<style>
@import '~/assets/css/main.css';
</style>