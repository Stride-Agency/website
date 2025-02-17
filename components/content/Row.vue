<template>
    <div class="flex" :class="rowClasses">
        <ContentSlot :use="$slots.default" />
    </div>
</template>

<script setup lang="ts">
defineProps({
    rowClasses: {
        type: String
    }
})
</script>
