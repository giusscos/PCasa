<template>
    <footer class="py-4 font-sans">
        <div class="container text-sm mx-auto py-2 px-4 text-center">
            <p class="flex items-center gap-8">
                <span>
                    © Pcasa {{ new Date().getFullYear() }}
                </span>
                <NuxtLink class="text-pcasa-text/75 hover:text-pcasa-text transition font-bold underline"
                    to="/privacy-policy">
                    Privacy Policy
                </NuxtLink>
            </p>
            <p class="leading-none">
                Progettato e Sviluppato da
                <a class="text-pcasa-text/75 hover:text-pcasa-text transition font-bold underline" target="_blank"
                    href="https://giusscos.it" title="Visita il sito di Giusscos">
                    Giusscos
                </a>
                in Italia 🇮🇹
            </p>
        </div>
    </footer>
</template>
<style>
@import '~/assets/css/main.css';
</style>