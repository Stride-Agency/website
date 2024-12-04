<template>
    <NavigationMenu class="z-40">
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
  </template>

  <script setup lang="ts">
  import { navigationMenuTriggerStyle } from '@/components/ui/navigation-menu'
const components: { title: string, href: string, description: string }[] = [
  {
    title: 'Alert Dialog',
    href: '/docs/components/alert-dialog',
    description:
      'A modal dialog that interrupts the user with important content and expects a response.',
  },
  {
    title: 'Hover Card',
    href: '/docs/components/hover-card',
    description:
      'For sighted users to preview content available behind a link.',
  },
  {
    title: 'Progress',
    href: '/docs/components/progress',
    description:
      'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
  },
  {
    title: 'Scroll-area',
    href: '/docs/components/scroll-area',
    description: 'Visually or semantically separates content.',
  },
  {
    title: 'Tabs',
    href: '/docs/components/tabs',
    description:
      'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
  },
  {
    title: 'Tooltip',
    href: '/docs/components/tooltip',
    description:
      'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
  },
]

const { data: navigation } = await useAsyncData('mainNavigation', () =>
  fetchContentNavigation(queryContent('/en')),
  {
    transform: (data) => data[0].children?.filter((item) => item.title !== ''),
  })
</script>

<style scoped>
#main-nav li:last-child a {
  @apply bg-green-800 text-lime border border-[rgba(255,255,255,0.05)] hover:bg-green-900;
}
</style>
