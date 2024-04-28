<script setup>
import { reactive, ref, onMounted } from 'vue';
import ClientMsg from './components/ClientMsg.vue';
import AssistantMsg from './components/AssistantMsg.vue';


const msgInput = ref()
const input = ref(null)
const texts = reactive([{ type: 'assistant', content: 'hey' }, { type: 'client', content: 'hello' }])
const addClientMsg = () => {
  texts.push({ type: 'client', content: msgInput.value })
}

</script>

<template>
  <main class="w-9/12 border-solid border-black border-2 container text-white h-screen flex flex-col">
    <div class="bg-sky-400 p-4">
      <h2 class="text-center">Chat Room</h2>
    </div>
    <div class="flex-1 overflow-y-scroll message-wrapper">
      <div v-for='(text, index) in texts' :key="index">
        <ClientMsg v-if="text.type == 'client'" :text='text.content' />
        <AssistantMsg v-else :text='text.content' />
      </div>
    </div>
    <div class='w-full  border-sky-400 border-solid border-2 rounded-md text-black flex'>
      <input type="text" class='p-1 w-full' v-model='msgInput' ref='input' id="inp">
      <button @click='addClientMsg'>send</button>
    </div>
  </main>
</template>
