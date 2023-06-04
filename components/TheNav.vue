<template>
    <ToggleMenu />
    <nav id="prim-nav" class="navigation" data-state="closed">
        <NavList />
    </nav>
</template>
<style>
.navigation {
    position: fixed;
    top: 5.75rem;
    right: 5rem;
    box-shadow: 0px 4px 24px var(--pc-color-black-translucent);

    padding: 0.5rem;
    height: 250px;
    border-radius: 1rem;

    background-color: var(--pc-color-prim);
}

.navigation[data-state="closed"] {
    display: none;
}

.navigation[data-state="closing"] {
    animation: listNavClose 500ms cubic-bezier(0.215, 0.610, 0.355, 1) forwards;
}

.navigation[data-state="opened"] {
    display: block;
    animation: listNavOpen 500ms cubic-bezier(0.215, 0.610, 0.355, 1) forwards;
}

@keyframes listNavOpen {
    0% {
        right: -100vw;
    }

    100% {
        right: 5rem;
    }
}

@keyframes listNavClose {
    0% {
        right: 5rem;
    }

    100% {
        right: -100vw;
    }
}

@media (min-width: 1024px) {

    .navigation,
    .navigation[data-state="closed"],
    .navigation[data-state="opened"] {
        display: block;
        position: relative;
        top: unset;
        right: unset;
        background-color: unset;
        box-shadow: 0px 0px 0px transparent;
        height: unset !important;
    }
}
</style>