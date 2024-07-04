export default class Fruta {
  /**
   * @type {number}
   * @private
   */
  id
  
  /**
   * @type {string}
   * @private
   */
  nome

  /**
   * @type {string}
   * @private
   */
  casca

  /**
   * @type {string}
   * @private
   */
  polpa

  /**
   * 
   * @param {number} id
   * @param {string} nome 
   * @param {string} casca 
   * @param {string} polpa 
   */
  constructor(id, nome, casca, polpa) {
    this.id = id
    this.nome = nome
    this.casca = casca
    this.polpa = polpa
  }
}