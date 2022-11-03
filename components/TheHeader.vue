<template>
    <header class="main_header">
        <TheLogo />
        <TheNavigation />
        <TheLine />
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
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    padding: $smaller-size $small-size;
}
</style>