<template>
<component :is="variantComponent" v-bind="$props">
    <slot />
</component>
</template>

<script setup lang="ts">
import type { CtaSectionDefaultProps } from '@/types/ctaSection'

const props = defineProps<CtaSectionDefaultProps>()

const variantComponent = computed(() => {
    return resolveComponent({
        space: 'CtaSectionSpace',
    }[props.variant]);
})
</script>
