import React from 'react';
import Book from './Book';
import Form from './Form';

const AllBooks = () => (
  <>
    <Book
      key={Math.random()}
      completed=""
      title=""
      author=""
      category=""
    />
    <Form />
  </>
);

export default AllBooks;
