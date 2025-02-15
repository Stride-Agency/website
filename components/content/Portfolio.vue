<template>
    <HeadingAndDescription v-if="title" :title="title" :description="description" />
    <div class="mt-10 grid gap-4 sm:mt-16">
        <ContentSlot :use="$slots.default" />
    </div>
</template>

<script setup lang="ts">
defineProps({
    title: {
        type: String
    },
    description: {
        type: String
    }
})
</script>
