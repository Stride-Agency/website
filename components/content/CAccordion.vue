<template>
<div class="relative bg-light-4 bg-cover bg-no-repeat">
    <Container size="sm" class="py-32 z-30">
        <Container size="xs" class="text-center space-y-10">
            <Heading tag="h2" class="text-center">{{ title }}</Heading>
            <p v-if="description" class="text-balance text-lg">
                {{ description }}
            </p>
        </Container>
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
