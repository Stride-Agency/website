<template>
    <div
        class="rounded-3xl bg-neutral-900 ring-1 ring-white/15"
        :style="backgroundStyle"
        :class="mergedBackgroundClasses"
    >

        <!-- Icon -->
        <div v-if="icon" class="block">
            <img :src="icon" alt="" class="w-20 h-20 mx-auto mt-[-3rem]">
        </div>

        <!-- Card Heading -->
        <CardHeading :class="cardHeadingClasses" class="space-y-2">
            <slot name="mainBadges"></slot>
            <Heading v-if="heading" :tag="headingTag" :size="headingSize">
                {{ heading }}
            </Heading>
        </CardHeading>

        <!-- Card Body -->
        <CardBody>
            <slot></slot>
            <div v-if="$slots.badges && $slots.badges().length" class="flex flex-wrap gap-2">
                <slot name="badges"></slot>
            </div>
        </CardBody>

    </div>
</template>

<script setup lang="ts">
import type { CardDefaultProps } from "@/types/card";

const props = withDefaults(defineProps<CardDefaultProps>(), {
    headingTag: 'h3',
    headingSize: 'l',
    contentPosition: 'top',
    background: undefined,
    backgroundClasses: '',
});

const cardHeadingClasses = computed(() => {
    return {
        'mt-auto': props.contentPosition === 'bottom',
    };
});

const defaultBackgroundClasses = 'bg-no-repeat bg-contain bg-top-left';

const mergedBackgroundClasses = computed(() => {
    return props.background
        ? `${defaultBackgroundClasses} ${props.backgroundClasses}`.trim()
        : '';
});

const backgroundStyle = computed(() => {
    if (!props.background) return {};
    return { backgroundImage: `url(${props.background})` };
});
</script>
