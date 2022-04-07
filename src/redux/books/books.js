import { v4 as uuidV4 } from 'uuid'
import bookServices from '../../services/bookServices'
const GET_BOOKS = 'bookstore/book/GET_BOOKS'
const ADD_BOOK = 'bookstore/book/ADD_BOOK'
const REMOVE_BOOK = 'bookstore/book/REMOVE_BOOK'

const initialState = []

export const getBooks = () => async dispatch => {
	try {
		const result = await bookServices.getFromServer()
		dispatch({
			type: GET_BOOKS,
			payload: result,
		})
	} catch (error) {
		return error
	}
}

export const addBook = book => async dispatch => {
	try {
		const result = await bookServices.sendToServer(book)
		dispatch({
			type: ADD_BOOK,
			payload: result,
		})
	} catch (error) {
		return error
	}
}

export const removeBook = id => async dispatch => {
	try {
		await bookServices.removeFromServer(id)
		dispatch({
			type: REMOVE_BOOK,
			payload: {id},
		})
	} catch (error) {
		return error
	}
}

const bookReducer = (state = initialState, action) => {
	const { payload } = action
	switch (action.type) {
		case GET_BOOKS: 
			return payload
		case ADD_BOOK:
			return [...state, payload]
		case REMOVE_BOOK:
			return state.filter(book => book.id !== payload.id)
		default:
			return state
	}
}
export default bookReducer
