<template>
    <footer class="main_footer pt-10 pb-5">
        <div class="container mx-auto px-4">
            <div class="flex flex-col gap-x-4 gap-y-2">
                <Logo class="w-32 h-16 md:w-48 md:h-24" />
                <div class="pl-2 text-white text-xl md:text-xl font-bold">
                    <p>P.IVA IT03401820786</p>
                    <p>Via Trinitá N. 9, Cariati (CS), Italia</p>
                </div>
            </div>
            <SocialListFooter />
            <div class="w-full text-center text-white">
                <p class="font-semibold text-lg md:text-xl leading-none">
                    Progettato e Sviluppato da <a class="text-gray-300 hover:text-white tranition font-bold underline"
                        target="_blank" href="https://giusscos.it" title="Visita il sito di Giusscos">Giusscos</a> in Italia
                    🇮🇹
                </p>
                <span class="text-lg md:text-xl">
                    © Pcasa 2023
                </span>
            </div>
        </div>
    </footer>
</template>
<style>
@import '~/assets/css/main.css';

.main_footer {
    background-color: var(--pc-color-prim);
}
</style>