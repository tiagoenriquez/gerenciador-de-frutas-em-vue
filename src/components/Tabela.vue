<!-- eslint-disable vue/multi-word-component-names -->
<script>
import BotaoDeLinha from './BotaoDeLinha.vue'
export default {
  components: { BotaoDeLinha },
  props: {
    titulos: Array,
    dados: Array
  },
  data() {
    const dadosIdentificados = []
    this.dados.forEach((dado, id) => {
      const atributos = []
      Object.values(dado).forEach((valor, id) => {
        atributos.push({ valor, id })
      })
      dadosIdentificados.push({ atributos, id })
    })
    return {
      dadosIdentificados
    }
  }
}
</script>

<template>
  <table>
    <thead>
      <tr v-if="dadosIdentificados.length > 0">
        <td v-for="titulo in titulos" :key="titulo.id">
          {{ titulo.nome }}
        </td>
      </tr>
    </thead>
    <tbody v-for="dado in dadosIdentificados" :key="dado.id">
      <tr>
        <td v-for="atributo in dado.atributos" :key="atributo.id">
          <div v-if="(typeof atributo.valor === 'object')">
            <BotaoDeLinha
              :acao="atributo.valor.acao"
              :id="atributo.valor.id"
              :informacao="atributo.valor.informacao"
              :recurso="atributo.valor.imagem"
              :textoAlternativo="atributo.valor.textoAlternativo"
            />
          </div>
          <div v-else>{{ atributo.valor }}</div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style>
:root {
  --margin-grande: 8px 8px 8px 8px;
}

table {
  margin: var(--margin-grande);
  padding: var(--margin-grande);
}

thead tr td {
  background-color: rgb(191, 191, 255);
  color: black;
  font-weight: bold;
  text-transform: uppercase;
}

tbody tr {
  background-color: white;
  color: black;
}

tbody tr:hover {
  background-color: rgb(223, 223, 255);
}

td {
  font-family: serif;
  font-size: 16;
  margin: 4px 4px 4px 4px;
  padding: 4px 8px 4px 8px;
  text-align: center;
}
</style>