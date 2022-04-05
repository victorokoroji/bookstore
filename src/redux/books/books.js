const ADD_BOOK = 'bookstore/book/ADD_BOOK'
const REMOVE_BOOK = 'bookstore/book/REMOVE_BOOK'

const initialState = {
	books: [],
}

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

const bookReducer = (state = initialState, action={}) => {
  const { payload } = action
	switch (action.type) {
		case ADD_BOOK:
			return {
				...state,
				books: payload,
			}
		case REMOVE_BOOK:
			return {
				...state,
				books: payload,
			}

		default:
			return state
	}
}
export default bookReducer