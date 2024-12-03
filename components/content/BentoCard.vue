<template>
    <div :class="cardClasses">
        <div class="overflow-hidden rounded-lg bg-gray-800 ring-1 ring-white/15 max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]">
            <div>
                <ContentSlot :use="$slots.image" imgClasses="" />
            </div>
            <div class="p-10">
                <p class="mt-2 text-lg font-medium tracking-tight text-white">{{ title }}</p>
                <p class="mt-2 max-w-lg text-sm/6 text-gray-400">
                    {{ description }}
                </p>
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
        required: true
    },
    href: {
        type: String,
        required: true
    },
    cardClasses: {
        type: String,
        default: 'flex p-px lg:col-span-4'
    },
    imageClasses: {
        type: String,
        default: 'h-80 object-cover object-left'
    }
})
</script>
