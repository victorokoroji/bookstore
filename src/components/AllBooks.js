import React from 'react'
import Book from './Book'
import Form from './Form'
import { useSelector } from 'react-redux'

import React from 'react'

const AllBooks = () => {
	const books = useSelector(state => state.bookReducer)
	return (
		<>
			{books.map(book => (
				<Book key={book.id} title={book.title} author={book.author} />
			))}

			<Form />
		</>
	)
}

export default AllBooks
