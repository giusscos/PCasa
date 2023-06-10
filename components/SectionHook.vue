<template>
    <section class="section py-20">
        <div class="container mx-auto px-4">
            <h2 class="pb-4 text-2xl sm:text-5xl md:text-8xl font-bold leading-none">
                Fai ecologia anche tu
            </h2>
            <div class="flex flex-wrap gap-x-4 gap-y-8">
                <div class="w-full md:w-5/12 rounded-lg overflow-hidden">
                    <!-- <nuxt-img preset="bodyImg" width="400" src="hook.webp" alt="Fare ecologia" /> -->
                    <img src="/img/ecologia-semplice.webp"
                        alt="Inizia a fare ecologia portando dei contenitori nel nostro negozio"
                        class="block w-full h-full object-cover object-center">
                </div>
                <div class="w-full md:w-5/12 flex flex-col gap-y-4">
                    <p class="text-2xl sm:text-4xl md:text-5xl leading-none">
                        Fare ecologia &eacute; semplice!<br>Con poche abitudini puoi dare una mano a te stesso, al
                        tuo portafogli e al tuo Pianeta 🌍
                    </p>
                    <NuxtLink to="/ecologia" title="Scopri come fare ecologia"
                        class="block w-fit border-2 border-black hover:bg-black hover:text-white transition rounded-full pb-1 px-2 md:pb-2 md:pt-1 md:px-4 font-bold text-lg sm:text-xl md:text-2xl leading-1">
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