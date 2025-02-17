<template>
<NuxtLink :to="`${locale}${post._path}`" class="block">
    <div class="flex gap-4">
        <div class="w-2/5">
            <img :src="post['content-image']" alt="" class="w-full h-full object-cover rounded-lg">
        </div>

        <div class="w-3/5 flex flex-col justify-between text-neutral-100">
            <div class="mb-3">
                <Badge :variant="mainBadgeVariant[post.category]">
                    {{ $t(`portfolio.category.${post.category}`) }}
                </Badge>
            </div>

            <Heading tag="div" size="s" class="mb-4">
                {{ post.title }}
            </Heading>

            <div class="flex items-center gap-3">
                <img :src="post['author-image']" alt="" class="w-8 h-8 rounded-full">
                <div>
                    <p class="mb-0">{{ post.author }}</p>
                    <p class="text-md font-light text-neutral-200">{{ formatDate(post.date, locale) }}</p>
                </div>
            </div>
        </div>
    </div>
</NuxtLink>
</template>

<script setup lang="ts">
import type { Post } from '~/types/blog'
const { locale } = useI18n()

defineProps({
    post: {
        type: Object as PropType<Post>,
        required: true
    }
})

const mainBadgeVariant = {
    ecommerce: 'ecommerce',
    saas: 'software'
} as {
    [key in Category]: 'ecommerce' | 'software'
}
</script>
