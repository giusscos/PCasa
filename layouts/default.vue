<template>
    <div class="default_layouts">
        <TheHeader />
        <main>
            <Nuxt />
        </main>
        <!-- <footer>
            Footer
        </footer> -->
    </div>
</template>
<script>
import TheHeader from '~/components/TheHeader.vue'

export default{
    name: "defaultLayouts",
    components: {
        TheHeader,
    },
    mounted() {
        const bodyEl = document.querySelector('body')

        window.addEventListener('resize', (el) => {
            // console.log(el.target.innerWidth)
            const currentWidth = el.target.innerWidth
            if(currentWidth > 640 && bodyEl.classList.value === 'open'){
                bodyEl.classList.remove('open')    
            }
        })
    }
}
</script>
<style lang="scss" scoped>
.default_layouts{
    display: flex;
    flex-direction: column;

    main{
        flex-grow: 1;
        display: flex;
        align-items: center;
    }
}
</style>