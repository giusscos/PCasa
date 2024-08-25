<script setup>
let headerState = menuState();
let isExpanded = menuToggleState();

const openMenu = () => {
    headerState.value = 'opened'
    document.querySelector('body').classList.add('overflow-y-hidden')
}
const closeMenu = () => {
    headerState.value = 'closing'
    document.querySelector('body').classList.remove('overflow-y-hidden')
}

const menuToggle = () => {
    isExpanded.value ? closeMenu() : openMenu()
    isExpanded.value = !isExpanded.value
}

onMounted(() => {
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768 && isExpanded.value) {
            this.closeMenu()
        }
    });
});
</script>
<template>
    <button class="menu md:hidden font-semibold text-lg" aria-controls="main_navigation"
        :aria-expanded="isExpanded" @click="menuToggle" title="Apri menù">
        {{ !isExpanded ? 'Menù' : 'Chiudi' }}
    </button>
</template>
<style>
@import '../assets/css/main.css';
</style>