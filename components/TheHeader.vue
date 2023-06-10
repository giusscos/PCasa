<template>
    <header class="main_header h-[64px] overflow-hidden flex items-start" data-status="closed" id="main_navigation">
        <div class="container mx-auto px-5 flex flex-wrap items-center justify-between md:justify-center gap-x-8">
            <TheLogo />
            <ToggleMenu />
            <TheNav />
        </div>
    </header>
</template>
<style>
.main_header {
    z-index: 100;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    background-color: var(--pc-color-prim-translucent);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
}
</style>