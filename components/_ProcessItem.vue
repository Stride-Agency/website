<template>
    <Card :heading="title" heading-size="m" heading-tag="div" :class="cardClasses">
        <slot></slot>
        {{ number }}
    </Card>
</template>

<script setup lang="ts">
defineProps({
    title: {
        type: String,
        required: true
    },
    number: {
        type: Number,
    },
    cardClasses: {
        type: String,
    }
})
</script>
