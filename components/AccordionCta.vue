<template>
    <div class="flex justify-center">
        <Heading tag="h3" class="text-center text-balance mb-12">{{ title }}</Heading>
        <Button class="bg-primary text-white">{{ ctaButtonText }}</Button>
    </div>
</template>

<script setup lang="ts">
defineProps({
    title: {
        type: String,
        required: true
    },
    buttonText: {
        type: String,
        required: true
    }
})
</script>
