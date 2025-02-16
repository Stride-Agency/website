<template>
    <div class="px-4 sm:px-6 lg:px-8 mx-auto" :class="maxWidthClass">
        <div class="-mx-4 sm:-mx-6 lg:-mx-8">
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts" setup>
const props = defineProps({
    size: {
        type: String as PropType<'standard' | 'xs' | 'sm' | 'md' | 'lg' | 'xl'>,
        default: 'xl'
    }
})

const maxWidthClass = computed(() => {
    switch (props.size) {
        case 'xs':
            return 'w-full sm:max-w-2xl'
        case 'sm':
            return 'w-full sm:max-w-[54rem]'
        case 'md':
            return 'w-full lg:max-w-5xl'
        case 'lg':
            return 'w-full lg:max-w-7xl'
        case 'xl':
            return ''
        default:
            return ''
    }
});
</script>
