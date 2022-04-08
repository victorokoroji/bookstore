import bookServices from '../../services/bookServices';

const GET_BOOKS = 'bookstore/book/GET_BOOKS';
const ADD_BOOK = 'bookstore/book/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/book/REMOVE_BOOK';

const initialState = [];

export const getBooks = () => async (dispatch) => {
  try {
    const result = await bookServices.getFromServer();
    return dispatch({
      type: GET_BOOKS,
      payload: result,
    });
  } catch (error) {
    return error;
  }
};

export const addBook = (book) => async (dispatch) => {
	try {
    const result = await bookServices.sendToServer(book);
    return dispatch({
      type: ADD_BOOK,
      payload: result,
    });
  } catch (error) {
    return error;
  }
};

export const removeBook = (id) => async (dispatch) => {
  try {
    await bookServices.removeFromServer(id);
    return dispatch({
      type: REMOVE_BOOK,
      payload: { id },
    });
  } catch (error) {
    return error;
  }
};

const bookReducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case GET_BOOKS:
     return [
				...Object.entries(payload).map(item => ({
					id: item[0],
					title: item[1][0].title,
					author: item[1][0].author,
				})),
			]
    case ADD_BOOK:
      return [...state, payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== payload.id);
    default:
      return state;
  }
};
export default bookReducer;
