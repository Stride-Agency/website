<template>
    <div>
        <ContentSlot :use="$slots.default" />
    </div>
  </template>

<script setup lang="ts">
    console.log('$slots.default', $slots.default)
</script>
