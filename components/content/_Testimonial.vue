<template>
<div class="pt-8 sm:inline-block sm:w-full last:col-auto last:md:col-span-full last:lg:col-auto
">
    <figure class="rounded-2xl bg-gray-50 p-8">
        <blockquote class="text-gray-900">
            <p v-if="mainBody" class="font-bold text-2xl">{{ `“${mainBody}”` }}</p>
            <hr v-if="mainBody && body" class="my-4">
            <p v-if="body">{{ `“${body}”` }}</p>
        </blockquote>
        <figcaption class="mt-6 flex items-center gap-x-4">
            <div class="[&>img]:size-10 [&>img]:rounded-full [&>img]:bg-gray-50">
                <ContentSlot :use="$slots.image" unwrap="p" />
            </div>
            <div>
                <div class="font-semibold text-gray-900">{{ `${authorName}, ${authorRole}` }}</div>
                <div class="text-gray-700">{{ `${authorCompany}` }}</div>
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
    mainBody: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
})
</script>
