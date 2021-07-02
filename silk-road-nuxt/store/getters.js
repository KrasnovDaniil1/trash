export const cart = (state) => state.cart

export const cartBooks = (state) => state.cartBooks

export const overallSum = (state) => {
  let sum = 0
  state.cart.forEach((element, index) => {
    sum += state.cartBooks[index].price * element.count
  })
  return sum
}

export const books = (state) => state.books

export const activeBook = (state) => state.activeBook

export const booksCount = (state) => state.booksCount

export const booksPage = (state) => state.booksPage
