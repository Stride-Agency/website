<template>
    <div class="rounded-xl border border-gray-700 self-start p-3" style="background: rgba(255, 255, 255, 0.05);">
        <component :is="getIcon(name)" class="w-6 h-6" aria-hidden="true" />
    </div>
</template>

<script setup lang="ts">
defineProps({
    name: {
        type: String,
        required: true
    }
})

const getIcon = (name: string) => defineAsyncComponent(() => import(`@/assets/icons/${name}.svg`));
</script>
