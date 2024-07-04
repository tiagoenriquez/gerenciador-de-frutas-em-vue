<!-- eslint-disable vue/multi-word-component-names -->
<script>
export default {
  props: {
    etiqueta: String,
    id: String,
    valor: String,
    metodoDeCaptura: Function
  }
}
</script>

<template>
  <div class="campo-de-digitacao">
    <label for="{{ id }}">{{ etiqueta }}</label>
    <input type="text" id="{{ id }}" :value="valor" @change="metodoDeCaptura" />
  </div>
</template>

<style scoped>
.campo-de-digitacao {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 32px;
  margin: 8px 8px 8px 8px;
  width: 100%;
}

label {
  text-align: right;
  height: 32px;
  margin: 8px 8px 8px 8px;
  width: 256px;
}

input {
  font-family: serif;
  font-size: 16px;
  height: 32px;
  margin: 8px 8px 8px 8px;
}
</style>