import React from 'react';
import propTypes from 'prop-types';
import Book from './Book';
import Form from './Form';

const AllBooks = () => (
  <>
    <Book
      key={Math.random()}
      completed= ''
      title= ''
      author=''
      category= ''
    />
    <Form />
  </>
);

export default AllBooks;
