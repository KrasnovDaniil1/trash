/* eslint-disable */
import * as getters from "./getters"
import * as actions from "./actions"
import mutations from "./mutations"

const state = () => {
  return {
    cart: [],
    cartBooks: [],

    activeBook: null,

    books: [],
    booksCount: null,
    booksPage: 0,
  }
}

export default {
  state,
  getters,
  actions,
  mutations,
}
