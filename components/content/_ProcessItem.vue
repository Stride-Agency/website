<template>
    <Card
        :heading="title"
        heading-size="m"
        heading-tag="div"
        :class="cardClasses"
        class="min-h-80 relative overflow-hidden"
    >
        <slot></slot>
        <span class="absolute text-[175px] right-[0px] bottom-[-70px] text-white text-opacity-5 font-medium">{{ number }}</span>
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
