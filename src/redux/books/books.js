const ADD_BOOK = 'bookstore/book/ADD_BOOK'
const REMOVE_BOOK = 'bookstore/book/REMOVE_BOOK'

export const addBook = book => {
	return {
		type: ADD_BOOK,
		payload: book,
	}
}

export const removeBook = id => {
	return {
		type: REMOVE_BOOK,
		payload: id,
	}
}
