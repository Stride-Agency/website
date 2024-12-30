<template>
    <div>
        <Header />
        <main class="pt-32">
            <NuxtPage />
        </main>
        <Footer />
        <Toaster />
    </div>
</template>

<script setup lang="ts">
useHead({
    bodyAttrs: {
        class: 'bg-neutral text-white-100 font-primary text-base'
    },
    htmlAttrs: {
        class: 'dark'
    }
})
</script>
