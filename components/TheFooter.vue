<template>
    <footer class="main_footer bg-pcasa-blue rounded-t-2xl mt-[1rem] pt-10 pb-5 font-sans">
        <div class="container mx-auto px-4">
            <div class="flex flex-col gap-x-4 gap-y-2">
                <Logo class="w-32 h-16 md:w-48 md:h-24" />
                <div class="pl-2 text-white text-xl md:text-xl font-semibold">
                    <p>P.IVA IT03401820786</p>
                    <p>Via Trinitá 9, Cariati (CS), Italia</p>
                </div>
            </div>
            <div class="flex flex-wrap gap-x-8 gap-y-4 pb-4">
                <SocialListFooter class="w-5/12" />
                <!-- <SocialListFooter class="w-5/12"/> -->
            </div>
            <div class="w-full text-center text-white">
                <p class="font-semibold text-lg md:text-xl leading-none">
                    Progettato e Sviluppato da <a class="text-gray-300 hover:text-white transition font-bold underline"
                        target="_blank" href="https://giusscos.it" title="Visita il sito di Giusscos">Giusscos</a> in Italia
                    🇮🇹
                </p>
                <span class="text-lg md:text-xl">
                    © Pcasa {{new Date().getFullYear()}}
                </span>
            </div>
        </div>
    </footer>
</template>
<style>
@import '~/assets/css/main.css';
</style>