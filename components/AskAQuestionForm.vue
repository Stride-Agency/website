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
        <Button variant="primary" type="submit" :is-loading="isLoading">
            {{ $t('faq.modal.send_question_button') }}
        </Button>
    </AutoForm>
</template>

<script setup lang="ts">
import * as z from 'zod'
import { TApi } from '@/types/api'
import { useToast } from '@/components/ui/toast/use-toast'
const isLoading = ref(false)
const emit = defineEmits(['submitted'])
const { toast } = useToast()
const { t } = useI18n()

const schema = z.object({
    name: z.string(),
    email: z.string().email(),
    message: z.string(),
})
type TFormValues = z.infer<typeof schema>;

const handleSubmit = async (values: TFormValues) => {
    try {
        isLoading.value = true
        const { name, email, message } = values

        await $fetch('/api/lead', {
            method: 'POST',
            body: {
                lead: {
                    name,
                    email,
                    message,
                    linear_label_ids: ['ORIGIN_WEBSITE_ASK_A_QUESTION']
                }
            } as TApi<'/api/lead'>['Body']
        })

        toast({
            title: t('faq.modal.form.success_title'),
            description : t('faq.modal.form.success_message'),
        })

        emit('submitted')
    } catch (error: any) {
        console.error(error)
    } finally {
        isLoading.value = false
    }
}
</script>
