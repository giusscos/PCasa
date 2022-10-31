<template>
    <header class="main_header">
        <TheLogo class="the-logo" />
        <TheNav />
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
        margin-right: auto;
    }
}
</style>