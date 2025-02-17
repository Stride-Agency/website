<template>
    <Container size="lg">
        <Tabs>
            <!-- <TabsList>
                <TabsTrigger>

                </TabsTrigger>
            </TabsList> -->
            <!-- _TabItem rendered here -->
            <ContentSlot :use="$slots.default" />
        </Tabs>
    </Container>
</template>

<script setup lang="ts">
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'

const slots = useSlots()
const defaultSlot = slots?.default ? slots.default() : []

console.log('defaultSlot', defaultSlot)

</script>
