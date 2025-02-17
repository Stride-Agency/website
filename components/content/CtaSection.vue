<template>
<component :is="variantComponent" v-bind="$props">
    <slot />
</component>
</template>

<script setup lang="ts">
import type { CtaSectionDefaultProps } from '@/types/ctaSection'

const CtaSectionSpaceResolved = resolveComponent('CtaSectionSpace')

const props = defineProps<CtaSectionDefaultProps>()

const variantComponent = computed(() => {
    switch (props.variant) {
        case 'space':
            return CtaSectionSpaceResolved
        default:
            return CtaSectionSpaceResolved
    }
})

console.log('variantComponent', variantComponent)
</script>
