<template>
    <footer class="bg-slate-900">
      <div class="mx-auto max-w-7xl overflow-hidden px-6 py-8 lg:px-8">
        <nav class="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12 text-center" aria-label="Footer">
          <div v-for="item in navigation.main" :key="item.name" class="pb-6">
            <a :href="item.href" class="text-sm leading-6 text-gray-300 hover:text-gray-100">{{ item.name }}</a>
          </div>
        </nav>
        <p class="mt-10 text-center text-xs leading-5 text-gray-300">&copy; {{ new Date().getFullYear() }} Reimagine Agency Group LLC. All rights reserved.</p>
      </div>
    </footer>
  </template>

<script setup>
import { defineComponent, h } from 'vue'

const navigation = {
  main: [
    { name: 'Impressum', href: '/impressum' },
    { name: 'Datenschutzerklärung', href: '/datenschutzerklaerung' },
  ],
}
</script>
