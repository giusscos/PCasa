<script setup>
const client = useSupabaseClient();

const credentials = ref({
    email: null,
    password: null
});

const errorMessage = ref(null);

async function login() {
    try {
        errorMessage.value = null;

        const { error } = await client.auth.signInWithPassword({
            email: credentials.value.email,
            password: credentials.value.password,
        })

        if (error) throw (error)

        await navigateTo('/dashboard')

    } catch (error) {
        errorMessage.value = error?.message
    }
}
</script>

<template>
    <section>
        <h1 class="text-xl md:text-4xl md:mx-auto md:max-w-2xl md:text-center font-bold mb-4">
            Accedi per una migliore esperienza
        </h1>
        <form @submit.prevent="login()" class="max-w-xl mx-auto px-5 py-20 flex flex-col gap-6 font-sans">
            <div class="flex flex-col gap-4">
                <label class="font-semibold text-lg" for="email" title="Inserisci la tua email">
                    <p class="text-xs mb-1">
                        Email
                    </p>
                    <input class="bg-transparent focus:outline-none w-full" type="email" id="email" name="email"
                        v-model="credentials.email" placeholder="Inserisci la tua email" required>
                </label>
                <label class="font-semibold text-lg" for="password" title="Inserisci una password sicura">
                    <p class="text-xs mb-1">
                        Password
                    </p>
                    <input class="bg-transparent focus:outline-none w-full" type="password" id="password" name="password"
                        v-model="credentials.password" placeholder="Inserisci la tua password" required>
                </label>
                <p v-if="errorMessage" class="font-bold text-md text-red-500">{{ errorMessage }}</p>
            </div>
            <div class="flex flex-col gap-4">
                <button type="submit" class="block w-fit font-semibold text-2xl text-pcasa-text/75 hover:text-pcasa-text">
                    Accedi
                </button>
                <NuxtLink to="/register" class="font-semibold hover:underline text-pcasa-accent/75 hover:text-pcasa-accent">
                    Non hai ancora un profilo? Crealo da qui
                </NuxtLink>
            </div>
        </form>
    </section>
</template>