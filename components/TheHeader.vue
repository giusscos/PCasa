<template>
    <header class="main_header">
        <TheLogo />
        <TheNav />
    </header>
</template>

<style>
.main_header{
    z-index: 100;
    position: fixed;
    top: 1rem;
    left: 0;
    right: 0;

    padding: 0 1rem;
}

@media (min-width: 1024px){
    .main_header{
        width: 100%;
        display: flex;
    }
}
</style>