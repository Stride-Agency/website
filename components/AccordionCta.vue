<template>
    <Dialog :open="isDialogOpen" @update:open="isDialogOpen = $event">
        <div class="text-center mt-16">
            <Heading tag="h3" size="medium" class="text-center text-balance mb-12">{{ title }}</Heading>
            <Button variant="glassmorphism" @click="isDialogOpen = true">{{ buttonText }}</Button>
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
