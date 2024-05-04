<script setup>
import { reactive, ref, onMounted } from "vue";
import ClientMsg from "../components/ClientMsg.vue";
import AssistantMsg from "../components/AssistantMsg.vue";
import { RouterLink } from "vue-router";
import axios from "axios";
const msgInput = ref();
const input = ref(null);
const texts = reactive([
  { type: "assistant", content: "hey" },
  { type: "client", content: "hello" },
]);
const sendClientMsg = (e) => {
  e.preventDefault();
  texts.push({ type: "client", content: msgInput.value });
  msgInput.value = "";
  axios.post(`${process.env.BASE_URL}/`).then((response)=>{
  })
};
</script>

<template>
  <main
    class="w-9/12 border-solid border-black border-2 container text-white h-screen flex flex-col"
  >
    <div class="bg-blue-950 p-4">
      <h2 class="text-center font-poppins font-semibold">Chatbot for Services</h2>
      <div class = 'bg-transparent p-1 rounded-xl border-solid border-white border w-48 text-center'>
        <RouterLink to = '/form'>Company infomation</RouterLink>
      </div>
    </div>
    <div class="flex-1 overflow-y-scroll message-wrapper max-w-full">
      <div v-for="(text, index) in texts" :key="index" >
        <ClientMsg v-if="text.type == 'client'" :text="text.content" />
        <AssistantMsg v-else :text="text.content" />
      </div>
    </div>
    <form
      @submit="sendClientMsg"
      class="text-black flex p-4 w-full justify-between"
    >
      <input
        type="text"
        class="p-3 w-full border-2 border-solid rounded-full border-blue-300 font-montserrat font-medium"
        v-model="msgInput"
        ref="input"
        id="inp"
      />
      <button type="submit" class="ml-3 font-poppins bg-blue-950  p-3 rounded-full">
        <fa icon="paper-plane" class="text-white" />
      </button>
    </form>
  </main>
</template>
