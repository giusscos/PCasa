<script>
export default {
    name: "NavList",
    data() {
        return {
            navLinks: [
                {
                    'name': 'prodotti',
                    'nameRoute': '/products',
                    'title': 'Visita la pagina dei prodotti',
                },
                {
                    'name': 'ecologia',
                    'nameRoute': '/ecology',
                    'title': 'Scopri come facciamo ecologia',
                },
                {
                    'name': 'chi siamo',
                    'nameRoute': '/about',
                    'title': 'Scopri la nostra azienda',
                },
                {
                    'name': 'contatti',
                    'nameRoute': '/contacts',
                    'title': 'Visita la pagina dei contatti',
                },
            ]
        }
    }
}
</script>
<template>
    <ul class="list">
        <li v-for="(link, i) in navLinks" :key="i" class="list_item item_close">
            <NuxtLink :to="link.nameRoute" :title="link.title" class="item_link">
                {{ link.name }}
            </NuxtLink>
        </li>
    </ul>
</template>
<style scoped>
.list{
    position: relative;
    top: 2rem;
    padding: 1rem;
}

.list_item{
    overflow: hidden;
}

.item_link{
    display: block;
    padding: 0 1rem;
    pointer-events: none;

    font-weight: 600;
    line-height: 1.75;
    font-size: 2.25rem;
    letter-spacing: -0.1rem;
    text-transform: capitalize;
    color: var(--pc-color-white);
    
    transform: translateY(200%);
}

.item_link:hover{
    color: var(--pc-color-link);
    text-decoration: underline;
}

@media(min-width: 1024px){
    .list{
        display: flex;
        top: 0;
    }
    .list_item{
        overflow: unset;
    }
    .item_link{
        line-height: 0.9;
        pointer-events: auto;
        transform: translateY(0%);
    }
}
</style>