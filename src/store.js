import { guardReactiveProps } from "vue"

const DEFAULT_FRUTAS = []
const DEFAULT_ID = 0

const store = {
  state: guardReactiveProps({ frutas: DEFAULT_FRUTAS, id: DEFAULT_ID }),
  setFrutas(value) {
    this.state.frutas = value
  },
  setId(value) {
    this.state.id = value
  }
}

export default store