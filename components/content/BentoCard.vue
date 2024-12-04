<template>
    <div class="flex p-px" :class="cardClasses">
        <div class="w-full overflow-hidden rounded-lg bg-neutral-900 ring-1 ring-white/15 max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]">
            <div class="[&>img]:object-cover [&>img]:object-left [&>img]:h-full [&>img]:w-full">
                <ContentSlot :use="$slots.image" unwrap="p" />
            </div>
            <div class="px-10 py-5">
                <p class="mt-2 font-medium tracking-tight text-neutral-100 text-[2rem]">{{ title }}</p>
                <p class="mt-2 max-w-lg text-lg text-neutral-200">
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
    },
    cardClasses: {
        type: String,
        required: true
    },
    imageClasses: {
        type: String,
        default: ''
    }
})
</script>
