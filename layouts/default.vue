<template>
    <div class="default_layouts">
        <TheHeader />
        <main>
            <Nuxt />
        </main>
        <TheFooter />
    </div>
</template>
<script>
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

if (process.client) {
    gsap.registerPlugin(ScrollTrigger);
}

export default {
    name: "defaultLayouts",
    mounted() {
        const bodyEl = document.querySelector('body')

        window.addEventListener('resize', (el) => {
            const currentWidth = el.target.innerWidth
            if (currentWidth > 750 && bodyEl.classList.value === 'open') {
                bodyEl.classList.remove('open')
            }
        })
    }
}
</script>
<style lang="scss" scoped>
.default_layouts {
    display: flex;
    flex-direction: column;
}
</style>