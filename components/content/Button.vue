<template>
    <component :is="componentType" :to="disabled ? '' : to" class="btn" :class="classes" :type="componentType === 'button' ? type : ''" :disabled="isLoading || disabled" :aria-disabled="disabled">
        <span v-if="!isLoading" class="flex">
            <span v-if="!!$slots.icon" class="inline-block mr-2">
                <slot name="icon"></slot>
            </span>
            <slot></slot>
        </span>
        <span v-else>
            <LoadingSpinner />
        </span>
    </component>
</template>

<script setup lang="ts">
const NuxtLink = resolveComponent('NuxtLink')

const props = defineProps({
    to: String,
    variant: {
        type: String as PropType<'primary' | 'light' | 'danger' | 'custom' | 'blue' | 'link'>,
        default: 'primary'
    },
    full: {
        type: Boolean,
        default: false
    },
    isLoading: {
        type: Boolean,
        default: false
    },
    type: {
        type: String as PropType<'button' | 'submit'>,
        default: 'button'
    },
    disabled: {
        type: Boolean,
    },
    download: {
        type: String,
        default: ''
    }
})

const componentType = computed(() => (props.to ? NuxtLink : 'button'))

const classes = computed(() => {
    return {
        'btn-light': props.variant === 'light',
        'btn-primary': props.variant === 'primary',
        'btn-danger': props.variant === 'danger',
        'btn-custom': props.variant === 'custom',
        'btn-blue': props.variant === 'blue',
        'btn-link': props.variant === 'link',
        'w-full': props.full
    }
})
</script>
