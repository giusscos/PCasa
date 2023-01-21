<script>
export default {
    name: "NavList",
    data() {
        return {
            navLinks: [
                {
                    'name': 'prodotti',
                    'nameRoute': '/prodotti',
                    'title': 'Visita la pagina dei prodotti',
                },
                {
                    'name': 'ecologia',
                    'nameRoute': '/ecologia',
                    'title': 'Scopri come fare ecologia',
                },
                {
                    'name': 'chi siamo',
                    'nameRoute': '/chi-siamo',
                    'title': 'Scopri la nostra azienda',
                },
                {
                    'name': 'contatti',
                    'nameRoute': '/contatti',
                    'title': 'Visita la pagina dei contatti',
                },
            ]
        }
    }
}
</script>
<template>
    <ul class="list" id="prim-nav" data-state="closed">
        <li v-for="(link, i) in navLinks" :key="i" class="item-list">
            <NuxtLink :to="link.nameRoute" :title="link.title" class="item-link">
                <RightArrowLong class="arrow-hover" />
                {{ link.name }}
            </NuxtLink>
        </li>
    </ul>
</template>
<style>
.arrow-hover {
    width: 40px;
    height: 40px;
}

.arrow-hover path {
    stroke: var(--pc-color-white);
}

.navigation>.list {
    position: fixed;
    top: 2rem;
    left: 50%;
    transform: translate(-50%, 0);

    width: 350px;
    height: 400px;
    border-radius: 1rem;

    display: flex;
    flex-direction: column;
    justify-content: center;

    background-color: var(--pc-color-prim-translucent);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
}

.list[data-state="closed"] {
    display: none;
}

.list[data-state="closing"] {
    animation: listNavClose 700ms cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
}

.list[data-state="opened"] {
    display: flex;
    animation: listNavOpen 700ms cubic-bezier(0.165, 0.84, 0.44, 1) forwards;
}

@keyframes listNavOpen {
    0% {
        -webkit-clip-path: circle(0% at 50% 0);
        clip-path: circle(0% at 50% 0);
    }

    100% {
        top: 1.25rem;
        -webkit-clip-path: circle(70.7% at 50% 50%);
        clip-path: circle(70.7% at 50% 50%);
    }
}

@keyframes listNavClose {
    0% {
        -webkit-clip-path: circle(70.7% at 50% 50%);
        clip-path: circle(70.7% at 50% 50%);
    }

    100% {
        -webkit-clip-path: circle(0% at 50% 0);
        clip-path: circle(0% at 50% 0);
    }
}

.item-list {
    white-space: nowrap;
    overflow: hidden;
    position: relative;
}

.item-link {
    display: block;
    font-size: 3rem;
    color: var(--pc-color-white);
    padding: 0.1rem 0.75rem;
    text-transform: capitalize;
    transform: translateX(-3.25rem);
    transition: 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.item-link:hover {
    text-decoration: underline;
    transform: translateX(0);
}

@media (min-width: 1024px) {
    .menu-wrapper {
        display: none;
    }

    .navigation>.list {
        display: flex;
        flex-direction: row;
        position: unset;
        top: unset;
        left: unset;
        transform: translate(0);

        width: unset;
        height: unset;
    }

    .arrow-hover {
        display: none;
    }

    .item-link {
        font-size: 2rem;
        padding: 0.5rem 1rem;
        transform: translate(0);
    }

    .item-link:hover {
        color: var(--pc-color-link);
        text-decoration: underline;
    }
}
</style>