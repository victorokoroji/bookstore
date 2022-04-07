import React from 'react';
import propTypes from 'prop-types';
import Button from './Button';

const Book = ({book}) => (
  <>
    <ul>
      <li>{book.title}</li>
      <li>{book.author}</li>
    </ul>
    <Button>Remove</Button>
  </>
);

Book.propTypes = {
  title: propTypes.string.isRequired,
  author: propTypes.string.isRequired,
};

export default Book;
