<template>
    <ContentRenderer v-if="page?.body" :value="page" />
</template>

<script setup lang="ts">
const { locale } = useI18n()
const route = useRoute()
const routeWithoutLocale = route.path.replace(`/${locale.value}`, '')

const { data: page } = await useAsyncData(route.path,
    () => queryContent(routeWithoutLocale)
        .findOne()
)
</script>
