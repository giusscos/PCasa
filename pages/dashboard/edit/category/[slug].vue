<script setup>
const route = useRoute();

const { fetchDataId, updateFn } = useMySupabaseApi();

const catSlug = route.params.slug;

const category = await fetchDataId('categories', 'slug', catSlug);

const errorMessage = ref(null);

const isLoading = ref(false);

async function update() {
    isLoading.value = true;

    try {
        errorMessage.value = null;

        category.slug = createSlug(category.name);

        await updateFn('categories', 'slug', catSlug, category);

        isLoading.value = false;

        navigateTo('/dashboard');
    } catch (error) {
        isLoading.value = false;
        errorMessage.value = error?.message;
    }
}
</script>

<template>
    <div class="container mx-auto font-sans">
        <ButtonBack />

        <h1 class="title-sm leading-none mb-4">
            Modifica Categoria
        </h1>
        <form @submit.prevent="update" class="flex flex-col gap-4 py-10">
            <label class="font-semibold text-lg" for="name" title="Inserisci il nome della categoria">
                <p class="text-xs mb-1">
                    Nome
                </p>
                <input class="bg-transparent focus:outline-none w-full" type="text" id="name" name="name"
                    v-model="category.name" placeholder="Prodotti tipici" required>
            </label>
            <label class="font-semibold text-lg" for="name" title="Inserisci il nome della categoria">
                <p class="text-xs mb-1">
                    Descrizione
                </p>
                <textarea class="bg-transparent border border-pcasa-text/25 focus:outline-none w-full rounded-lg p-2"
                    rows="5" id="descritpion" name="descritpion" v-model="category.description"
                    placeholder="I prodotti tipici Pcasa sono..." />
            </label>
            <div class="self-end flex gap-4 flex-wrap">
                <NuxtLink to="/dashboard"
                    class="px-4 py-1 border-2 border-pcasa-error hover:bg-pcasa-error hover:text-pcasa-text rounded-lg transition font-semibold">
                    Annulla
                </NuxtLink>
                <button type="submit" :disabled="isLoading"
                    class="px-4 py-1 border-2 border-pcasa-accent hover:bg-pcasa-accent hover:text-pcasa-text rounded-lg transition font-semibold">
                    {{ isLoading ? 'Caricamento...' : 'Salva' }}
                </button>
            </div>
        </form>
    </div>
</template>