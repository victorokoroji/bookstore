import { v4 as uuidV4 } from 'uuid';

const ADD_BOOK = 'bookstore/book/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/book/REMOVE_BOOK';

const initialState = [
  {
    id: uuidV4(),
    title: 'Romeo and Juliet',
    author: 'Will Smith',
  },
  {
    id: uuidV4(),
    title: 'Things fall apart',
    author: 'Chinua Achebe',
  },
];

export const addBook = (book) => ({
  type: ADD_BOOK,
  payload: book,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  payload: id,
});

const bookReducer = (state = initialState, action) => {
  const { payload } = action;
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        payload,
      ];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== payload);
    default:
      return state;
  }
};
export default bookReducer;
