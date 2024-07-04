<script>
import Entrada from '../components/Entrada.vue'
import Titulo from '../components/Titulo.vue'
import Botao from '../components/Botao.vue'
import GerenciadorDeFrutas from '../models/GerenciadorDeFrutas'
export default {
  components: { Titulo, Entrada, Botao },
  data() {
    return { nome: "", casca: "", polpa: "" }
  },
  methods: {
    handleNome(event) {
      this.nome = event.target.value
    },
    handleCasca(event) {
      this.casca = event.target.value
    },
    handlePolpa(event) {
      this.polpa = event.target.value
    },
    inserir() {
      new GerenciadorDeFrutas().inserir(this.nome, this.casca, this.polpa)
      this.$router.push({ path: "/" })
    }
  }
}
</script>

<template>
  <Titulo texto="Cadastro de Fruta" />
  <Entrada etiqueta="Nome" id="nome" :metodoDeCaptura="handleNome" :valor="nome" />
  <Entrada etiqueta="Casca" id="casca" :metodoDeCaptura="handleCasca" :valor="casca" />
  <Entrada etiqueta="Polpa" id="polpa" :metodoDeCaptura="handlePolpa" :valor="polpa" />
  <Botao :acao="inserir" texto="Inserir" />
</template>