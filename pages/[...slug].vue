<template>
    <ContentRenderer v-if="page?.body" :value="page" />
</template>

<script setup lang="ts">
const { locale } = useI18n()
const route = useRoute()

const { data: page } = await useAsyncData(route.path,
    () => queryContent(route.path)
        .findOne()
)

console.log('page', page)
</script>
