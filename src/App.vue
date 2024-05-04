<script setup>
import { reactive, ref, onMounted } from "vue";
import ClientMsg from "./components/ClientMsg.vue";
import AssistantMsg from "./components/AssistantMsg.vue";

const msgInput = ref();
const input = ref(null);
const texts = reactive([
  { type: "assistant", content: "hey" },
  { type: "client", content: "hello" },
]);
const addClientMsg = (e) => {
  texts.push({ type: "client", content: msgInput.value });
  msgInput.value = "";
  e.preventDefault();
};
</script>

<template>
  <main
    class="w-9/12 border-solid border-black border-2 container text-white h-screen flex flex-col"
  >
    <div class="bg-blue-950 p-4">
      <h2 class="text-center font-poppins font-semibold">Chatbot for Services</h2>
    </div>
    <div class="flex-1 overflow-y-scroll message-wrapper">
      <div v-for="(text, index) in texts" :key="index">
        <ClientMsg v-if="text.type == 'assistant'" :text="text.content" />
        <AssistantMsg v-else :text="text.content" />
      </div>
    </div>
    <form
      @submit="addClientMsg"
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
