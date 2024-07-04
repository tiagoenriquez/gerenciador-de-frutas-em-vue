<script>
import store from '../store'
import Titulo from '../components/Titulo.vue'
import Tabela from '../components/Tabela.vue'
export default {
  components: { Titulo, Tabela },
  data() {
    const frutas = store.state.frutas
    frutas.forEach((fruta) => {
      fruta.botaoAtualizar = {
        acao: () => this.atualizar(fruta.id),
        id: `atualizar-${fruta.id}`,
        imagem: '../src/assets/images/caneta2.png',
        informacao: "Atualizar",
        textoAlternativo: "Atualizar"
      }
      fruta.botaoExcluir = {
        acao: () => this.excluir(fruta.id),
        id: `excluir-${fruta.id}`,
        imagem: "../src/assets/images/lixeira-branca.png",
        informacao: "Excluir",
        textoAlternativo: "Excluir"
      }
    })
    return {
      titulos: [
        {id: 1, nome: "Id"},
        {id: 2, nome: "Nome"},
        {id: 3, nome: "Casca"},
        {id: 4, nome: "Polpa"},
        {id: 5, nome: ""},
        {id: 6, nome: ""}
      ],
      frutas,
      pagina: "lista",
      IdDaFrutaSelecionada: -1
    }
  },
  methods: {
    atualizar(id) {
      store.setId(id)
      this.$router.push({ path: "/edicao" })
    },
    excluir(id) {
      store.setId(id)
      this.$router.push({ path: "/ameaca" })
    }
  }
}
</script>

<template>
  <Titulo texto="Lista de Frutas" />
  <Tabela :titulos="titulos" :dados="frutas" />
</template>