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
    <ul class="list">
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
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.item-list {
    white-space: nowrap;
    overflow: hidden;
    position: relative;
}

.navigation[data-state="closed"] .item_link {
    transform: translateY(100%);
    opacity: 0;
}
.navigation[data-state="opened"] .item_link {
    transform: translateY(0);
    opacity: 1;
}

.item-link {
    display: block;
    font-size: 3rem;
    color: var(--pc-color-white);
    padding: 0.1rem 0.75rem;
    text-transform: capitalize;
    opacity: .75;
    transform: translateX(-3.25rem);
    transition: 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.item-link:hover {
    opacity: 1;
    transform: translateX(0);
}

@media (min-width: 1024px) {
    .menu-wrapper {
        display: none;
    }

    .navigation>.list {
        display: flex;
        flex-direction: row;
        position: relative;
        top: unset;
        left: unset;
        transform: translate(0);
    }

    .arrow-hover {
        display: none;
    }

    .item-link {
        font-size: 2rem;
        padding: 0.5rem 1rem;
        opacity: .75;
        transform: translate(0);
    }

    .item-link:hover {
        opacity: 1;
    }
}
</style>