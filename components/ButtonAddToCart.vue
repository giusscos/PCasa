<script setup>
function addToCart() {
    console.log('ciao');
}
</script>
<template>
    <button @click="addToCart"
        class="block px-4 py-1 border border-pcasa-gold hover:bg-pcasa-gold rounded-lg text-pcasa-gold hover:text-pcasa-text font-semibold transition">
        Aggiungi al carrello
    </button>
</template>