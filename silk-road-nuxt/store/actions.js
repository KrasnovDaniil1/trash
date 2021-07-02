import { BASE_URL } from '@/utils/constants'

export const getBooks = (
  { commit },
  { locale = 'en', pageSize = 36, offset = 0 }
) => {
  fetch(
    `${BASE_URL}${locale}/books/list/?ordering=-pub_date&limit=${pageSize}&offset=${
      offset * pageSize
    }`
  )
    .then((res) => {
      return res.json()
    })
    .then((json) => {
      commit('setBooks', json.results)
      commit('setBooksCount', json.count)
      commit('incrementBooksPage')
    })
}

export const getBookById = ({ commit }, { locale = 'en', id }) => {
  fetch(`${BASE_URL}${locale}/books/${id}`)
    .then((res) => {
      return res.json()
    })
    .then((json) => {
      commit('setActiveBook', json)
    })
}
