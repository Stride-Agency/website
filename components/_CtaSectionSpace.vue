<template>
<section>
    <Container size="lg" class="text-center py-24 space-y-10">
        <Heading tag="h2" size="xxl">
            {{ $props.heading }}
        </Heading>
        <p v-if="$props.description">
            {{ $props.description }}
        </p>
        <Button
            v-if="$props.ctaText && $props.ctaLink"
            :to="$props.ctaLink"
            :external="$props.ctaIsLinkExternal"
        >
            {{ $props.ctaText }}
        </Button>
    </Container>
</section>
</template>

<script setup lang="ts">
import type { CtaSectionDefaultProps } from "@/types/ctaSection";

defineProps<CtaSectionDefaultProps>();
</script>
