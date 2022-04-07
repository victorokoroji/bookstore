import React from 'react'
import propTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import Button from './Button'
import { removeBook } from '../redux/books/books'

const Book = ({ book }) => {
	const dispatch = useDispatch()
	const handleDelete = () => {
		dispatch(removeBook(book.id))
		document.querySelector(`#${book.id}`).remove()
	}
	return (
		<div className={book.id}>
			<ul>
				<li>{book.title}</li>
				<li>{book.author}</li>
			</ul>
			<Button onClick={handleDelete}>Remove</Button>
		</div>
	)
}

Book.propTypes = {
	title: propTypes.string.isRequired,
	author: propTypes.string.isRequired,
}

export default Book
