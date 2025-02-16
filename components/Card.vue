<template>
    <div class="rounded-3xl bg-neutral-900 ring-1 ring-white/15">
        <CardHeading :class="cardHeadingClasses" class="space-y-2">
            <slot name="mainBadges"></slot>
            <Heading v-if="heading" :tag="headingTag" :size="headingSize">
                {{ heading }}
            </Heading>
        </CardHeading>
        <CardBody>
            <slot></slot>
            <div v-if="$slots.badges && $slots.badges().length" class="space-x-2">
                <slot name="badges"></slot>
            </div>
        </CardBody>
    </div>
</template>

<script setup lang="ts">
import type { HeadingSize, HeadingTag } from '~/types/heading';

const props = defineProps({
    heading: {
        type: String
    },
    headingTag: {
        type: String as PropType<'div' | HeadingTag>,
        default: 'h3'
    },
    headingSize: {
        type: String as PropType<HeadingSize>,
        default: 'l'
    },
    contentPosition: {
        type: String as PropType<'top' | 'bottom'>,
        default: 'top'
    }
})

const cardHeadingClasses = computed(() => {
    return {
        'mt-auto': props.contentPosition === 'bottom'
    }
})
</script>
