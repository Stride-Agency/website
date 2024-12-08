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
          'px-6 flex flex-1 items-center justify-between py-4 text-2xl font-medium transition-all [&[data-state=open]>svg]:rotate-180',
          props.class,
        )
      "
    >
      <slot />
      <slot name="icon">
        <ChevronDown
          class="size-8 mr-4 shrink-0 transition-transform duration-200"
        />
      </slot>
    </AccordionTriggerRadixVue>
  </AccordionHeaderRadixVue>
</template>
