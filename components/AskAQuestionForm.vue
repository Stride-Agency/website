<template>
    <AutoForm
        :schema="schema"
        :field-config="{
            message: {
                component: 'textarea',
                label: $t('faq.modal.form.message.label')
            }
        }"
        @submit="handleSubmit"
    >
        <Button variant="primary" type="submit">
            {{ $t('faq.modal.send_question_button') }}
        </Button>
    </AutoForm>
</template>

<script setup lang="ts">
import * as z from 'zod'

const schema = z.object({
    email: z.string().email(),
    message: z.string(),
})
type TFormValues = z.infer<typeof schema>;

const handleSubmit = (values: TFormValues) => {
    console.log(values)
}
</script>
