<script setup lang="ts">
import { cn } from '@/utils'
import { ChevronDown } from 'lucide-vue-next'
import {
  AccordionHeader as AccordionHeaderRadixVue,
  AccordionTrigger as AccordionTriggerRadixVue,
  type AccordionTriggerProps,
} from 'radix-vue'
import { computed, type HTMLAttributes } from 'vue'

const props = defineProps<AccordionTriggerProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props

  return delegated
})
</script>

<template>
  <AccordionHeaderRadixVue class="flex">
    <AccordionTriggerRadixVue
      v-bind="delegatedProps"
      :class="
        cn(
          'flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180',
          props.class,
        )
      "
    >
      <slot />
      <slot name="icon">
        <ChevronDown
          class="h-4 w-4 shrink-0 transition-transform duration-200"
        />
      </slot>
    </AccordionTriggerRadixVue>
  </AccordionHeaderRadixVue>
</template>
