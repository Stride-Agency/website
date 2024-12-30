<template>
    <Container v-bind="$props">
        <ContentSlot :use="$slots.default" />
    </Container>
</template>

<script lang="ts" setup>
const props = defineProps({
    size: {
        type: String as PropType<'sm' | 'lg' | 'xl'>,
        default: 'xl'
    }
});
</script>
