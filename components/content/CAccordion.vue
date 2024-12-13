<template>
<div class="relative bg-light-4 bg-cover bg-no-repeat">
    <Container size="sm" class="py-32 z-30">
        <Heading tag="h2" class="text-center text-balance mb-12 w-3/4 mx-auto">{{ title }}</Heading>
        <Accordion type="single" class="w-full space-y-4" collapsible>
            <ContentSlot :use="$slots.default" />
        </Accordion>
        <AccordionCta title="Didn't find the answer you were looking for?" button-text="Ask a Question" />
    </Container>
</div>
</template>

<script setup lang="ts">
defineProps({
    title: {
        type: String,
        required: true
    },
    // ctaTitle: {
    //     type: String,
    //     required: true
    // },
    // ctaButtonText: {
    //     type: String,
    //     required: true
    // }
})
</script>
