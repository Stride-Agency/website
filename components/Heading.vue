<template>
    <component :is="tag" class="font-medium block" :class="sizeClasses">
        <slot></slot>
    </component>
</template>

<script setup lang="ts">
import type { HeadingTag, HeadingSize } from '~/types/heading';

const props = defineProps({
    tag: {
        default: 'div',
        type: String as PropType<'div' | HeadingTag>,
    },
    size: {
        type: String as PropType<HeadingSize>,
        default: 'xxl'
    }
})

const sizeClasses = computed(() => {
    const sizeMappings: Record<string, string> = {
        xxl: 'text-6xl',
        xl: 'text-[44px]',
        l: 'text-4xl',
        m: 'text-[28px]',
        s: 'text-2xl',
        xs: 'text-lg'
    };

    return sizeMappings[props.size];
});
</script>
