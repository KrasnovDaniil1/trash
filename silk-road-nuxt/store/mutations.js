export default {
  handleCart(state, data) {
    let exists = false
    state.cart.forEach((element) => {
      if (element.id === data.id) exists = true
    })

    if (exists) {
      state.cart = state.cart.filter((elem) => elem.id !== data.id)
      state.cartBooks = state.cartBooks.filter((elem) => elem !== data)
    } else {
      // Push elem to the cart
      state.cart.push({
        id: data.id,
        count: 1,
      })
      state.cartBooks.push(data)
    }
  },

  handleCartCount(state, { index, num }) {
    state.cart[index].count += num

    if (state.cart[index].count === 0) {
      state.cart.splice(index, 1)
      state.cartBooks.splice(index, 1)
    }
  },

  flushCart(state) {
    state.cart = []
    state.cartBooks = []
  },

  setActiveBook(state, data) {
    state.activeBook = data
  },

  flushActiveBook(state) {
    state.activeBook = null
  },

  setBooks(state, data) {
    data.forEach((element) => {
      state.books.push(element)
    })
    // Array.prototype.push.apply(state.books, data)
  },

  setBooksCount(state, count) {
    state.booksCount = count
  },

  incrementBooksPage(state) {
    state.booksPage++
  },
}
