<script setup lang="ts">
import { cn } from '@/utils'
import { AccordionItem as AccordionItemRadixVue, type AccordionItemProps, useForwardProps } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<AccordionItemProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})

const forwardedProps = useForwardProps(delegatedProps)
</script>

<template>
  <AccordionItemRadixVue
    v-bind="forwardedProps"
    :class="cn(props.class)"
    class="bg-neutral-800 bg-opacity-50 border border-white border-opacity-10 rounded-2xl"
  >
    <slot />
  </AccordionItemRadixVue>
</template>
