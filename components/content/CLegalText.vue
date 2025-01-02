<template>
    <div class="-mx-[25px]"><a :href="link" class="iubenda-nostyle iubenda-noiframe iubenda-embed iubenda-noiframe iub-body-embed" :title="title">{{ title }}</a></div>
</template>

<script setup lang="ts">
const route = useRoute()
defineProps({
    title: String,
    link: String,
})

useHead({
    bodyAttrs: {
        class: 'bg-white text-body'
    },
})

useScript('https://cdn.iubenda.com/iubenda.js')

const reloadIubendaScript = () => {
  const existingScript = document.querySelector('script[src="https://cdn.iubenda.com/iubenda.js"]');
  if (existingScript) {
    existingScript.remove();
  }

  const newScript = document.createElement('script');
  newScript.src = 'https://cdn.iubenda.com/iubenda.js';
  newScript.async = true;
  document.body.appendChild(newScript);
};

onMounted(() => {
  reloadIubendaScript();
});

watch(
  () => route.path,
  () => {
    reloadIubendaScript();
  }
);
</script>
