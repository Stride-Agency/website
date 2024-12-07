<template>
    <NavigationMenu class="z-40 hidden lg:flex">
      <NavigationMenuList id="main-nav">
        <NavigationMenuItem v-for="item in navigation">
          <NavigationMenuLink v-if="!item.children" :href="item._path" :class="navigationMenuTriggerStyle()">
            {{ item.title }}
          </NavigationMenuLink>
          <NavigationMenuTrigger v-else>{{ item.title }}</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul class="grid gap-3 py-6 px-3 md:w-[400px] lg:w-[700px] lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]" :class="item.color">
              <li v-for="child in item.children?.filter(c => c._path !== item._path)">
                <div class="uppercase text-gray-800 font-medium px-3 mb-2">{{ child.title }}</div>
                <ul>
                  <li v-for="subChild in child.children?.filter(c => c._path !== child._path)">
                    <NavigationMenuLink as-child>
                      <NuxtLink
                        :to="subChild._path"
                        class="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-opacity-20"
                        :class="child.linkClasses"
                      >
                        <div class="flex">
                          <NavigationMenuLinkIcon v-if="subChild.icon" class="mr-4" :name="`${child.color}-${subChild.icon}`" />
                          <div>
                            <div class="text-sm font-medium leading-none text-white mb-1">{{ subChild.title }}</div>
                            <p class="line-clamp-2 text-sm leading-snug text-muted-foreground text-gray-600">
                              {{ subChild.description }}
                            </p>
                          </div>
                        </div>
                      </NuxtLink>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
    <LazyMobileNavigation
        v-if="navigation"
        @update:open="$emit('update:open', $event)"
        :is-mobile-nav-open="isMobileNavOpen"
        :navigation="navigation"
    />
</template>

<script setup lang="ts">
import { navigationMenuTriggerStyle } from '@/components/ui/navigation-menu'
defineEmits(['update:open'])

defineProps({
    isMobileNavOpen: {
        type: Boolean,
        default: false
    },
})

const { data: navigation } = await useAsyncData('mainNavigation', () =>
  fetchContentNavigation(queryContent('main')),
{
  transform: (data) => {
    return data[0].children
  }
})

console.log('navigation', navigation.value)
</script>

<style scoped>
#main-nav li:last-child a {
  @apply bg-green-800 text-lime border border-[rgba(255,255,255,0.05)] hover:bg-green-900;
}
</style>
