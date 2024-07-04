<!-- eslint-disable vue/multi-word-component-names -->
<script>
export default {
  props: {
   texto: String
  }
}
</script>

<template>
  <h1>{{ texto }}</h1>
</template>

<style scoped>
h1 {
  text-align: center;
  margin: 8px 8px 8px 8px;
}
</style>