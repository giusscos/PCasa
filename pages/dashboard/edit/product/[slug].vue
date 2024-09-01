<script setup>
import { v4 } from 'uuid'

const BASE_STORAGE_URL = "https://eaayjammgfuuuqsxetie.supabase.co/storage/v1/object/public/images";

const route = useRoute()

const prodSlug = route.params.slug;

const { fetchData, fetchDataId, createStorageFile, updateFn, deleteFn, deleteStorage } = useMySupabaseApi();

const categories = await fetchData('categories', 'id, name');

const idCategory = ref(0);

const imageUrls = ref([]);

const product = ref();

const data = await fetchDataId('products', 'slug', prodSlug, '*, categories(id, name)');

product.value = data;

idCategory.value = product.value.categories[0].id;

imageUrls.value = product.value.image_url;

const errorMessage = ref(null);

const isLoading = ref(false);

const images = ref([])

const removeImage = (index) => {
    images.value.splice(index, 1);
}

const removeExistingImage = async (uuid) => {
    try {
        await deleteStorage('images', product.value.id, [uuid]);

        const newImageUrls = await updateFn('products', 'id', product.value.id, { image_url: product.value.image_url.filter((url) => url != uuid) }, 'image_url');

        imageUrls.value = newImageUrls.image_url;
    } catch (error) {
        console.log(error)
    }
}

const handleFileChange = (event) => {
    const files = event.target.files

    if (files.length + images.value.length > 5) {
        alert('You can upload a maximum of 5 images')
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

        if (idCategory.value !== 0 && idCategory.value !== product.value.categories[0].id) {
            await updateFn('product_category', 'id_product', product.value.id, { id_category: idCategory.value })
        }

        const imageData = await createStorageFile('images', product.value.id, images.value)

        imageData.forEach(element => {
            product.value.image_url.push(element);
        });

        images.value = [];

        product.value.slug = createSlug(product.value.name);

        delete product.value.categories;

        const updatedProduct = await updateFn('products', 'id', product.value.id, product.value)

        product.value = updatedProduct;

        imageUrls.value = updatedProduct.image_url;

        isLoading.value = false;

        await navigateTo('/dashboard');
    } catch (error) {
        isLoading.value = false;
        errorMessage.value = error?.message;
    }
}

async function deleteProduct() {
    try {
        await deleteStorage('images', product.value.id, product.value.image_url);

        await deleteFn('products', 'id', product.value.id);

        route.back();
    } catch (error) {
        console.log(error);
    }
}
</script>

<template>
    <div class="container mx-auto font-sans">
        <ButtonBack />

        <div class="flex items-center gap-6">
            <h1 class="title-sm leading-none mb-4">
                Modifica Prodotto
            </h1>
            <button type="button" @click="deleteProduct" title="Elimina il prodotto"
                class="ml-auto px-4 py-1 border-2 border-pcasa-error hover:bg-pcasa-error hover:text-pcasa-text rounded-lg transition font-semibold">
                Elimina prodotto
            </button>
        </div>
        <form @submit.prevent="update" class="flex flex-col gap-4 py-10">
            <div>
                <p class="text-xs mb-1">
                    Immagini
                </p>
                <div class="flex gap-4 items-start justify-start">
                    <label class="font-semibold text-lg" for="images" title="Inserisci le immagini del prodotto">
                        <input class="sr-only" type="file" id="images" name="images" multiple accept="image/*"
                            @change="handleFileChange" :disabled="(images.length + imageUrls.length) >= 5" />
                        <div v-if="(images.length + imageUrls.length) < 5"
                            class="h-24 w-24 aspect-square rounded-lg bg-pcasa-text/10 flex justify-center items-center cursor-pointer">
                            <IconPlus />
                        </div>
                        <div v-if="(images.length + imageUrls.length) == 5"
                            class="h-24 w-24 aspect-square rounded-lg bg-pcasa-text/10 flex justify-center items-center cursor-pointer">
                            5/5
                        </div>
                    </label>
                    <div class="flex self-end items-center flex-wrap gap-4">
                        <div class="relative" v-for="(imageUrl, i) in imageUrls" :key="'url-image-' + i">
                            <button type="button" @click="removeExistingImage(imageUrl)"
                                class="h-7 w-auto aspect-square p-1 bg-pcasa-error text-pcasa-text rounded-full absolute -top-2 -right-2">
                                <IconMinus />
                            </button>
                            <img :src="BASE_STORAGE_URL + '/' + product.id + '/' + imageUrl"
                                :alt="'Anteprima immagine prodotto caricato ' + i"
                                class="h-24 w-24 aspect-square object-contain object-center rounded-lg" />
                        </div>
                        <div class="relative" v-for="(image, i) in images" :key="'preview-image-' + i">
                            <button type="button" @click="removeImage(i)"
                                class="h-7 w-auto aspect-square p-1 bg-pcasa-error text-pcasa-text rounded-full absolute -top-2 -right-2">
                                <IconMinus />
                            </button>
                            <img :src="image.preview" :alt="'Anteprima immagine prodotto ' + i"
                                class="h-24 w-24 aspect-square object-contain object-center rounded-lg" />
                        </div>
                    </div>
                </div>
            </div>
            <label v-if="categories" class="font-semibold text-lg" for="category"
                title="Inserisci la categoria del prodotto">
                <p class="text-xs mb-1">
                    Categoria
                </p>
                <select class="bg-transparent p-2 pr-0 border border-pcasa-text/10 rounded-lg focus:outline-none w-full"
                    id="category" name="category" v-model="idCategory" required>
                    <option selected disabled value="0">Seleziona un opzione</option>
                    <template v-for="(category, i) in categories" :key="'category-option-' + i">
                        <option :selected="idCategory == category.id" :value="category.id">
                            {{ category.name }}
                        </option>
                    </template>
                </select>
            </label>
            <label class="font-semibold text-lg" for="name" title="Inserisci il nome del prodotto">
                <p class="text-xs mb-1">
                    Nome
                </p>
                <input class="bg-transparent focus:outline-none w-full" autocomplete="name" type="text" id="name"
                    name="name" v-model="product.name" placeholder="Prodotti tipici" required>
            </label>
            <label class="font-semibold text-lg" for="description" title="Inserisci il nome del prodotto">
                <p class="text-xs mb-1">
                    Descrizione
                </p>
                <textarea class="bg-transparent border border-pcasa-text/25 focus:outline-none w-full rounded-lg p-2"
                    rows="5" id="description" name="description" v-model="product.description"
                    placeholder="I prodotti tipici Pcasa sono..." />
            </label>
            <label class="font-semibold text-lg" for="amount" title="Inserisci il prezzo del prodotto">
                <p class="text-xs mb-1">
                    Prezzo
                </p>
                <input class="bg-transparent focus:outline-none w-full" type="text" id="amount" name="amount"
                    v-model="product.amount" placeholder="9.99" required>
            </label>
            <label class="font-semibold text-lg" for="quantity" title="Inserisci il prezzo del prodotto">
                <p class="text-xs mb-1">
                    Quantità
                </p>
                <input class="bg-transparent focus:outline-none w-full" type="text" id="quantity" name="quantity"
                    v-model="product.quantity" placeholder="20" required>
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