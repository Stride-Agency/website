<template>
    <section class="relative overflow-hidden">
        <Container size="lg" class="p-24">
            <HeadingAndDescription v-if="title" :title="title" :description="description" />
            <div class="mt-10 grid gap-6 sm:mt-16" :class="gridClasses">
                <ContentSlot :use="$slots.default" />
            </div>
        </Container>

        <div class="h-[200%] w-[200%] bg-big-gradient-1 bg-no-repeat bg-cover absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10"></div>
    </section>
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
