<!-- eslint-disable vue/multi-word-component-names -->
<script>
export default {
  props: {
    acao: Function,
    id: String,
    informacao: String,
    recurso: String,
    textoAlternativo: String
  }
}
</script>

<template>
  <button :id="id" @click=acao>
    <img :alt="textoAlternativo" :src="recurso" :title="informacao" height="24px" width="auto" />
  </button>
</template>

<style scoped>
button {
  background-color: rgb(0, 0, 128);
  color: white;
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