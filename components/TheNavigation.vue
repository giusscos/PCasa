<template>
    <nav class="navigation">
        <NavList :links="listLinks" />
    </nav>
</template>
<script>
export default {
    name: 'TheNavigation',
    data() {
        return {
            listLinks: [
                {
                    'name': 'La Storia',
                    'route': '/la-storia',
                },
                {
                    'name': 'Detersivi Ecologici',
                    'route': '/detersivi',
                },
                {
                    'name': 'Contatti',
                    'route': '/contatti',
                },
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
@import '~/assets/css/main.scss';

.navigation {
    z-index: 99;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    &::after {
        display: block;
        content: '';

        position: absolute;
        top: 0;
        left: 0;

        width: 100%;
        height: 0;
        border-bottom-left-radius: 200%;
        border-bottom-right-radius: 200%;
        background-color: $color-prim-blur;
        backdrop-filter: blur(15px);
        -webkit-backdrop-filter: blur(15px);
        transition: $slow-transition 200ms;
    }
}

.open {
    .navigation {
        &::after {
            height: 100vh;
            border-radius: 0;
            background-color: $color-prim-darker-blur;
        }
    }
}
</style>