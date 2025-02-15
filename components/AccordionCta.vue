<template>
    <Dialog :open="isDialogOpen" @update:open="isDialogOpen = $event">
        <div class="text-center mt-16">
            <Container size="xs" class="space-y-10">
                <Heading tag="h3" size="m" class="text-center text-balance">{{ title }}</Heading>
                <Button variant="glassmorphism" @click="isDialogOpen = true">{{ buttonText }}</Button>
            </Container>
            <LazyDialogContent>
                <DialogHeader>
                    <DialogTitle>{{ $t('faq.modal.title') }}</DialogTitle>
                    <DialogDescription>
                        {{ $t('faq.modal.description') }}
                    </DialogDescription>
                </DialogHeader>

                <AskAQuestionForm @submitted="isDialogOpen = false" />
            </LazyDialogContent>
        </div>
    </Dialog>
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

const isDialogOpen = ref(false)
</script>
