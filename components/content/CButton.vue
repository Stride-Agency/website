<template>
    <Button v-bind="$attrs">
        <ContentSlot :use="$slots.default" />
    </Button>
</template>

<script setup lang="ts">
defineProps({
    to: {
        type: String,
        required: true
    },
    size: {
        type: String as PropType<'md' | 'lg' | 'sm'>,
        default: 'md'
    },
    full: {
        type: Boolean,
        default: false
    },
    external: {
        type: Boolean,
        default: false
    }
})
</script>
