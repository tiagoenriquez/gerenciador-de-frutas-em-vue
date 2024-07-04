<script>
import MenuView from './components/Menu.vue'
export default {
  components: { MenuView }
}
</script>

<template>
  <MenuView />
  <main>
    <RouterView />
  </main>  
</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100vw;
}
</style>
