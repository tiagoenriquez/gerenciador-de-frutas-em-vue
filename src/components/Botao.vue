<!-- eslint-disable vue/multi-word-component-names -->
<script>
export default {
  props: {
    acao: Function,
    texto: String
  }
}
</script>

<template>
  <button @click=acao>{{ texto }}</button>
</template>

<style scoped>
button {
  background-color: rgb(0, 0, 128);
  border: none;
  color: white;
  cursor: pointer;
  font-family: serif;
  font-size: 16px;
  margin: 8px 8px 8px 8px;
  padding: 8px 8px 8px 8px;
}

button:hover {
  background-color: rgb(0, 0, 191);
}

button:active {
  background-color: rgb(0, 0, 255);
}
</style>