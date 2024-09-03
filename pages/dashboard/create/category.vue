<script setup>
import { v4 } from 'uuid';

const { createFn, createStorageFile, updateFn } = useMySupabaseApi();

const errorMessage = ref(null);

const isLoading = ref(false);

const category = ref({
    name: null,
    description: null,
    slug: null,
});

const images = ref([])

const imageUrl = ref([])

const removeImage = (index) => {
    images.value.splice(index, 1);
}

const handleFileChange = (event) => {
    const files = event.target.files

    // Controlla se il numero di immagini non supera 5
    if (files.length + images.value.length > 5) {
        alert('You can upload a maximum of 5 images.')
        return
    }

    for (const file of files) {
        const reader = new FileReader()
        reader.onload = (e) => {
            images.value.push({
                file: file,
                preview: e.target.result,
                uuid: v4()
            })
        }
        reader.readAsDataURL(file)
    }
}

async function create() {
    isLoading.value = true;

    try {
        errorMessage.value = null;

        category.value.slug = createSlug(category.value.name);

        const categoryCreated = await createFn('categories', category.value);

        const imageData = await createStorageFile('images', categoryCreated.slug, images.value)
        
        console.log(imageData);

        imageUrl.value = imageData;

        await updateFn('categories', 'id', categoryCreated.id, { image_url: imageUrl.value })

        isLoading.value = false;

        await navigateTo('/dashboard');
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
            Crea Categoria
        </h1>
        <form @submit.prevent="create" class="flex flex-col gap-4 py-10">
            <div class="flex gap-4 items-end justify-start">
                <label class="font-semibold text-lg" for="images">
                    <p class="text-xs mb-1">
                        Immagine
                    </p>
                    <input class="sr-only" type="file" id="images" name="images" multiple accept="image/*"
                        @change="handleFileChange" :disabled="images.length >= 1" />
                    <div v-if="images.length < 1"
                        class="h-24 w-24 aspect-square rounded-lg bg-pcasa-text/10 flex justify-center items-center cursor-pointer">
                        <IconPlus />
                    </div>
                    <div v-if="images.length == 1"
                        class="h-24 w-24 aspect-square rounded-lg bg-pcasa-text/10 flex justify-center items-center cursor-pointer">
                        1/1
                    </div>
                </label>
                <div v-if="images.length > 0" class="flex items-center justify-center gap-4">
                    <div class="relative" v-for="(image, i) in images" :key="i">
                        <button type="button" @click="removeImage(i)"
                            class="h-7 w-auto aspect-square p-1 bg-pcasa-error text-pcasa-text rounded-full absolute -top-2 -right-2">
                            <IconMinus />
                        </button>
                        <img :src="image.preview" :alt="'Anteprima immagine prodotto' + i"
                            class="h-24 w-24 aspect-square object-cover object-center rounded-lg" />
                    </div>
                </div>
            </div>
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