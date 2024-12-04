<template>
    <div>
        <Header />
        <NuxtPage />
    </div>
</template>

<script setup lang="ts">
useHead({
    bodyAttrs: {
        class: 'bg-neutral text-white-100 font-primary text-body'
    },
    htmlAttrs: {
        class: 'dark'
    }
})
</script>
