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
        <li v-for="(link, i) in socialLinksFooter" :key="i + 'footer-list-item'">
            <a :href="link.url" :title="link.title" target="_blank"
                class="block text-gray-300 hover:text-white hover:scale-105 origin-left active:scale-95 transition capitalize text-xl md:text-2xl">
                {{ link.name }}
            </a>
        </li>
    </ul>
</template>
<style>
@import '~/assets/css/main.css';
</style>