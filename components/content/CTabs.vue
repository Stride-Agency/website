<template>
    <Container size="lg">

        <HeadingAndDescription v-if="title" :title="title" :description="description" />

        <Tabs :default-value="tabTriggers[0].slug">
            <TabsList>
                <TabsTrigger
                    v-for="trigger in tabTriggers"
                    :key="trigger.slug"
                    :value="trigger.slug"
                >
                    {{ trigger.title }}
                </TabsTrigger>
            </TabsList>
            <!-- _TabItem rendered here -->
            <ContentSlot :use="$slots.default" />
        </Tabs>
    </Container>
</template>

<script setup lang="ts">
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'

defineProps({
    title: {
        type: String
    },
    description: {
        type: String
    }
})

const slots = useSlots()
const defaultSlot = slots?.default ? slots.default() : []

const tabTriggers = computed(() => {
    return defaultSlot.map((item) => {
        return {
            title: item.props?.title,
            slug: slugify(item.props?.title)
        }
    })
})
</script>
