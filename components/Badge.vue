<template>
    <span class="inline-flex items-center rounded-md px-2 py-1 ring-1 ring-inset text-md" :class="variantClasses[variant]">
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
    ecommerce: 'bg-ecommerce-400/30 ring-ecommerce-400/20 text-ecommerce-200',
    software: 'bg-software-400/30 ring-software-400/20 text-software-200',
    gray: 'bg-gray-400/30 ring-gray-400/20 text-gray-200'
}
</script>
