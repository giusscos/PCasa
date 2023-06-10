<template>
    <section class="section py-20">
        <div class="container mx-auto px-4">
            <h2 class="pb-4 text-2xl sm:text-5xl md:text-8xl font-bold leading-none">
                Siamo un azienda che pensa in verde
            </h2>
            <div class="flex flex-wrap gap-x-4 gap-y-8">
                <div class="w-full lg:w-6/12 rounded-lg overflow-hidden">
                    <!-- <nuxt-img preset="bodyImg" width="400" src="about-us.webp" alt="Il team pcasa" loading="lazy" /> -->
                    <img class="block w-full h-full object-cover object-center" src="/img/team-pcasa.webp"
                        alt="Il team pcasa">
                </div>
                <div class="w-full lg:w-5/12 flex flex-col gap-y-4">
                    <p class="text-2xl sm:text-4xl md:text-5xl leading-1">
                        Proponiamo soluzioni verdi e smart per rispettare
                        l'ambiente che ci circonda. Contiamo nell'aiuto di
                        ogni singolo individuo per poter cambiare in meglio il modo in cui
                        interagiamo con l'ambiente.<br>E a tu, vorresti unirti a noi?🌱
                    </p>
                    <NuxtLink to="/" title="Scopri come entrare nel nostro team"
                        class="block w-fit border-2 border-black hover:bg-black hover:text-white transition rounded-full pb-1 px-2 md:pb-2 md:pt-1 md:px-4 font-bold text-lg sm:text-xl md:text-2xl leading-1">
                        Scopri come
                    </NuxtLink>
                </div>
            </div>
        </div>
    </section>
</template>