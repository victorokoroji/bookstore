const STATUS = 'bookstore/categories/STATUS'

const initialState = {
	categories: [],
}

export const checkStatus = status => {
	return {
		type: STATUS,
		payload: status,
	}
}
