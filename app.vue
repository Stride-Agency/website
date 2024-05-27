<template>
    <Header />
    <main>
        <NuxtPage />
    </main>
    <Footer />
</template>

<script setup>


useHead({
  bodyAttrs: {
    class: 'bg-slate-900'
  },
});
</script>
