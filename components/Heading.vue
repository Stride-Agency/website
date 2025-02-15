<template>
    <component :is="tag" class="font-medium text-white block" :class="sizeClasses">
        <slot></slot>
    </component>
</template>

<script setup lang="ts">
const props = defineProps({
    tag: {
        default: 'div',
        type: String as PropType<'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'>,
    },
    size: {
        type: String as PropType<'xxl' | 'xl' | 'l' | 'm' | 's' | 'xs'>,
        default: 'medium'
    }
})

const sizeClasses = computed(() => {
    const sizeMappings: Record<string, string> = {
        xxl: 'text-5xl',
        xl: 'text-[44px]',
        l: 'text-4xl',
        m: 'text-[28px]',
        s: 'text-2xl',
        xs: 'text-lg'
    };

    return sizeMappings[props.size];
});
</script>
