<template>
    <section class="min-h-screen flex items-center relative overflow-hidden">
        <div class="h-[150%] w-[150%] bg-hero-light bg-no-repeat bg-cover bg-[position:bottom_-500px_right_200px] absolute inset-0"></div>
        <Container size="lg" class="z-10">
            <p class="text-[3.5rem] font-medium tracking-tighter text-neutral-200 leading-tight">
                <ContentSlot :use="$slots.default" />
            </p>
        </Container>
    </section>
</template>

<style scoped>
strong {
    @apply whitespace-nowrap inline font-medium text-transparent bg-clip-text;
}

strong:nth-child(1) {
    @apply bg-electric-green;
}

strong:nth-child(2) {
    @apply bg-light-blue;
}
</style>
