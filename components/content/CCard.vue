<template>
    <Card v-bind="$props">
        <slot></slot>
    </Card>
</template>

<script setup lang="ts">
import { CardDefaultProps } from '@/types/card';

withDefaults(defineProps<CardDefaultProps>(), {
    headingTag: 'h3',
    headingSize: 'l',
    contentPosition: 'top',
    background: undefined,
    backgroundClasses: "",
})
</script>
