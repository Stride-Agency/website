<template>
    <Hero />
    <ContentRenderer v-if="page?.body" :value="page" />
</template>

<script setup lang="ts">
import removeTrailingSlash from '~/utils';

const { locale } = useI18n()
const route = useRoute()

const { data: page } = await useAsyncData(route.path,
    () => queryContent(route.path)
        .findOne()
        // .where({ _extension: 'md', navigation: { $ne: false } })
        // .findSurround(removeTrailingSlash(route.path))
)

console.log('page', page)
</script>
