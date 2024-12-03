<template>
    <Container size="lg">
        <div class="mt-10 grid gap-4 sm:mt-16" :class="gridClasses">
            <ContentSlot :use="$slots.default" />
        </div>
    </Container>
  </template>

<script setup lang="ts">
defineProps({
    gridClasses: {
        type: String,
        required: true
    }
})
</script>
