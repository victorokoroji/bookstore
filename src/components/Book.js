import React from 'react'
import propTypes from 'prop-types'
import Button from './Button'

const Book = ({ title, author, category, completed }) => (
	<>
		<ul>
			<li>{title}</li>
			<li>{author}</li>
			<li>{category}</li>
			<li>{completed}</li>
		</ul>
		<Button type='button'>Remove</Button>
	</>
)

Book.propTypes = {
	title: propTypes.string,
	author: propTypes.string,
	category: propTypes.string,
	completed: propTypes.string,
}

export default Book
