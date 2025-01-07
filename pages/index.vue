<script setup lang="ts"></script>

<template>
  <!-- Jumbo -->
  <section class="sm:container sm:mx-auto min-h-screen py-20">
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-8">
      <div
        class="min-h-96 bg-neutral-500 border border-neutral-300 rounded-xl flex items-center justify-center uppercase text-xl font-bold">
        Photo
      </div>
      <div>
        <h2 class="text-6xl font-bold">
          Trova il prodotto giusto per le migliori occasioni
        </h2>
        <p class="text-xl">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum, porro earum! Veniam dolorum cum dignissimos
          ut. Necessitatibus temporibus ullam mollitia sapiente, odit culpa id provident adipisci velit ea magni aut?
        </p>
      </div>
    </div>
  </section>

  <section class="py-20 sm:container sm:mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="rounded-lg overflow-hidden">
        <img width="400" src="/img/ecologia-semplice.webp"
          alt="Inizia a fare ecologia portando dei contenitori nel nostro negozio"
          class="w-full h-full object-cover object-top aspect-square" loading="lazy">
      </div>
      <div>
        <h2 class="text-4xl font-bold">
          Acquista rispettando il pianeta
        </h2>
        <p class="text-xl py-4">
          Fare ecologia smart è semplice! Con poche abitudini puoi dare una mano a te stesso, al
          tuo portafogli e al tuo Pianeta 🌍
          Il riutilizzo della plastica richiede un cambio di mentalità e l'adozione di nuove
          abitudini, ma ogni piccolo passo conta nel ridurre l'impatto ambientale della plastica.
        </p>
        <NuxtLink to="/ecologia" title="Scopri come fare ecologia"
          class="btn-standard border-pcasa-error hover:bg-pcasa-error text-pcasa-error hover:text-pcasa-text">
          Inizia ora
        </NuxtLink>
      </div>
    </div>
  </section>
  <Categories />
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