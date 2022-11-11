<template>
    <header class="main_header">
        <TheLogo />
        <LazyTheNavigation />
        <LazyTheLine />
    </header>
</template>
<script>
export default {
    name: 'TheHeader',
}
</script>
<style lang="scss" scoped>
@import '~/assets/css/main.scss';
.main_header{
    z-index: 100;
    pointer-events: none;

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    
    color: $color-seco;
    padding: $smaller-size $small-size;
}
</style>