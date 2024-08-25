<script setup>
import { v4 } from 'uuid'  // Importa la funzione per generare UUID

const client = useSupabaseClient()

const errorMessage = ref(null);
const isLoading = ref(false);

const product = ref({
    name: null,
    description: null,
    amount: null,
    hide: false,
    quantity: null,
    image_url: null,
    slug: null,
});

const id_category = ref(0);

const images = ref([])
const imageUrls = ref([])

const { data: categories } = await client
    .from('categories')
    .select('id, name');

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

function createSlug(string) {
    return string
        .toLowerCase()                       // Convert to lowercase
        .trim()                              // Remove leading/trailing spaces
        .replace(/[^a-z0-9\s-]/g, '')        // Remove special characters
        .replace(/\s+/g, '-')                // Replace spaces with hyphens
        .replace(/-+/g, '-')                 // Replace multiple hyphens with a single hyphen
        .replace(/^-+|-+$/g, '');            // Trim hyphens from the start and end
}

async function create() {
    isLoading.value = true;

    try {
        errorMessage.value = null;

        product.value.slug = createSlug(product.value.name);

        const { data: productCreated, error } = await client
            .from('products')
            .insert([
                product.value,
            ])
            .select();

        if (error) throw (error);

        for (const image of images.value) {
            const { data: imageData, error } = await client
                .storage
                .from('images')
                .upload(`${productCreated[0].id}/${image.uuid}`, image.file)

            imageUrls.value.push(imageData.path.split('/')[1]);

            if (error) throw (error);
        }

        await client
            .from('products')
            .update({ image_url: imageUrls.value })
            .eq('id', productCreated[0].id)
            .select();

        await client
            .from('product_category')
            .insert([
                { id_category: id_category.value, id_product: productCreated[0].id },
            ])
            .select();

        isLoading.value = false;

    } catch (error) {
        isLoading.value = false;
        errorMessage.value = error?.message;
        console.log(error)
    }
}

</script>

<template>
    <div class="container mx-auto font-sans">
        <ButtonBack />

        <h1 class="title-sm leading-none mb-4">
            Crea Prodotto
        </h1>
        <form @submit.prevent="create" class="flex flex-col gap-4 py-10">
            <div class="flex gap-4 items-end justify-start">
                <label class="font-semibold text-lg" for="images">
                    <p class="text-xs mb-1">
                        Immagini
                    </p>
                    <input class="sr-only" type="file" id="images" name="images" multiple accept="image/*"
                        @change="handleFileChange" :disabled="images.length >= 5" />
                    <div v-if="images.length <= 5"
                        class="h-24 w-24 aspect-square rounded-lg bg-pcasa-text/10 flex justify-center items-center cursor-pointer">
                        <IconPlus />
                    </div>
                </label>
                <div v-if="images.length > 0" class="flex items-center justify-center gap-4">
                    <div class="relative" v-for="(image, i) in images" :key="i">
                        <button type="button" @click="removeImage(i)"
                            class="h-7 w-auto aspect-square p-1 bg-pcasa-error text-pcasa-text rounded-full absolute -top-2 -right-2">
                            <IconMinus />
                        </button>
                        <img :src="image.preview" :alt="'Anteprima immagine prodotto' + i"
                            class="h-24 w-24 aspect-square object-contain object-center rounded-lg" />
                    </div>
                </div>
            </div>
            <label v-if="categories" class="font-semibold text-lg" for="category"
                title="Inserisci la categoria del prodotto">
                <p class="text-xs mb-1">
                    Categoria
                </p>
                <select class="bg-transparent p-2 pr-0 border border-pcasa-text/10 rounded-lg focus:outline-none w-full"
                    id="category" name="category" v-model="id_category" required>
                    <option selected disabled value="0">Seleziona un opzione</option>
                    <template v-for="(category, i) in categories" :key="'category-option-' + i">
                        <option :value="category.id">
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