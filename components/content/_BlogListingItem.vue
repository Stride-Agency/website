<template>
    <div class="flex gap-4">
        <div class="w-1/3">
            <img :src="post.contentImage" alt="" class="w-full h-full object-cover rounded-lg">
        </div>

        <div class="w-2/3 flex flex-col justify-between">
            <div>
                <span class="inline-block rounded px-3 py-1 text-xs font-semibold">
                    {{ post.category }}
                </span>
            </div>

            <Heading tag="div">
                {{ post.title }}
            </Heading>

            <div class="flex items-center gap-3">
                <img :src="post.authorImage" alt="" class="w-8 h-8 rounded-full">
                <div>
                    <p class="text-sm font-medium">{{ post.author }}</p>
                    <p class="text-xs">{{ post.date }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Post } from '~/types/blog'

defineProps({
    post: {
        type: Object as PropType<Post>,
        required: true
    }
})
</script>
