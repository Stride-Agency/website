<template>
    <Header />
    <main>
      <div class="text-neutral-900">Test</div>
        <NuxtPage />
    </main>
    <Footer />
</template>

<script setup>
useHead({
  bodyAttrs: {
    class: 'bg-slate-900 text-gray-300'
  },
});
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  h1 {
    @apply text-2xl mb-2 font-bold;
  }
  h2 {
    @apply text-xl mb-2 font-bold;
  }
  h3 {
    @apply text-lg mb-2 font-bold;
  }
  p {
    @apply mb-6;
  }
  ul {
    @apply list-disc pl-4 mb-6;
  }
}
</style>
