<template>
    <div class="flex p-px lg:col-span-4">
        <div class="overflow-hidden rounded-lg bg-gray-800 ring-1 ring-white/15 max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]">
        <img class="h-80 object-cover object-left" src="https://tailwindui.com/plus/img/component-images/bento-02-releases.png" alt="" />
        <div class="p-10">
            <h3 class="text-sm/4 font-semibold text-gray-400">Releases</h3>
            <p class="mt-2 text-lg font-medium tracking-tight text-white">Push to deploy</p>
            <p class="mt-2 max-w-lg text-sm/6 text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida justo et nulla efficitur, maximus egestas sem pellentesque.</p>
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
        required: true
    },
    href: {
        type: String,
        required: true
    }
})
</script>
