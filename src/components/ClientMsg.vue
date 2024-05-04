<script setup>
const props = defineProps(["text"]);
const clientText = props.text;
</script>

<template lang="">
  <div class="p-1.5 max-w-5xl flex justify-end">
    <div>
      <h3 class="text-purple-700 font-poppins font-medium ml-2">You</h3>
      <div class="bg-purple-700 p-2 max-w-fit font-montserrat rounded-xl">
        <p>{{ clientText }}</p>
      </div>
    </div>
    <div class="flex items-end ml-3">
      <fa icon="circle-user" class="text-purple-700 h-5 w-5" />
    </div>
  </div>
</template>
