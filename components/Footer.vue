<template>
    <footer class="bg-grid-lines-1 bg-no-repeat bg-cover bg-left-top sm:bg-bottom min-h-[856px] relative mt-16 border-t-[#ffffff17] border-t pb-32">
      <Container size="lg" class="mx-auto pb-8 pt-16 sm:pt-24 lg:pt-32">
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-8 lg:gap-8">
          <div class="space-y-8">
            <Logo />
            <p class="text-balance text-gray-300">
              {{ $t('footer.short_description') }}
            </p>
            <div class="flex gap-x-6">
              <NuxtLink v-for="item in navigation.social" :key="item.name" :to="item.href" external class="text-gray-400 hover:text-gray-300">
                <span class="sr-only">{{ item.name }}</span>
                <component :is="getIcon(item.icon)" class="size-6" aria-hidden="true" />
              </NuxtLink>
            </div>
            <p class=" text-gray-400 hidden md:block text-sm">&copy; {{ new Date().getFullYear() }} Stride Agency. All rights reserved.</p>
          </div>
              <div>
                <h3 class="font-medium text-gray-800 uppercase">E-Commerce</h3>
                <ul role="list" class="mt-6 space-y-4">
                  <li v-for="item in ecommerceNavigation" :key="item.title">
                    <NuxtLink :to="item._path" class=" text-white hover:text-white">{{ item.title }}</NuxtLink>
                  </li>
                </ul>
              </div>
              <div class="mt-10 md:mt-0">
                <h3 class=" font-medium text-gray-800 uppercase">Custom Software</h3>
                <ul role="list" class="mt-6 space-y-4">
                  <li v-for="item in softwareNavigation" :key="item.name">
                    <NuxtLink :to="item._path" class=" text-white hover:text-white">{{ item.title }}</NuxtLink>
                  </li>
                </ul>
              </div>
              <div class="mt-10 md:mt-0">
                <h3 class=" font-medium text-gray-800 uppercase">Legal</h3>
                <ul role="list" class="mt-6 space-y-4">
                  <li v-for="item in legalNavigation" :key="item.name">
                    <NuxtLink :to="item._path" class=" text-white hover:text-white">{{ item.title }}</NuxtLink>
                  </li>
                </ul>
            </div>
          </div>
        </Container>
        <div class="bg-stride-footer-font bg-no-repeat bg-contain bg-bottom absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[1495px] h-[400px] max-w-full"></div>
        <Container size="lg" class="absolute bottom-0 left-0 right-0">
          <div class="text-center text-sm md:text-base py-4 md:py-8 text-gray-400">
            <i18n-t keypath="footer.built_with">
              <template #link>
                <NuxtLink class="text-[rgb(0_220_130)]" external to="https://nuxt.com/" rel="nofollow noopener" target="_blank">Nuxt</NuxtLink>
              </template>
            </i18n-t>
          </div>
        </Container>
    </footer>
  </template>

  <script setup lang="ts">
  const navigation = {
    social: [
      {
        name: 'Instagram',
        href: 'https://www.instagram.com/stride.agncy/',
        icon: 'instagram'
      },
      // {
      //   name: 'LinkedIn',
      //   href: '#',
      //   icon: 'linkedin'
      // },
    ],
  }

  const getIcon = (id: string) => defineAsyncComponent(() => import(`@/assets/icons/${id}.svg`));

  const { data: ecommerceNavigation } = await useAsyncData('ecommerceNavigation', () =>
  fetchContentNavigation(queryContent('main', 'services', 'e-commerce')),
  {
    transform: (data) => {
        const t = data[0].children?.filter((item) => item.title !== '')[0].children[0].children
        t?.shift()
        return t
    },
  })
  const { data: softwareNavigation } = await useAsyncData('softwareNavigation', () =>
  fetchContentNavigation(queryContent('main', 'services', 'software')),
  {
    transform: (data) => {
      const t =  data[0].children?.filter((item) => item.title !== '')[0].children[0].children
      t?.shift()
      return t
    },
  })

  const { data: legalNavigation } = await useAsyncData('legalNavigation', () => {
    return fetchContentNavigation(queryContent('legal'))
  }, {
    transform: (data) => {
      const t = data[0].children
      return t
    },
  })
  </script>
