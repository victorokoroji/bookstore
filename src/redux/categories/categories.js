const BOOK_STATUS = 'bookstore/categories/BOOK_STATUS';

const initialState = {
  categories: [],
};

export const checkStatus = (status) => ({
  type: BOOK_STATUS,
  payload: status,
});

const categoriesReducer = (state = initialState, action = {}) => {
  const { payload } = action;
  switch (action.type) {
    case BOOK_STATUS:
      return {
        ...state,
        status: payload,
      };
    default:
      return state;
  }
};

export default categoriesReducer;
