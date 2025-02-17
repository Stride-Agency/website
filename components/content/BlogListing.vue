<template>
    <section class="bg-big-gradient-1 bg-no-repeat bg-contain bg-right-bottom">
        <Container size="lg" class="py-24">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="sticky top-0 space-y-10">
                    <Heading tag="h2" size="xxl">
                        {{ title }}
                    </Heading>
                    <p v-if="description" class="text-balance text-lg tracking-tight">
                        {{ description }}
                    </p>
                </div>
                <div class="space-y-6">
                    <ContentList
                        path="blog"
                        v-slot="{ list }"
                        :query="query"
                    >
                        <BlogListingItem v-for="post in list" :key="post.title" :post="post" />
                    </ContentList>
                </div>
            </div>
        </Container>
    </section>
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
