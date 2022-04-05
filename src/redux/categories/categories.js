const BOOK_STATUS = 'bookstore/categories/BOOK_STATUS'

const initialState = {
	categories: [],
}

export const checkStatus = status => {
	return {
		type: BOOK_STATUS,
		payload: status,
	}
}

const categoriesReducer = (state = initialState, action = {}) => {
	const { payload } = action
	switch (action.type) {
		case BOOK_STATUS:
			return {
				...state,
				status: 'Under Construction',
			}
		default:
			return state
	}
}

export default categoriesReducer