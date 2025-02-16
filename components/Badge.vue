<template>
    <span class="inline-flex items-center rounded-md bg-gray-400/10 px-2 py-1 ring-1 ring-inset text-md" :class="variantClasses[variant]">
        <slot></slot>
    </span>
</template>

<script setup lang="ts">
defineProps({
    variant: {
        type: String as PropType<'ecommerce' | 'software' | 'gray'>,
        required: true
    }
})

const variantClasses = {
    ecommerce: 'ring-ecommerce-400/20 text-ecommerce-200',
    software: 'ring-software-400/20 text-software-200',
    gray: 'ring-gray-400/20 text-gray-200'
}
</script>
