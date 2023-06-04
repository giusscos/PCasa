<template>
    <header class="main_header">
        <div class="container">
            <TheLogo />
            <TheNav />
        </div>
    </header>
</template>

<style>
.main_header{
    z-index: 100;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    
    background-color: var(--pc-color-prim-translucent);
    backdrop-filter: blur(24px);
    -webkit-backdrop-filter: blur(24px);
}
.main_header > .container {
    display: flex;
    align-items: center;
}

@media (min-width: 1024px){
    .main_header{
        width: 100%;
        display: flex;
    }
}
</style>