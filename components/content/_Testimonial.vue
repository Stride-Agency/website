<template>
<div class="pt-8 sm:inline-block sm:w-full sm:px-4">
    <figure class="rounded-2xl bg-gray-50 p-8 text-sm/6">
        <blockquote class="text-gray-900">
            <p>{{ `“${testimonial.body}”` }}</p>
        </blockquote>
        <figcaption class="mt-6 flex items-center gap-x-4">
            <div class="[&>img]:size-10 [&>img]:rounded-full [&>img]:bg-gray-50">
                <ContentSlot :use="$slots.image" unwrap="p" />
            </div>
            <div>
                <div class="font-semibold text-gray-900">{{ testimonial.author.name + testimonial.author.role }}</div>
                <div class="text-gray-600">{{ `${testimonial.author.company}` }}</div>
            </div>
        </figcaption>
    </figure>
</div>
</template>

<script setup lang="ts">
import { Testimonial } from '~/types/testimonial';

defineProps({
    testimonial: {
        type: Object as PropType<Testimonial>,
        required: true
    }
})
</script>
