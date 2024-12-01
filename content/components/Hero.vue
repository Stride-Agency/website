<template>
<section class="relative flex items-center overflow-hidden min-h-screen hero-gradient ">
    <Container class="text-center z-10 space-y-10" size="sm">
            <h1 class=" font-medium text-neutral-100" v-motion-pop :delay="300">
                <BlurReveal :duration="1" :delay="1.1">
                    <span class="text-4xl">Platforms That Don’t Just Look Good.</span>
                    <mark class="italic bg-text-highlight-1 text-transparent bg-clip-text text-8xl">
                        They Perform.
                    </mark>
                </BlurReveal>
            </h1>
            <p class="text-xl" v-motion-fade :delay="2500">
                Your platform is a tool for growth, not just a pretty face. We design with your business in mind, delivering features that boost sales and keep users coming back.
            </p>

            <div class="grid grid-cols-2 gap-8 justify-center" v-motion-fade>
                <div class="flex justify-end" v-motion-fade :delay="2700">
                    <Button variant="primary">Contact us</Button>
                </div>
                <div class="flex items-center space-x-8" v-motion-fade :delay="2900">
                    <Avatars :items="avatars" />
                    <div>Trusted by +50 clients</div>
                </div>
            </div>

            <StaticLogoCloud :logos="logos" title="From Startups to Industry Leaders" v-motion-fade :delay="3100" />

    </Container>
    <div class="testsvg h-screen w-screen bg-hero-light bg-no-repeat bg-cover absolute"></div>

    <RetroGrid :angle="10" />
</section>
</template>

<script setup lang="ts">
import StaticLogoCloud from '~/components/StaticLogoCloud.vue';

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
</script>

<style>
.square:hover {
    fill: rgba(128, 0, 128, 0.7);
    transition: fill 0.3s ease-in-out;
    animation: fadeOut 1.5s forwards;
}

@keyframes fadeOut {
    0% {
        fill: rgba(128, 0, 128, 0.7);
    }

    100% {
        fill: rgba(128, 0, 128, 0);
    }
}
</style>
