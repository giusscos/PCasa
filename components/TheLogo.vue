<template>
    <div class="logo_wrapper" @click="setClose">
        <NuxtLink to="/" class="logo-link"></NuxtLink>
        <h1 class="logo">
            Pcasa
        </h1>
    </div>
</template>
<script>
export default {
    name: 'TheLogo',
    methods: {
        setClose(){
            const bodyEl = document.querySelector('body')

            if(bodyEl.classList.value === 'open'){
                bodyEl.classList.remove('open')
            }
        }
    }
}
</script>
<style lang="scss" scoped>
@import '~/assets/css/main.scss';
.logo_wrapper {
    z-index: 100;
    position: relative;
    width: fit-content;
    .logo-link {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: auto;
    }

    .logo{
        font-weight: 300;
        transition: $slow-transition;
    }
}
</style>