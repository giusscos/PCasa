<script>
export default {
    name: "NavListFooter",
    data() {
        return {
            navLinksFooter: [
                {
                    'name': 'prodotti',
                    'nameRoute': '/prodotti',
                    'title': 'Visita la pagina dei prodotti',
                },
                {
                    'name': 'ecologia',
                    'nameRoute': '/ecologia',
                    'title': 'Scopri come facciamo ecologia',
                },
                {
                    'name': 'chi siamo',
                    'nameRoute': '/chi-siamo',
                    'title': 'Scopri la nostra azienda',
                },
                {
                    'name': 'contatti',
                    'nameRoute': '/contatti',
                    'title': 'Visita la pagina dei contatti',
                },
            ]
        }
    }
}
</script>
<template>
    <ul class="py-8 pl-2 flex flex-col gap-y-2">
        <li v-for="(link, i) in navLinksFooter" :key="i + 'footer-nav-list-item'">
            <NuxtLink :to="link.nameRoute" :title="link.title" class="btn_footer text-gray-300 hover:text-white">
                {{ link.name }}
            </NuxtLink>
        </li>
    </ul>
</template>