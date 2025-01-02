<template>
    <header class="fixed left-2 right-2 flex justify-between items-center mt-2 lg:mt-8 space-x-2 sm:space-x-8 z-50 px-2 py-2 rounded-2xl border border-[#ffffff17] w-auto lg:w-auto mx-auto max-w-4xl" style="backdrop-filter: blur(24px) saturate(140%); background: hsla(0,0%,4%,.2)">
        <NuxtLink :to="`/${locale}`">
            <Logo />
        </NuxtLink>
        <MainNavigation :is-mobile-nav-open="isMobileNavOpen" @update:open="isMobileNavOpen = $event" />
        <Button variant="primary" to="/contact" class="text-nowrap !text-sm hidden lg:block !px-4 !py-2 h-10 font-medium">
            {{ $t('header.cta_button_text_contact_us_with_estimated_time') }}
        </Button>
        <div class="flex items-center lg:hidden text-xs sm:text-base">
            <NuxtLink variant="primary" to="/contact" size="sm" class="text-nowrap mr-2 font-medium">
                {{ $t('header.cta_button_text_contact_us') }}
            </NuxtLink>
            <Button variant="glassmorphism" size="sm" class="flex items-center text-xs sm:text-base" @click="isMobileNavOpen = !isMobileNavOpen">
                <template #icon>
                    <SvgoHamburger class="size-5" />
                </template>
                {{ $t('header.menu') }}
            </Button>
        </div>
    </header>
</template>

<script setup lang="ts">
const { locale } = useI18n()
const isMobileNavOpen = ref(false)
</script>
