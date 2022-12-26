<template>
    <div class="list_wrapper">
        <NavListFooter />
        <!-- <SocialListFooter /> -->
    </div>
</template>
<style scoped>
.list_wrapper {
    gap: 2rem;
    display: flex;
    flex-wrap: wrap;
}

@media(min-width: 1024px) {
    .list_wrapper {
        flex-wrap: nowrap;
    }
}
</style>