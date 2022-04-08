import React from 'react';
import propTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Button from './Button';
import { removeBook } from '../redux/books/books';

const Book = ({ book }) => {
  console.log(book);
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(removeBook(book.id))
    document.querySelector(`#${book.id}`).remove()
  };
  return (
		<div id={book.id}>
			<ul>
				<li>{book.title}</li>
				<li>{book.author}</li>
			</ul>
			<Button onClick={handleDelete}>Remove</Button>
		</div>
	)
};

Book.propTypes = {
  book: propTypes.objectOf(propTypes.oneOfType([propTypes.string, propTypes.number])).isRequired,
};

export default Book;
