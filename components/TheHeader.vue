<template>
    <header class="main_header">
        <TheLogo class="the-logo" />
        <TheNav class="the-nav" />
    </header>
</template>
<script>
export default {
  name: "TheHeader",
};
</script>
<style lang="scss" scoped>
.main_header{
    display: flex;
    align-items: center;
    
    padding: 1.5rem 1rem;
    .the-logo{
        z-index: 100;
        margin-right: auto;
    }
    .the-nav{
        z-index: 100;
    }
}
</style>