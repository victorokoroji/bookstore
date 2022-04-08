import React from 'react'
import propTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import Button from './Button'
import { removeBook } from '../redux/books/books'

const Book = ({ book }) => {
	const dispatch = useDispatch()

	const handleDelete = () => {
		dispatch(removeBook(book.id))
	}
	console.log(book)
	const { title, category } = book
	const [title2, author, completed, currChapter] = title.split('>')
	return (
		<div className='book'>
			<div className='book-desc'>
				<div className='book-obj'>
					<p className='category'>{category}</p>
					<h1 className='title'>{title2}</h1>
					<small className='author'>{author}</small>
				</div>
				<div className='obj-actions'>
					<Button className='obj-btn'>Comment</Button>|
					<Button className='obj-btn' onClick={handleDelete}>
						Remove
					</Button>
					|<Button className='obj-btn'>Edit</Button>
				</div>
			</div>
			<div className='progress-chapter'>
				<div className='progress'>
					<svg className='svg' width='120' height='150'>
						<circle className='circle-back' cx='50' cy='80' r='40' />
						<circle className='circle-front' cx='50' cy='80' r='40' />
					</svg>
					<div>
						<div className='percent'>{completed}</div>
						<div className='completed'>completed</div>
					</div>
				</div>
				<div className='pipe' />
				<div>
					<div className='current-chapter'>Current Chapter</div>
					<div className='chapter'>
						<span className='capterXOfY'>{`Chapter ${currChapter}`}</span>
					</div>
					<Button className='update-button' type='button'>
						Update Progress
					</Button>
				</div>
			</div>
		</div>
	)
}

Book.propTypes = {
	book: propTypes.objectOf(propTypes.oneOfType([propTypes.string, propTypes.number])).isRequired,
}

export default Book
