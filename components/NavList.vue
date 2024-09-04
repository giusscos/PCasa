<script setup>
let headerState = menuState();
let isExpanded = menuToggleState();

const user = useSupabaseUser();

const navLinks = ref([
    {
        'name': 'categorie',
        'nameRoute': '/categorie',
        'title': 'Visita la pagina delle categorie',
    },
    {
        'name': 'prodotti',
        'nameRoute': '/prodotti',
        'title': 'Visita la pagina dei prodotti',
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
    }
]);

function closeMenu() {
    if (headerState.value !== 'opened') return

    isExpanded.value = !isExpanded.value

    headerState.value = 'closing'

    document.querySelector('body').classList.remove('overflow-y-hidden')
};

</script>
<template>
    <ul class="flex flex-col md:flex-row md:justify-center md:items-center gap-y-6 md:gap-x-6">
        <li v-for="(link, i) in navLinks" :key="i + 'item-list'" class="h-full">
            <NuxtLink :to="link.nameRoute" :title="link.title" @click="closeMenu"
                class="pcasa-link-standard">
                {{ link.name }}
            </NuxtLink>
        </li>
        <li v-if="!user" class="h-full">
            <NuxtLink to="/login" title="Accedi al tuo profilo" @click="closeMenu"
                class="pcasa-link-standard">
                Accedi
            </NuxtLink>
        </li>
        <li v-else-if="user" class="h-full">
            <NuxtLink to="/dashboard" title="Vai al tuo profilo" @click="closeMenu"
                class="pcasa-link-standard">
                Profilo
            </NuxtLink>
        </li>
    </ul>
</template>
<style>
@import '~/assets/css/main.css';
</style>