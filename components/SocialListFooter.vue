<script>
export default {
    name: "NavListFooter",
    data() {
        return {
            socialLinksFooter: [
                {
                    'name': 'LinkedIn',
                    'url': '#',
                    'title': 'Visita la pagina LinkedIn',
                },
                {
                    'name': 'Facebook',
                    'url': '#',
                    'title': 'Visita la pagina Faceboook',
                },
                {
                    'name': 'Instagram',
                    'url': '#',
                    'title': 'Visita la pagina Instagram',
                },
                {
                    'name': 'Pinterest',
                    'url': '#',
                    'title': 'Visita la pagina Pinterest',
                },
            ]
        }
    }
}
</script>
<template>
    <ul class="list">
        <li v-for="(link, i) in socialLinksFooter" :key="1000 - i" class="list_item">
            <a :href="link.url" :title="link.title" target="_blank" class="item_link">
                {{ link.name }}
            </a>
        </li>
    </ul>
</template>