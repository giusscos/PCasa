<script>
import gsap from 'gsap'

export default {
    name: 'ToggleMenu',
    data() {
        return {
            click: false
        }
    },
    mounted() {
        const openMenu = document.querySelector('.open_menu')
        const closeMenu = document.querySelector('.close_menu')
        const listItemEl = document.querySelectorAll('.item_close')
        let open = false

        const tl = gsap.timeline({
            defaults: {
                ease: 'expo.inOut',
                duration: 1.2,
            }
        })

        tl.paused(true)

        tl.to('.open_menu', {
            y: '-120%'
        })
            .to('.close_menu', {
                y: '-100%'
            }, '<')
            .to('.toggle_menu', {
                y: '0.5rem',
                ease: 'elastic.out',
                borderRadius: '0.8rem',
                color: 'var(--pc-color-link)',
                backgroundColor: 'var(--pc-color-seco)',
            }, '<=1')
            .to('.navigation', {
                height: '325px',
                width: '250px',
                ease: 'elastic.out',
                duration: 0.7,
            }, '<')
            .to('.list .item_link', {
                y: 0,
                pointerEvents: 'auto',
                stagger: 0.1,
                ease: 'expo.inOut'
            }, '<')
            .to('.navigation', {
                'backdrop-filter': 'blur(12px)',
                '-webkit-backdrop-filter': 'blur(12px)',
            }, '<')

        openMenu.addEventListener('click', () => {
            open = !open
            tl.play()
        })
        closeMenu.addEventListener('click', () => {
            open = !open
            tl.reverse()
        })

        listItemEl.forEach((el) => {
            el.addEventListener('click', () => {
                if(window.innerWidth < 1024 && open){
                    open = !open 
                    tl.reverse()
                }
            })
        })
    }
}
</script>
<template>
    <button class="toggle_menu">
        <div class="menu open_menu">
            Men&uacute;
        </div>
        <div class="menu close_menu">
            Chiudi
        </div>
    </button>
</template>
<style>
@import '../assets/main.css';

.toggle_menu {
    z-index: 100;
    cursor: pointer;
    height: 2.5rem;
    overflow: hidden;

    padding: 0.15rem 1rem;
    border-radius: 1.5rem;

    position: absolute;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);

    box-shadow: 1px 3px 10px var(--pc-color-black-translucent);
    color: var(--pc-color-white);
    background-color: var(--pc-color-prim-translucent);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
}

.menu {
    letter-spacing: -0.1rem;
    font-size: 2rem;
    font-weight: 600;
}

@media (min-width: 1024px) {
    .toggle_menu {
        display: none;
    }
}
</style>