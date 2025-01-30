<script setup>
let headerState = menuState();
</script>
<template>
    <header
        class="main_header fixed top-0 left-0 right-0 px-5 bg-pcasa-bg overflow-hidden font-sans z-50"
        :data-status="headerState" id="main_navigation"
        @animationend="headerState === 'closing' ? headerState = 'closed' : null">
        <div class="container mx-auto py-5 flex flex-wrap items-center justify-between gap-6">
            <TheLogo />
            <p>👷‍♂️ Manutenzione 👷‍♀️</p>
            <ToggleMenu />
            <TheNav />
        </div>
    </header>
</template>
<style>
@import '~/assets/css/main.css';
</style>