<template>
    <Dialog :open="true">
        <div class="text-center mt-16">
            <Heading tag="h3" size="medium" class="text-center text-balance mb-12">{{ title }}</Heading>
            <DialogTrigger>
                <Button variant="glassmorphism">{{ buttonText }}</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{{ $t('faq.modal.title') }}</DialogTitle>
                    <DialogDescription>
                        {{ $t('faq.modal.description') }}
                    </DialogDescription>
                </DialogHeader>

                <AskAQuestionForm />
            </DialogContent>
        </div>
    </Dialog>
</template>

<script setup lang="ts">
import AskAQuestionForm from './AskAQuestionForm.vue';

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
