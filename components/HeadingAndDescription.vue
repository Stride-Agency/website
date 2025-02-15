<template>
    <div size="lg" class="space-y-10 text-center">
        <Heading tag="h2" size="xxl" :class="headingClasses">
            {{ title }}
        </Heading>
        <Container v-if="description" size="xs">
            <p class="text-balance text-lg tracking-tight" :class="descriptionClasses">
                {{ description }}
            </p>
        </Container>
    </div>
</template>

<script setup lang="ts">
defineProps({
    title: {
        type: String,
        required: true
    },
    headingClasses: {
        type: String,
        default: ''
    },
    description: {
        type: String,
    },
    descriptionClasses: {
        type: String,
        default: ''
    }
})
</script>
