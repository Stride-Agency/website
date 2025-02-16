<template>
    <div class="flex md:min-h-[556px] gap-x-6 even:flex-row-reverse">
        <!-- image column -->
        <div class="md:w-1/2 flex items-stretch">
            <div class="w-full flex items-stretch [&>img]:object-cover [&>img]:object-left [&>img]:h-full [&>img]:w-full [&>img]:absolute [&>img]:rounded-3xl relative ">
                <ContentSlot :use="$slots.image" unwrap="p" />
            </div>
        </div>
        <!-- content column -->
        <div class="md:w-1/2 flex items-stretch text-neutral-100">
            <Card
                :heading="clientName"
                content-position="bottom"
                class="w-full flex flex-col"
            >
                <template #mainBadges>
                    <Badge :variant="mainBadgeVariant[category]">
                        {{ $t(`portfolio.category.${category}`) }}
                    </Badge>
                </template>
                <p class="mb-0">
                    {{ description }}
                </p>
                <hr v-if="transformedTags && transformedTags.length" class="my-5 border-neutral-600" />
                <template #badges>
                    <Badge v-for="tag in transformedTags" :key="tag" variant="gray">
                        {{ $t(`portfolio.tags.${tag}`) }}
                    </Badge>
                </template>
            </Card>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Category } from '~/types/category'

type Tag = 'facebook_api' | 'stripe_api' | 'supabase' | 'vercel' | 'nuxt' | 'typescript' | 'shopware' | 'shop_relaunch' | 'data_migration' | 'shopify' | 'plugin_development' | 'email_marketing' | 'theme_development'

const props = defineProps({
    category: {
        type: String as PropType<Category>,
        required: true
    },
    clientName: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    tags: {
        type: String
    }
})

const mainBadgeVariant = {
    ecommerce: 'ecommerce',
    saas: 'software'
} as {
    [key in Category]: 'ecommerce' | 'software'
}

// Improve later https://discord.com/channels/1084786508424282154/1340447975964409899
const transformedTags = computed(() => {
    return props.tags
        ? JSON.parse(props.tags)
        : [] as Tag[]
})
</script>
