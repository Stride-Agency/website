<template>
    <component
      :is="componentType"
      :to="disabled ? '' : to"
      class="relative overflow-hidden"
      :class="classes"
      :type="componentType === 'button' ? type : ''"
      :disabled="isLoading || disabled"
      :aria-disabled="disabled"
    >
      <span class="absolute inset-0 bg-gradient-to-r from-purple-800 to-purple-600 transition-opacity duration-300 ease-in-out opacity-100 hover:opacity-0"></span>
      <span class="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-500 transition-opacity duration-300 ease-in-out opacity-0 hover:opacity-100"></span>
      <span v-if="!isLoading" class="flex relative pointer-events-none font-medium">
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
        type: String as PropType<'primary'>,
        default: 'primary'
    },
    size: {
        type: String as PropType<'md' | 'lg'>,
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
    }
})

const componentType = computed(() => (props.to ? NuxtLink : 'button'))


const classes = computed(() => {
  return [
    // general classes
    'rounded-xl bg-purple text-white-100 bg-gradient-to-r from-purple-800 to-purple-600 hover:from-purple-600 hover:to-purple-500 shadow-[inset_0_4px_4px_rgba(255,255,255,0.05),_0_2px_2px_rgba(21,9,84,0.2)] transition-all duration-300 ease-in-out',
    {
      // variant classes
      'w-full': props.full,
      'text-xl px-8 py-4': props.size === 'lg',
      'text-body px-6 py-3': props.size === 'md',
    }
  ]
})
</script>
