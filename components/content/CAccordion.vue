<template>
<div class="relative bg-light-4 bg-cover bg-no-repeat">
    <Container size="sm" class="py-32 z-30">
        <HeadingAndDescription :title="title" :description="description" />
        <Accordion type="single" class="w-full space-y-4 mt-16 pt-8" collapsible>
            <ContentSlot :use="$slots.default" />
        </Accordion>
        <AccordionCta :title="ctaTitle" :button-text="ctaButtonText" />
    </Container>
</div>
</template>

<script setup lang="ts">
defineProps({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    ctaTitle: {
        type: String,
        required: true
    },
    ctaButtonText: {
        type: String,
        required: true
    }
})
</script>
