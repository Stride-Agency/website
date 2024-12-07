<template>
    <AccordionItem :value="title.replace(' ', '-')">
      <AccordionTrigger>{{ title }}</AccordionTrigger>
      <AccordionContent>
        <ContentSlot :use="$slots.default" />
      </AccordionContent>
    </AccordionItem>
</template>

<script setup lang="ts">
defineProps({
    title: {
        type: String,
        required: true
    },
})
</script>
