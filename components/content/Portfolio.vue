<template>
    <Container size="lg">
        <HeadingAndDescription v-if="title" :title="title" :description="description" />
        <div class="mt-10 flex flex-col sm:mt-16 min-h-[550px] gap-y-6">
            <ContentSlot :use="$slots.default" />
        </div>
    </Container>
</template>

<script setup lang="ts">
defineProps({
    title: {
        type: String
    },
    description: {
        type: String
    }
})
</script>
