<template>
    <div class="rounded-3xl bg-neutral-900 ring-1 ring-white/15">
        <slot name="main-badges"></slot>
        <Heading v-if="heading" :tag="headingTag">
            {{ heading }}
        </Heading>
        <div>
            <slot></slot>
        </div>
        <slot name="badges"></slot>
    </div>
</template>

<script setup lang="ts">
import type { HeadingTag } from '~/types/heading';

defineProps({
    heading: {
        type: String
    },
    headingTag: {
        type: String as PropType<'div' | HeadingTag>,
        default: 'h3'
    },
})
</script>
