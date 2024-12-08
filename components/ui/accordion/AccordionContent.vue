<script setup lang="ts">
import { cn } from '@/utils'
import { AccordionContent as AccordionContentRadixVue, type AccordionContentProps } from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<AccordionContentProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <AccordionContentRadixVue
    v-bind="delegatedProps"
    class="overflow-hidden transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down px-6"
  >
    <div :class="cn('pb-4 pt-0', props.class)">
      <slot />
    </div>
  </AccordionContentRadixVue>
</template>
