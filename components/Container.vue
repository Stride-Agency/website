<template>
    <div class="px-4 sm:px-6 lg:px-8 mx-auto" :class="maxWidthClass">
        <slot></slot>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps({
    size: {
        type: String as PropType<'sm' | 'lg' | 'xl'>,
        default: 'xl'
    }
})

const maxWidthClass = computed(() => {
    switch (props.size) {
        case 'sm':
            return 'w-full sm:max-w-[54rem]'
        case 'lg':
            return 'w-full lg:max-w-[78rem]'
        case 'xl':
            return ''
        default:
            return ''
    }
});
</script>
