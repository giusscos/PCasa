<template>
    <nav class="navigation">
        <NavList />
    </nav>
</template>

<style>
@import '../assets/main.css';

.navigation {
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);

    width: 1px;
    height: 1px;
    /* overflow: hidden; */
    border-radius: 1.5rem;

    box-shadow: 1px 3px 10px var(--pc-color-black-translucent);
    background-color: var(--pc-color-prim-translucent);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
}

@media (min-width: 1024px){
    .navigation{
        position: relative;
        top: 0;
        left: 0;
        transform: translateX(0%);
        
        margin-left: auto;
        height: 100%;
        width: fit-content;
    }
}
</style>