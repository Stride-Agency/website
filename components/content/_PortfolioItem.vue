<template>
    <div class="flex md:min-h-[556px]">
        <!-- image column -->
        <div class="md:w-1/2">
            <div class="[&>img]:object-cover [&>img]:object-left [&>img]:h-full [&>img]:w-full">
                <ContentSlot :use="$slots.image" unwrap="p" />
            </div>
        </div>
        <!-- content column -->
        <div class="md:w-1/2">
            <Card :heading="clientName">
                <template #main-badges>
                    <Badge :variant="mainBadgeVariant[category]">
                        {{ category }}
                    </Badge>
                </template>
                <p>
                    {{ description }}
                </p>
                <hr v-if="transformedTags && transformedTags.length" />
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

type Category = 'ecommerce' | 'saas'
type Tag = 'facebook_api' | 'stripe_api' | 'supabase' | 'vercel' | 'nuxt' | 'typescript' | 'shopware' | 'shop_relaunch' | 'data_migration'

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
