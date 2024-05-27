```html
<script setup lang="ts">
const router = useRouter()

const nav = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/imprint' },
  { label: 'Parent (index)', to: '/parent' },
  { label: 'Parent (b)', to: '/parent/b' },
  { label: 'Keyed child', onClick: () => router.push(`/parent/reload-${(Math.random() * 100).toFixed()}`) },
  { label: 'Non-Keyed child', onClick: () => router.push(`/parent/static-${(Math.random() * 100).toFixed()}`) },
]
</script>


<template>
  <Container class="mt-24">
    <h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">Impressum</h1>
    <p class="mt-6 text-lg leading-8 text-gray-300">Reimagine Agency Group LLC<br />
    30 N Gould St Ste N<br />
    82801 Sheridan</p>
    
    <h2 class="text-3xl font-bold tracking-tight mt-6 text-white sm:text-4xl">Kontakt</h2>
    <p class="mt-6 text-lg leading-8 text-gray-300">Telefon: ‭+61 449 968 226‬<br />
    E-Mail: hello@stride.agency</p>
    
    <h2 class="text-3xl font-bold tracking-tight mt-6 text-white sm:text-4xl">EU-Streitschlichtung</h2>
    <p class="mt-6 text-lg leading-8 text-gray-300">Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr/</a>.<br /> Unsere E-Mail-Adresse finden Sie oben im Impressum.</p>
    
    <h2 class="text-3xl font-bold tracking-tight text-white mt-6 sm:text-4xl">Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle</h2>
    <p class="mt-6 text-lg leading-8 text-gray-300">Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
  </Container>
</template>