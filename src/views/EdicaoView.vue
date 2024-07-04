<script>
import GerenciadorDeFrutas from '../models/GerenciadorDeFrutas'
import Titulo from '../components/Titulo.vue'
import Entrada from '../components/Entrada.vue'
import Botao from '../components/Botao.vue'
import store from '@/store'
export default {
  components: { Titulo, Entrada, Botao },
  data() {
    try {
      const id = store.state.id
      const fruta = new GerenciadorDeFrutas().procurar(id)
      return { id, nome: fruta.nome, casca: fruta.casca, polpa: fruta.polpa }
    } catch (e) {
      this.$router.push({ path: "/" })
      return {}
    }
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
    atualizar() {
      new GerenciadorDeFrutas().atualizar(this.id, this.nome, this.casca, this.polpa)
      this.$router.push({ path: "/" })
    }
  }
}
</script>

<template>
  <Titulo texto="Edição de Fruta" />
  <Entrada etiqueta="Nome" :id="nome" :metodoDeCaptura="handleNome" :valor="nome" />
  <Entrada etiqueta="Casca" :id="casca" :metodoDeCaptura="handleCasca" :valor="casca" />
  <Entrada etiqueta="Polpa" :id="polpa" :metodoDeCaptura="handlePolpa" :valor="polpa" />
  <Botao :acao="atualizar" texto="Atualizar" />
</template>
