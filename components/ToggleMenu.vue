<script>
export default {
    name: 'ToggleMenu',
    methods: {
        openMenu() {
            const menuToggle = document.querySelector('.menu-wrapper')
            const listNav = document.querySelector('.navigation>.list')

            menuToggle.setAttribute('aria-expanded', "true")
            listNav.setAttribute('data-state', "opened")
        },
        closeMenu() {
            const menuToggle = document.querySelector('.menu-wrapper')
            const listNav = document.querySelector('.navigation>.list')

            menuToggle.setAttribute('aria-expanded', "false")
            listNav.setAttribute('data-state', "closing")

            listNav.addEventListener('animationend', () => {
                listNav.setAttribute('data-state', "closed")

            }, { once: true })
        },
    },
    mounted() {
        const menuToggle = document.querySelector('.menu-wrapper')
        const itemList = document.querySelectorAll('.item-list')

        menuToggle.addEventListener('click', () => {
            const menuStatus = menuToggle.getAttribute('aria-expanded') === "true"

            if (menuStatus ? this.closeMenu() : this.openMenu());
        })

        itemList.forEach(el => {
            if (window.innerWidth < 1024) {
                el.addEventListener('click', () => {
                    this.closeMenu()
                })
            }
        });
    }
}
</script>
<template>
    <button class="menu-wrapper" aria-controls="prim-nav" aria-expanded="false" title="Menu">
        <div class="menu open" aria-hidden="true">
            Men&uacute;
        </div>
        <div class="menu close" aria-hidden="true">
            Chiudi
        </div>
    </button>
</template>
<style>
@import '../assets/main.css';

.menu-wrapper {
    z-index: 100;
    cursor: pointer;
    height: 2.5rem;
    width: 7rem;
    overflow: hidden;

    padding: 0.15rem 1rem;
    border-radius: 1.5rem;

    position: absolute;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);

    color: var(--pc-color-white);
    background-color: var(--pc-color-prim-translucent);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    box-shadow: 1px 3px 10px var(--pc-color-black-translucent);

    transition: width 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.menu {
    letter-spacing: -0.1rem;
    font-size: 2rem;
    font-weight: 600;

    position: absolute;
    inset: 0;
    top: 0.15rem;
    white-space: nowrap;

    font-size: 2rem;
    font-weight: 600;
    color: var(--pc-color-white);

    transition: transform 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.menu.open {
    transform: translateY(0%);
}

.menu.close {
    transform: translateY(130%);
}

[aria-expanded="true"] {
    width: 7.5rem;
    background-color: var(--pc-color-seco);
}

[aria-expanded="true"] .menu.open {
    transform: translateY(-130%);
}

[aria-expanded="true"] .menu.close {
    color: var(--pc-color-link);
    transform: translateY(0%);
}

@media (min-width: 1024px) {
    .menu-wrapper {
        display: none;
    }
}
</style>