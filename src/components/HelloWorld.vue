<script setup>
import { ref, reactive } from 'vue'
const store = reactive({
  type: 'clothes',
  quantity: 2,
  inc() {
    this.quantity++
  }
})
const name = ref('hey')
defineProps({
  msg: String,
})
const model = defineModel()

const update = () => {
  model.value++
}


</script>

<template>
  <h2>parent bound v model is {{ model }}</h2>
  <input type="text" v-model='model'>

</template>
