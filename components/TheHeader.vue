<template>
    <header class="main_header">
        <div class="container">
            <TheLogo class="the-logo" />
            <TheNav class="the-nav" />
        </div>
    </header>
</template>
<script>
export default {
  name: "TheHeader",
};
</script>
<style lang="scss" scoped>
@import '~/assets/css/main.scss';
.main_header{
    z-index: 100;

    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    padding: 0 $small-size 0;
    background-color: $color-seco-darker-blur;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    .container{
        display: flex;
        align-items: center;
    }
    .the-logo{
        margin-right: auto;
    }
}
</style>