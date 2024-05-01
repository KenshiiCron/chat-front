<script setup>
import { reactive, ref, onMounted } from 'vue';
import ClientMsg from './components/ClientMsg.vue';
import AssistantMsg from './components/AssistantMsg.vue';


const msgInput = ref()
const input = ref(null)
const texts = reactive([{ type: 'assistant', content: 'hey' }, { type: 'client', content: 'hello' }])
const addClientMsg = (e) => {
  texts.push({ type: 'client', content: msgInput.value })
  msgInput.value = ''
  e.preventDefault();
}

</script>

<template>
  <main class="w-9/12 border-solid border-black border-2 container text-white h-screen flex flex-col">
    <div class="bg-sky-400 p-4">
      <h2 class="text-center">Chat Room</h2>
    </div>
    <div class="flex-1 overflow-y-scroll message-wrapper">
      <div v-for='(text, index) in texts' :key="index">
        <ClientMsg v-if="text.type == 'assistant'" :text='text.content' />
        <AssistantMsg v-else :text='text.content' />
      </div>
    </div>
    <form @submit = 'addClientMsg' class='w-full  border-sky-400 border-solid border-2 rounded-md text-black flex'>
      <input type="text" class='p-1 w-full' v-model='msgInput' ref='input' id="inp">
      <button type = 'submit'>send</button>
    </form>
  </main>
</template>
