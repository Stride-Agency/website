<template>
    <Accordion type="single" collapsible>
        <ContentSlot :use="$slots.default" />
    </Accordion>
</template>
