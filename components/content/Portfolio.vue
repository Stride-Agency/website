<template>
    <section class="relative">

        <Container size="lg" class="py-28 relative">
            <HeadingAndDescription v-if="title" :title="title" :description="description" />
            <div class="mt-10 flex flex-col sm:mt-16 min-h-[550px] gap-y-6">
                <ContentSlot :use="$slots.default" />
            </div>
        </Container>

        <div class="h-[100%] w-[100%] bg-big-gradient-1 bg-no-repeat bg-cover absolute top-0 right-0 -z-10"></div>
    </section>
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
