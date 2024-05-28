<template>
    <div class="bg-white">
        <div
            class="relative isolate overflow-hidden bg-slate-900 px-6 pt-16 shadow-2xl sm:px-16 md:pt-24  lg:gap-x-20 lg:px-24 lg:pt-0 min-h-screen w-full items-center grid grid-cols-1 lg:grid-cols-2">
            <svg viewBox="0 0 1024 1024"
                class="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
                aria-hidden="true">
                <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fill-opacity="0.7" />
                <defs>
                    <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                        <stop stop-color="#7775D6" />
                        <stop offset="1" stop-color="#E935C1" />
                    </radialGradient>
                </defs>
            </svg>
            <div class="mx-auto  lg:flex-auto lg:py-32 lg:text-left">
                <div class="gap-x-6 lg:justify-start flex-col ">
                    <div class="mb-4 mt-12">
                        <NuxtLink to="/services/shopware-maintenance" class="inline-flex space-x-6">
                            <span class="rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold leading-6 text-primary ring-1 ring-inset ring-primary-300/20">Shopware Wartungsservice</span>
                            <span class="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-300">
                            <span>Mehr Details</span>
                            <ChevronRightIcon class="h-5 w-5 text-gray-300" aria-hidden="true" />
                            </span>
                        </NuxtLink>
                    </div>
                    <h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">Unsere E-Commerce-Agentur startet
                        bald.</h1>
                    <p class="mt-6 text-lg leading-8 text-gray-300">Freue dich auf eine neue, effektive Möglichkeit, deinen
                        Online-Shop zu optimieren. Besuche uns bald wieder, um die neuesten Entwicklungen und unsere
                        innovativen Lösungen zu entdecken.</p>

                    <a href="mailto:hello@stride.agency" class="flex items-center text-gray-300 mt-4">
                        <EnvelopeIcon class="w-6 h-6 text-primary mr-2" />
                        hello@stride.agency
                    </a>

                </div>
            </div>
            <div class="relative mt-16 h-80 lg:mt-8 h-screen items-center justify-center max-w-md hidden lg:flex">
                <img class="w-[34rem] max-w-none lg:mt-4"
                src="/public/stride-agency-coming-soon-scaled.png"
                alt="App screenshot" width="1824" height="1080" />
        </div>

    </div>
</div></template>

<script setup>
import { EnvelopeIcon, ChevronRightIcon } from '@heroicons/vue/24/solid'

useHead({
    title: 'Stride: E-Commerce-Agentur',
})
</script>
