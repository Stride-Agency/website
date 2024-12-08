<template>
    <UiAccordionItem :value="title?.replace(' ', '-')" :key="title?.replace(' ', '-')">
      <UiAccordionTrigger>{{ title }}</UiAccordionTrigger>
      <UiAccordionContent>
        <ContentSlot :use="$slots.default" />
      </UiAccordionContent>
    </UiAccordionItem>
</template>

<script setup lang="ts">
defineProps({
    title: {
        type: String,
        required: true
    },
})
</script>
