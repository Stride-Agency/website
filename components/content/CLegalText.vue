<template>
    <a :href="link" class="iubenda-nostyle iubenda-noiframe iubenda-embed iubenda-noiframe iub-body-embed" :title="title" target="_blank">{{ title }}</a>
</template>


<script lang="ts">
defineProps({
    title: String,
    link: String,
})

useScript({
  src: 'https://cdn.iubenda.com/iubenda.js',
})
</script>
