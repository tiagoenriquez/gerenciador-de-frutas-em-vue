import Fruta from "./Fruta";
import store from "@/store";

export default class GerenciadorDeFrutas {
  /**
   * 
   * @param {number} id 
   * @param {string} nome 
   * @param {string} casca 
   * @param {string} polpa 
   */
  atualizar(id, nome, casca, polpa) {
    const fruta = new Fruta(id, nome, casca, polpa)
    const frutas = store.state.frutas
    const indice = frutas.findIndex(fruta => fruta.id === id)
    frutas[indice] = fruta
    store.setFrutas(frutas)
  }

  /**
   * 
   * @param {number} id 
   */
  excluir(id) {
    const frutas = store.state.frutas
    const indice = frutas.findIndex(fruta => fruta.id === id)
    frutas.splice(indice, 1)
    store.setFrutas(frutas)
  }

  /**
   * 
   * @param {string} nome
   * @param {string} casca
   * @param {string} polpa
   */
  inserir(nome, casca, polpa) {
    const frutas = store.state.frutas
    const id = frutas.length + 1
    const fruta = new Fruta(id, nome, casca, polpa)
    frutas.push(fruta)
    store.setFrutas(frutas)
  }

  /**
   * 
   * @param {*} id 
   */
  procurar(id) {
    const fruta = store.state.frutas.filter((fruta) => {
      return fruta.id === id
    })[0]
    return fruta
  }
}