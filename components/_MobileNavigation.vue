<template>
    <Sheet :open="isMobileNavOpen" @update:open="$emit('update:open', $event)">
        <SheetContent class="max-w-[90%] w-[500px] border-[#ffffff17] px-6">
            <SheetHeader class="flex justify-between flex-row">
                <SheetTitle class="text-3xl text-left">{{ $t('header.menu') }}</SheetTitle>
                <SheetClose>
                    <Button variant="glassmorphism" size="sm">
                        <template #icon>
                            <SvgoX class="size-5" />
                        </template>
                        {{ $t('header.close') }}
                    </Button>
                </SheetClose>
            </SheetHeader>
            <ul role="list" class="divide-y divide-[#ffffff17] mt-8 -mx-6">
                <li v-for="item in navigation">
                    <NuxtLink class="py-6 px-4 font-normal text-2xl mb-px inline-block w-full" :to="item._path">
                        {{ item.title }}
                    </NuxtLink>
                </li>
            </ul>
            <Button variant="primary" to="/contact" class="text-nowrap flex justify-center mt-8 -mx-3" size="lg">
                {{ $t('header.cta_button_text_contact_us_with_estimated_time') }}
            </Button>
        </SheetContent>
    </Sheet>
</template>

<script setup lang="ts">
defineEmits(['update:open'])
import type { NavItem } from '@nuxt/content'

defineProps({
    isMobileNavOpen: {
        type: Boolean,
        default: false
    },
    navigation: {
        type: Array as PropType<NavItem[]>
    }
})
</script>

<style scoped>
li:last-child a {
    @apply bg-green-800 text-lime border border-[rgba(255,255,255,0.05)] hover:bg-green-900;
}
</style>
