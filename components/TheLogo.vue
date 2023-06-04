<template>
    <NuxtLink to="/" title="Torna alla home" class="logo_link">
        <h1 class="logo">
            Pcasa
        </h1>
        <Logo class="svg_logo-long" />
        <LogoMini class="svg_logo-short" />
    </NuxtLink>
</template>

<style>
@import '../assets/main.css';

.logo {
    position: absolute;
    width: 0px;
    overflow: hidden;
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