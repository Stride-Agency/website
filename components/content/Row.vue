<template>
    <Container size="lg" class="py-24">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6" :class="rowClasses">
            <ContentSlot :use="$slots.default" />
        </div>
    </Container>
</template>

<script setup lang="ts">
defineProps({
    rowClasses: {
        type: String
    }
})
</script>
