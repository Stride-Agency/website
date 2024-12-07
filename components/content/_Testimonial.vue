<template>
<div class="pt-8 sm:inline-block sm:w-full sm:px-4">
    <figure class="rounded-2xl bg-gray-50 p-8 text-sm/6">
        <blockquote class="text-gray-900">
            <p>{{ `“${body}”` }}</p>
        </blockquote>
        <figcaption class="mt-6 flex items-center gap-x-4">
            <div class="[&>img]:size-10 [&>img]:rounded-full [&>img]:bg-gray-50">
                <ContentSlot :use="$slots.image" unwrap="p" />
            </div>
            <div>
                <div class="font-semibold text-gray-900">{{ authorName + authorRole }}</div>
                <div class="text-gray-600">{{ `${authorCompany}` }}</div>
            </div>
        </figcaption>
    </figure>
</div>
</template>

<script setup lang="ts">
defineProps({
    authorName: {
        type: String,
        required: true
    },
    authorRole: {
        type: String,
        required: true
    },
    authorCompany: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
})
</script>
