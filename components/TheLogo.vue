<template>
    <div class="logo_wrapper">
        <NuxtLink to="/" title="Torna alla home" class="logo_link"></NuxtLink>
        <h1 class="logo">
            Pcasa
        </h1>
        <Logo class="svg_logo-long" />
        <LogoMini class="svg_logo-short" />
    </div>
</template>

<style>
@import '../assets/main.css';

.logo_wrapper {
    position: relative;

    padding: 0 0.5rem;
    width: fit-content;
    border-radius: 0.35rem;

    box-shadow: 1px 3px 10px var(--pc-color-black-translucent);
    background-color: var(--pc-color-prim);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
}

.logo_link {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}

.logo {
    position: absolute;
    opacity: 0;
    pointer-events: none;
}

.svg_logo-short {
    width: 5rem;
    height: 4.5rem;
    object-fit: cover;
}

.svg_logo-long {
    display: none;
}

@media (min-width: 1024px) {
    .svg_logo-short {
        display: none;
    }

    .svg_logo-long {
        width: 7rem;
        height: 4.5rem;
        object-fit: cover;
        display: block;
    }

}
</style>