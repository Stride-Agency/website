<template>
    <div class="bg-white py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div class="mx-auto max-w-2xl text-center">
                <Heading tag="h2" size="medium" class="!text-neutral-400 !font-bold mb-10">{{ title }}</Heading>
                <p v-if="description" class="text-balance text-lg tracking-tight text-gray-900">
                    {{ description }}
                </p>
            </div>
            <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
                <div class="-mt-8 sm:-mx-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <ContentSlot :use="$slots.default" class="" />
                </div>
            </div>
        </div>
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
