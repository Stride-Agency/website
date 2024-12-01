<template>
    <div class="w-full py-12">
      <div class="flex w-full flex-col items-center justify-center gap-4 px-4 md:px-8">
        <div
          v-if="props.title"
          class="font-medium uppercase text-muted-foreground"
        >
          {{ props.title }}
        </div>
        <div :class="cn('grid grid-cols-2 gap-x-4 sm:grid-cols-4', props.class)">
          <NuxtImg
            v-for="(logo, key) in props.logos"
            :key="key"
            :src="logo.path"
            :alt="logo.name"
            class="h-10 w-28 px-2 brightness-0 dark:invert object-contain aspect-[4/1]"
          />
        </div>
      </div>
    </div>
  </template>

<script setup lang="ts">
import { cn } from '@/utils';
interface Logo {
    name: string;
    path: string;
}
export interface AnimateLogoCloudProps {
    class?: string;
    title?: string;
    logos?: Logo[];
}

const props = defineProps<AnimateLogoCloudProps>();
</script>
