<script setup>
const headerState = menuState();
const isExpanded = menuToggleState();


const openMenu = () => {
    headerState = 'opened'
    document.querySelector('body').classList.add('overflow-y-hidden')
}
const closeMenu = () => {
    headerState = 'closing'
    document.querySelector('body').classList.remove('overflow-y-hidden')
}

const menuToggle = () => {
    isExpanded ? closeMenu() : openMenu()
    isExpanded = !isExpanded
}

onMounted(() => {
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768 && this.isExpanded) {
            this.closeMenu()
        }
    });
});
</script>
<template>
    <button class="menu md:hidden font-bold text-2xl text-white ml-auto" aria-controls="main_navigation"
        :aria-expanded="isExpanded" @click="menuToggle" title="Apri menù">
        Menù
    </button>
</template>
<style>
@import '../assets/css/main.css';
</style>