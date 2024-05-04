<script setup>
import { reactive, ref, onMounted } from "vue";
import ChatRoom from "./pages/ChatRoom.vue";
import { RouterView } from "vue-router";
</script>

<template>
<main>
  <RouterView/>
</main>

</template>
