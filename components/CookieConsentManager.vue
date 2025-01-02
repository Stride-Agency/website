<script setup lang="ts">
const { locale } = useI18n()
useHead({
    script: [
        {
            hid: 'iubenda',
            innerHTML: `
            var _iub = _iub || []; _iub.csConfiguration = {'siteId':3844276,'cookiePolicyId':82341477,'lang':'${locale.value}','storage':{'useSiteId':true}};
            `,
        }
    ]
})

useScript('https://cs.iubenda.com/autoblocking/3844276.js')
useScript('//cdn.iubenda.com/cs/gpp/stub.js')
useScript({
    src: '//cdn.iubenda.com/cs/iubenda_cs.js',
    async: true,
})
</script>
