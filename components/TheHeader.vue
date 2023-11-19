<script setup>
let headerState = menuState();
</script>
<template>
    <header
        class="main_header h-16 fixed top-0 left-0 right-0 z-50 py-3 overflow-hidden font-sans bg-pcasa-blue/80 backdrop-blur-md"
        :data-status="headerState" id="main_navigation"
        @animationend="headerState === 'closing' ? headerState = 'closed' : null">
        <div class="container mx-auto px-4 flex flex-wrap items-center justify-between md:justify-center gap-x-8">
            <TheLogo />
            <ToggleMenu />
            <TheNav />
        </div>
    </header>
</template>
<style>
@import '~/assets/css/main.css';
</style>