<template>
    <TabsContent :value="slugifiedTitle">
        <ContentSlot :use="$slots.default" />
    </TabsContent>
</template>

<script setup lang="ts">
import { TabsContent } from '@/components/ui/tabs'

const props = defineProps({
    title: {
        type: String,
        required: true
    },
})

const slugifiedTitle = slugify(props.title)
</script>
