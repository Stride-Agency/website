<template>
    <div>
        <Header />
        <NuxtPage />
        <Footer />
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
