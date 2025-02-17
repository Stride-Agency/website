<template>
<section>
    <Container size="lg" class="text-center py-24 rounded-3xl bg-cta-space bg-no-repeat bg-cover bg-center">
        <Container size="xs">
            <div class="space-y-7">
                <Heading tag="h2" size="xxl">
                    {{ $props.heading }}
                </Heading>
                <p v-if="$props.description" class="text-balance">
                    {{ $props.description }}
                </p>
                <Button
                    v-if="$props.ctaText && $props.ctaLink"
                    :to="$props.ctaLink"
                    :external="$props.ctaIsLinkExternal"
                >
                    {{ $props.ctaText }}
                </Button>
            </div>
        </Container>
    </Container>
</section>
</template>

<script setup lang="ts">
import type { CtaSectionDefaultProps } from "@/types/ctaSection";

defineProps<CtaSectionDefaultProps>();
</script>
