<script setup lang="ts">
const cookiesAccepted = useCookie<boolean>('cookies_accepted');

const acceptCookies = () => {
    cookiesAccepted.value = true
};

// const declineCookies = () => {
//     cookiesAccepted.value = true
// };
</script>

<template>
    <div v-if="!cookiesAccepted"
        class="fixed bottom-4 left-4 sm:left-auto right-4 sm:w-full sm:max-w-sm z-50 border border-pcasa-text/25 bg-pcasa-bg/50 backdrop-blur-lg p-5 rounded-xl overflow-hidden">
        <p class="mb-4">
            Utilizziamo i cookie per migliorare la tua esperienza sul nostro sito.
        </p>
        <button type="button" @click="acceptCookies"
            class="block px-4 py-1 border border-pcasa-text hover:bg-pcasa-text rounded-lg text-pcasa-text hover:text-pcasa-bg font-semibold transition">
            Prendo visione
        </button>
        <!-- <button type="button" @click="declineCookies"
            class="px-4 py-1 border border-pcasa-error hover:bg-pcasa-error rounded-lg text-pcasa-text font-semibold transition">
            >
            Rifiuta
        </button> -->
    </div>
</template>