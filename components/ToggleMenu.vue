<script>
export default {
    name: 'ToggleMenu',
    methods: {
        openMenu() {
            const menuToggle = document.querySelector('.menu')
            const headerComponent = document.querySelector('.main_header')
            const bodyComponent = document.querySelector('body')

            menuToggle.setAttribute('aria-expanded', "true")
            headerComponent.setAttribute('data-status', "opened")
            bodyComponent.classList.add('overflow-y-hidden')
        },
        closeMenu() {
            const bodyComponent = document.querySelector('body')
            const menuToggle = document.querySelector('.menu')
            const headerComponent = document.querySelector('.main_header')

            menuToggle.setAttribute('aria-expanded', "false")
            headerComponent.setAttribute('data-status', "closing")
            bodyComponent.classList.remove('overflow-y-hidden')

            headerComponent.addEventListener('animationend', () => {
                headerComponent.setAttribute('data-status', "closed")
            }, { once: true })
        },
    },
    mounted() {
        const menuToggle = document.querySelector('.menu')
        const itemList = document.querySelectorAll('.item_list')

        menuToggle.addEventListener('click', () => {
            const menuStatus = menuToggle.getAttribute('aria-expanded') === "true"

            if (menuStatus ? this.closeMenu() : this.openMenu());
        })

        window.addEventListener('resize', () => {
            const menuStatus = menuToggle.getAttribute('aria-expanded') === "true"
            if (window.innerWidth >= 768 && menuStatus) {
                this.closeMenu()
            }
        });

        itemList.forEach(el => {
            const menuStatus = menuToggle.getAttribute('aria-expanded') === "true"
            if (window.innerWidth < 768 && menuStatus) {
                el.addEventListener('click', () => {
                    this.closeMenu()
                })
            }
        });
    }
}
</script>
<template>
    <button class="menu col-span-6 md:hidden font-bold text-2xl text-white ml-auto" aria-controls="main_navigation"
        aria-expanded="false" title="Menu">
        Men&uacute;
    </button>
</template>
<style>
@import '../assets/css/main.css';
</style>