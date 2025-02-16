<template>
    <div class="bg-white py-24 sm:py-32">
        <Container size="lg">
            <HeadingAndDescription
                :title="title"
                :description="description"
                heading-classes="!text-neutral-400 !font-bold"
                description-classes="!text-neutral-500"
            />
            <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
                <div class="-mt-8 sm:-mx-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <ContentSlot :use="$slots.default" class="" />
                </div>
            </div>
        </Container>
    </div>
</template>

<script setup lang="ts">
defineProps({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
    }
})
</script>
