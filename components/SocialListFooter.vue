<script>
export default {
    name: "SocialListFooter",
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
            ]
        }
    }
}
</script>
<template>
    <ul class="py-8 pl-2 flex flex-col gap-y-2">
        <li v-for="(link, i) in socialLinksFooter" :key="i + 'footer-social-list-item'">
            <a :href="link.url" :title="link.title" target="_blank"
                class="btn-footer text-gray-300 hover:text-white">
                {{ link.name }}
            </a>
        </li>
    </ul>
</template>
<style>
@import '~/assets/css/main.css';
</style>