<template>
<div>
    <Heading tag="h2" class="text-center">{{ title }}</Heading>
    <UiAccordion type="single" class="w-full" collapsible>
        <ContentSlot :use="$slots.default" />
    </UiAccordion>
</div>
</template>

<script setup lang="ts">
defineProps({
    title: {
        type: String,
        required: true
    },
})
</script>
