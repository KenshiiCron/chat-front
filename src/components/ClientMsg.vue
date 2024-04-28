<script setup>

const props = defineProps(['text'])
const clientText = props.text
</script>

<template lang="">
    <div class='p-1.5 max-w-5xl'>
        <h3 class = 'text-sky-400'>You</h3>
        <div class = 'bg-sky-400  p-1 max-w-fit'>
            <p>{{ clientText }}</p>
        </div>
    </div>
</template>