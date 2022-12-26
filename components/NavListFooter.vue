<script>
export default {
    name: "NavListFooter",
    data() {
        return {
            navLinksFooter: [
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
        <li v-for="(link, i) in navLinksFooter" :key="2000 - i" class="list_item">
            <NuxtLink :to="link.nameRoute" :title="link.title" class="item_link">
                {{ link.name }}
            </NuxtLink>
        </li>
    </ul>
</template>