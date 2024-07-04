<script>
import store from '@/store';
import Titulo from '../components/Titulo.vue';
import Botao from '../components/Botao.vue';
import GerenciadorDeFrutas from '../models/GerenciadorDeFrutas';
export default {
  components: { Titulo, Botao },
  data() {
    try {
      const id = store.state.id
      const fruta = new GerenciadorDeFrutas().procurar(id)
      return {
        id,
        nome: fruta.nome,
        titulo: `Tem certeza de que deseja ${fruta.nome}?`
      }
    } catch (e) {
      this.$router.push({ path: "/" })
      return {}
    }
  },
  methods: {
    desistir() {
      this.$router.push({ path: "/" })
    },
    excluir() {
      new GerenciadorDeFrutas().excluir(this.id)
      this.$router.push({ path: "/" })
    }
  }
}
</script>

<template>
  <Titulo :texto="titulo" />
  <div class="row-container">
    <Botao :acao="desistir" texto="Não" />
    <Botao :acao="excluir" texto="Sim" />
  </div>
</template>

<style scoped>
.row-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
</style>