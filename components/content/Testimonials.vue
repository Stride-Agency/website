<template>
    <div class="bg-white py-24 sm:py-32">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center">
          <h2 class="text-base/7 font-semibold text-indigo-600">{{ title }}</h2>
          <p v-if="description" class="mt-2 text-balance text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">{{ description }}</p>
        </div>
        <div class="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
          <div class="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
            <ContentSlot :use="$slots.default" />
          </div>
        </div>
      </div>
    </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
  }
})
</script>
