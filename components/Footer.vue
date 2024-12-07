<template>
    <footer class="bg-grid-lines-1 bg-no-repeat bg-contain bg-bottom min-h-[856px] relative">
      <Container size="lg" class="mx-auto pb-8 pt-16 sm:pt-24 lg:pt-32">
        <div class="xl:grid xl:grid-cols-4 xl:gap-8">
          <div class="space-y-8">
            <Logo />
            <p class="text-balance text-sm/6 text-gray-300">
              {{ $t('footer.short_description') }}
            </p>
            <div class="flex gap-x-6">
              <NuxtLink v-for="item in navigation.social" :key="item.name" :to="item.href" external class="text-gray-400 hover:text-gray-300">
                <span class="sr-only">{{ item.name }}</span>
                <component :is="getIcon(item.icon)" class="size-6" aria-hidden="true" />
              </NuxtLink>
            </div>
            <p class="text-sm/6 text-gray-400">&copy; {{ new Date().getFullYear() }} Stride Agency. All rights reserved.</p>
          </div>
              <div>
                <h3 class="text-sm/6 font-semibold text-white">E-Commerce</h3>
                <ul role="list" class="mt-6 space-y-4">
                  <li v-for="item in ecommerceNavigation" :key="item.title">
                    <NuxtLink :to="item._path" class="text-sm/6 text-gray-400 hover:text-white">{{ item.title }}</NuxtLink>
                  </li>
                </ul>
              </div>
              <div class="mt-10 md:mt-0">
                <h3 class="text-sm/6 font-semibold text-white">Custom Software</h3>
                <ul role="list" class="mt-6 space-y-4">
                  <li v-for="item in softwareNavigation" :key="item.name">
                    <NuxtLink :to="item._path" class="text-sm/6 text-gray-400 hover:text-white">{{ item.title }}</NuxtLink>
                  </li>
                </ul>
              </div>
              <div class="mt-10 md:mt-0">
                <h3 class="text-sm/6 font-semibold text-white">Legal</h3>
                <ul role="list" class="mt-6 space-y-4">
                  <li v-for="item in legalNavigation" :key="item.name">
                    <NuxtLink :to="item._path" class="text-sm/6 text-gray-400 hover:text-white">{{ item.title }}</NuxtLink>
                  </li>
                </ul>
            </div>
          </div>
        </Container>
        <div class="bg-stride-footer-font bg-no-repeat absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[1495px] h-[400px]"></div>
    </footer>
  </template>

  <script setup lang="ts">
  const { locale } = useI18n()

  const navigation = {
    social: [
      {
        name: 'Instagram',
        href: '#',
        icon: 'instagram'
      },
      {
        name: 'LinkedIn',
        href: '#',
        icon: 'linkedin'
      },
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
