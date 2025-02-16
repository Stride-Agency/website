<template>
    <section class="relative">

        <Container size="lg" class="py-28 relative">
            <HeadingAndDescription v-if="title" :title="title" :description="description" />
            <div class="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-auto-fit lg:grid-cols-3 gap-6">
                <ContentSlot :use="$slots.default" />
            </div>
        </Container>

    </section>
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
