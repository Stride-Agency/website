<template>
    <component
      :is="componentType"
      :to="disabled ? '' : to"
      class="relative overflow-hidden"
      :class="classes"
      :type="componentType === 'button' ? type : ''"
      :disabled="isLoading || disabled"
      :aria-disabled="disabled"
      :target="external ? '_blank' : ''"
    >
      <template v-if="variant === 'primary'">
        <span class="absolute inset-0 bg-gradient-to-r from-purple-800 to-purple-600 transition-opacity duration-300 ease-in-out opacity-100 hover:opacity-0"></span>
        <span class="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-500 transition-opacity duration-300 ease-in-out opacity-0 hover:opacity-100"></span>
      </template>
      <span :class="{ 'flex': !isLoading, 'invisible': isLoading }" class="flex items-center relative pointer-events-none font-medium h-full">
        <span v-if="!!$slots.icon" class="inline-block mr-2">
          <slot name="icon"></slot>
        </span>
        <slot></slot>
      </span>
      <span :class="{ 'visible': isLoading, 'invisible': !isLoading }" class="absolute inset-0 flex items-center justify-center">
        <LoadingSpinner />
      </span>
    </component>
  </template>


<script setup lang="ts">
const NuxtLink = resolveComponent('NuxtLink')

const props = defineProps({
    to: String,
    variant: {
        type: String as PropType<'primary' | 'glassmorphism'>,
        default: 'primary'
    },
    size: {
        type: String as PropType<'md' | 'lg' | 'sm'>,
        default: 'md'
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
    },
    external: {
        type: Boolean,
        default: false
    }
})

const componentType = computed(() => (props.to ? NuxtLink : 'button'))


const classes = computed(() => {
  return [
    // general classes
    'rounded-md transition-all duration-300 ease-in-out',
    {
      // variant classes
      'w-full': props.full,
      'bg-purple text-white-100 bg-gradient-to-r from-purple-800 to-purple-600 hover:from-purple-600 hover:to-purple-500 shadow-[inset_0_4px_4px_rgba(255,255,255,0.05),_0_2px_2px_rgba(21,9,84,0.2)]': props.variant === 'primary',
      'shadow-[inset_0_4px_4px_rgba(255,255,255,0.05)] border border-white/20 bg-gradient-to-b from-[#1A1F39] to-[#1A1F39]': props.variant === 'glassmorphism',
      'text-xl px-8 py-4': props.size === 'lg',
      'text-base px-6 py-3': props.size === 'md',
      'text-base px-4 py-2': props.size === 'sm',
    },
  ]
})
</script>
