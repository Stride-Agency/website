<template>
    <Container size="lg" class="p-24">
        <HeadingAndDescription v-if="title" :title="title" :description="description" />
        <div class="mt-10 grid gap-4 sm:mt-16" :class="gridClasses">
            <ContentSlot :use="$slots.default" />
        </div>
    </Container>
  </template>

<script setup lang="ts">
defineProps({
    title: {
        type: String,
    },
    description: {
        type: String,
    },
    gridClasses: {
        type: String,
        required: true
    }
})
</script>
