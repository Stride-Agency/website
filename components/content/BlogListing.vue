<template>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div class="sticky top-0">
            <HeadingAndDescription v-if="title" :title="title" :description="description" />
        </div>
        <div>
            <ContentList
                v-slot="{ posts }"
                :query="query"
            >
                <BlogListingItem v-for="post in posts" :key="post.id" :post="post" />
            </ContentList>
        </div>
    </div>
</template>

<script setup lang="ts">
const { locale } = useI18n()
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'


defineProps({
    title: {
        type: String
    },
    description: {
        type: String
    },
    posts: {
        type: Array
    }
})

const query: QueryBuilderParams = {
    path: `${locale}/blog`,
    limit: 3,
    sort: [{ date: -1 }]
}
</script>
