<template>
    <div class="relative isolate pt-14 mt-12">
      <div class="lg:pb-40">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
          <div class="mx-auto max-w-2xl text-center relative">

            <h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">Rundum-Wartung für deinen Shop</h1>
            <p class="mt-6 text-lg leading-8 text-gray-300 mb-12">Erhalte regelmäßige Updates und professionelle Wartung für deinen Shopware-Shop. So bleibt dein Online-Geschäft sicher, schnell und stets auf dem neuesten Stand. Verlass dich auf unsere Expertise für einen reibungslosen Betrieb.</p>

            <stripe-pricing-table pricing-table-id="prctbl_1PKxJwJBWr5bnLdv6sLQUCCF"
            publishable-key="pk_live_51PBsnCJBWr5bnLdveCAAp42TWQ73q4SgU0bzelyT1j0T8nQJ1NspsJMTM40yhIUw6KOIKK7d7F3fles3tHmw3KXy00I0xLFpJS">
            </stripe-pricing-table>

          </div>

        </div>
      </div>
    </div>
</template>

<script setup>
useHead({
    title: 'Shopware Wartungsservice',
    script: [
        {
            src: 'https://js.stripe.com/v3/pricing-table.js',
            async: true
        }
    ]
})
</script>
