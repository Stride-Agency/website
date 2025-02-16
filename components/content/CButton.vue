<template>
    <Button v-bind="$props">
        <ContentSlot :use="$slots.default" unwrap="p" />
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
