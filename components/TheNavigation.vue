<template>
    <nav class="navigation">
        <LazyNavList :links="listLinks" />
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
                    'name': 'Detersivi',
                    'route': '/detersivi',
                },
                {
                    'name': 'Artigianato',
                    'route': '/artigianato',
                },
                {
                    'name': 'Prodotti Tipici',
                    'route': '/prodotti-tipici',
                },
            ]
        }
    }
}
</script>
<style lang="scss" scoped>
@import '~/assets/css/main.scss';

.navigation {
    pointer-events: none;
    z-index: 99;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    display: flex;
    align-items: center;
    justify-content: center;
    transition: backdrop-filter $slow-transition 0ms;

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
        backdrop-filter: blur(20px);
        
        transition: $slow-transition 200ms;
    }
}

.open {
    .navigation {
        pointer-events: auto;
        -webkit-backdrop-filter: blur(20px);
        transition: backdrop-filter $slow-transition 400ms;
        &::after {
            height: 100vh;
            border-radius: 0;
            background-color: $color-prim-darker-blur;
        }
    }
}

@media (min-width: $md) {
    .navigation {
        align-items: flex-start;
        justify-content: flex-end;
        padding-top: $small-size;
        padding-right: $smaller-size;
    }
}
</style>