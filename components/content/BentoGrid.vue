<template>
    <Container size="lg">
        <Container v-if="title || description" size="xs" class="text-center space-y-10">
            <Heading v-if="title" tag="h2">
                {{ title }}
            </Heading>
            <p v-if="description" class="text-balance text-lg tracking-tight">
                {{ description }}
            </p>
        </Container>
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
