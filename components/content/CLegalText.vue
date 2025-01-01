<template>
    <div class="-mx-[25px]"><a :href="link" class="iubenda-nostyle iubenda-noiframe iubenda-embed iubenda-noiframe iub-body-embed" :title="title">{{ title }}</a></div>
</template>

<script setup lang="ts">
defineProps({
    title: String,
    link: String,
})

useScript({
    src: 'https://cdn.iubenda.com/iubenda.js',
})

useHead({
    bodyAttrs: {
        class: 'bg-white text-body'
    },
})
</script>
