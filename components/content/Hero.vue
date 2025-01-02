<template>
<section class="relative flex items-center overflow-hidden min-h-screen hero-gradient pt-32 -mt-32">
    <Container class="text-center z-10 space-y-10" size="sm">
    <h1 class="font-medium text-neutral-100 text-4xl" v-motion-pop :delay="300">
        <BlurReveal :duration="1" :delay="1.1">
            <span v-if="headingOne">{{ headingOne }}</span>
            <mark v-if="headingTwo" class="italic bg-text-highlight-1 text-transparent bg-clip-text text-8xl pr-[0.2em] mr-[0.2em] font-bold">{{ headingTwo }}</mark>
        </BlurReveal>
    </h1>
    <p class="text-xl" v-motion-fade :delay="2500">
        <ContentSlot :use="$slots.description" />
    </p>

    <div class="grid grid-cols-2 gap-8 justify-center" v-motion-fade>
        <div v-if="ctaButtonText && ctaButtonLink" class="flex justify-end" v-motion-fade :delay="2700">
            <Button variant="primary" :to="ctaButtonLink" size="lg">{{ ctaButtonText }}</Button>
        </div>
        <div class="flex items-center space-x-8" v-motion-fade :delay="2900">
            <Avatars :items="avatars" />
            <div v-if="clientLogoText">{{ clientLogoText }}</div>
        </div>
    </div>

    <StaticLogoCloud v-if="logoTitle" :logos="logos" :title="logoTitle" v-motion-fade :delay="3100" />

    </Container>
    <div class="h-[200%] w-[200%] bg-hero-light-3 bg-no-repeat bg-cover bg-[position:bottom_50px_right_100px] absolute inset-0"></div>

    <RetroGrid />
</section>
</template>

<script setup lang="ts">
const avatars = [
    {
        id: 1,
        name: 'Kaspar & Lukas',
        designation: 'Founders of VISIO',
        image: '/images/kaspar-and-lukas-visio-official.webp'
    },
    {
        id: 2,
        name: 'Jörg Prowald',
        designation: 'Founder of Bano24',
        image: '/images/joerg-prowald-bano24.webp'
    },
    {
        id: 3,
        name: 'Gianmaria Heering',
        designation: 'Founder of Leadpros',
        image: '/images/gianmaria-heering-leadpros.jpg'
    }
]

const logos = [
    {
        name: 'VISIO',
        path: '/images/visio-logo.webp'
    },
    {
        name: 'Leadpros',
        path: '/images/leadpros-logo.png'
    },
    {
        name: 'Tente',
        path: '/images/tente-logo.png'
    },
    {
        name: 'Threes Physiyoga',
        path: '/images/threes-logo.png'
    }
]

defineProps({
    headingOne: {
        type: String,
    },
    headingTwo: {
        type: String,
    },
    ctaButtonText: {
        type: String,
    },
    ctaButtonLink: {
        type: String,
    },
    clientLogoText: {
        type: String,
    },
    logoTitle: {
        type: String
    }
})
</script>

<style scoped>
@keyframes fadeOut {
    0% {
        fill: rgba(128, 0, 128, 0.7);
    }

    100% {
        fill: rgba(128, 0, 128, 0);
    }
}
</style>
