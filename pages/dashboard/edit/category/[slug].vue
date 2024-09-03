<script setup>
import { v4 } from 'uuid';

const BASE_STORAGE_URL = "https://eaayjammgfuuuqsxetie.supabase.co/storage/v1/object/public/images";

const route = useRoute();

const { fetchDataId, updateFn, createStorageFile, deleteStorage } = useMySupabaseApi();

const catSlug = route.params.slug;

const category = ref(null);

const imageUrl = ref([]);

const data = await fetchDataId('categories', 'slug', catSlug);

category.value = data;

imageUrl.value = category.value.image_url;

const errorMessage = ref(null);

const isLoading = ref(false);

const images = ref([])

const removeImage = (index) => {
    images.value.splice(index, 1);
}

const removeExistingImage = async (uuid) => {
    try {
        await deleteStorage('images', category.value.slug, [uuid]);

        const newImageUrl = await updateFn('categories', 'id', category.value.id, { image_url: category.value.image_url.filter((url) => url != uuid) }, 'image_url');

        imageUrl.value = newImageUrl.image_url;
    } catch (error) {
        console.log(error)
    }
}

const handleFileChange = (event) => {
    const files = event.target.files

    if (files.length + images.value.length > 1) {
        alert('You can upload a maximum of 1 image')
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

async function update() {
    try {
        errorMessage.value = null;

        isLoading.value = true;

        category.value.slug = createSlug(category.value.name);

        const imageData = await createStorageFile('images', category.value.slug, images.value)

        category.value.image_url.push(imageData[0]);

        const updatedCategory = await updateFn('categories', 'id', category.value.id, category.value);

        category.value = updatedCategory;

        imageUrl.value = updatedCategory.image_url;

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
            Modifica Categoria
        </h1>
        <form @submit.prevent="update" class="flex flex-col gap-4 py-10">
            <div>
                <p class="text-xs mb-1">
                    Immagini
                </p>
                <div class="flex gap-4 items-start justify-start">
                    <label class="font-semibold text-lg" for="images" title="Inserisci le immagini del prodotto">
                        <input class="sr-only" type="file" id="images" name="images" multiple accept="image/*"
                            @change="handleFileChange" :disabled="(images.length + imageUrl.length) >= 1" />
                        <div v-if="(images.length + imageUrl.length) < 1"
                            class="h-24 w-24 aspect-square rounded-lg bg-pcasa-text/10 flex justify-center items-center cursor-pointer">
                            <IconPlus />
                        </div>
                        <div v-if="(images.length + imageUrl.length) == 1"
                            class="h-24 w-24 aspect-square rounded-lg bg-pcasa-text/10 flex justify-center items-center cursor-pointer">
                            1/1
                        </div>
                    </label>
                    <div class="flex self-end items-center flex-wrap gap-4">
                        <template v-if="imageUrl.length > 0">
                            <div class="relative" v-for="(image, i) in imageUrl" :key="'url-image-' + i">
                                <button type="button" @click="removeExistingImage(image)"
                                    class="h-7 w-auto aspect-square p-1 bg-pcasa-error text-pcasa-text rounded-full absolute -top-2 -right-2">
                                    <IconMinus />
                                </button>
                                <img :src="BASE_STORAGE_URL + '/' + category.slug + '/' + image"
                                    :alt="'Anteprima immagine prodotto caricato ' + i"
                                    class="h-24 w-24 aspect-square object-cover object-center rounded-lg" />
                            </div>
                        </template>
                        <div class="relative" v-for="(image, i) in images" :key="'preview-image-' + i">
                            <button type="button" @click="removeImage(i)"
                                class="h-7 w-auto aspect-square p-1 bg-pcasa-error text-pcasa-text rounded-full absolute -top-2 -right-2">
                                <IconMinus />
                            </button>
                            <img :src="image.preview" :alt="'Anteprima immagine prodotto ' + i"
                                class="h-24 w-24 aspect-square object-cover object-center rounded-lg" />
                        </div>
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