import React from 'react'
import Book from './Book'
import Form from './Form'

const AllBooks = ({ title, author, category, completed }) => {
		return (
			<>
				<Book
					key={Math.random()}
					completed={completed}
					title={title}
					author={author}
					category={category}
				/>
				<Form />
			</>
		)
}

export default AllBooks
