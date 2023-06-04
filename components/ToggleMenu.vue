<script>
export default {
    name: 'ToggleMenu',
    methods: {
        openMenu() {
            const menuToggle = document.querySelector('.menu-wrapper')
            const navigationComponent = document.querySelector('.navigation')

            menuToggle.setAttribute('aria-expanded', "true")
            navigationComponent.setAttribute('data-state', "opened")
        },
        closeMenu() {
            const menuToggle = document.querySelector('.menu-wrapper')
            const navigationComponent = document.querySelector('.navigation')

            menuToggle.setAttribute('aria-expanded', "false")
            navigationComponent.setAttribute('data-state', "closing")

            navigationComponent.addEventListener('animationend', () => {
                navigationComponent.setAttribute('data-state', "closed")

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

        if (window.innerWidth >= 1024) {
            this.closeMenu()
        }

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
    position: relative;
    margin-left: auto;
    cursor: pointer;
    height: 2.5rem;
    width: 7.5rem;
    overflow: hidden;

    color: var(--pc-color-white);
    transition: width 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
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

    transition: transform 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.menu.open {
    transform: translateY(0%);
}

.menu.close {
    transform: translateY(130%);
}

[aria-expanded="true"] .menu.open {
    transform: translateY(-130%);
}

[aria-expanded="true"] .menu.close {
    transform: translateY(0%);
}

@media (min-width: 1024px) {
    .menu-wrapper {
        display: none;
    }
}
</style>