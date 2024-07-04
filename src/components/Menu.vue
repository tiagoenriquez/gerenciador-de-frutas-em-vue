<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <nav>
    <RouterLink to="/">Lista de Frutas</RouterLink>
    <RouterLink to="/cadastro">Cadastro de Frutas</RouterLink>
  </nav>
</template>

<style scoped>
nav {
  background-color: rgb(0, 0, 128);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100vw;
}

a {
  background-color: rgb(0, 0, 128);
  color: white;
  margin: 8px 8px 8px 8px;
  padding: 8px 8px 8px 8px;
  text-decoration: none;
}

a:hover {
  background-color: rgb(0, 0, 191);
}

a:active {
  background-color: rgb(0, 0, 255);
}
</style>