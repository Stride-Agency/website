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
            <Card :title="clientName">
                <template #main-badges>
                    <Badge :variant="mainBadgeVariant[category]">
                        {{ category }}
                    </Badge>
                </template>
                <p>
                    {{ description }}
                </p>
                <hr v-if="tags && tags.length" />
                <template #badges>
                    <Badge v-for="tag in tags" :key="tag" variant="gray">
                        {{ $t(`portfolio.tags.${tag}`) }}
                    </Badge>
                </template>
            </Card>
        </div>
    </div>
</template>

<script setup lang="ts">

type Category = 'ecommerce' | 'saas'

defineProps({
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
        type: Array as PropType<'facebook_api' | 'stripe_api' | 'supabase' | 'vercel' | 'nuxt' | 'typescript' | 'shopware' | 'shop_relaunch' | 'data_migration'[]>,
    }
})

const mainBadgeVariant = {
    ecommerce: 'ecommerce',
    saas: 'software'
} as {
    [key in Category]: 'ecommerce' | 'software'
}
</script>
