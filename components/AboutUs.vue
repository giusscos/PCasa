<template>
    <section class="section py-20">
        <div class="container mx-auto px-4">
            <h2 class="pb-4 minus_title leading-none">
                Siamo un azienda che pensa in <span
                    class="inline-block bg-pcasa-green px-2 md:px-4 pb-2 md:pb-4 rounded-full text-pcasa-white leading-none">verde</span>
            </h2>
            <div class="flex flex-wrap gap-x-4 gap-y-8">
                <div class="w-full lg:w-6/12 rounded-lg overflow-hidden">
                    <!-- <nuxt-img preset="bodyImg" width="400" src="about-us.webp" alt="Il team pcasa" loading="lazy" /> -->
                    <img class="block w-full h-full object-cover object-center" src="/img/team-pcasa.webp"
                        alt="Il team pcasa">
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
</template>