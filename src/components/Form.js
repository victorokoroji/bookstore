import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import Button from './Button'
import Input from './Input'
import { addBook } from '../redux/books/books'
import { v4 as uuidV4 } from 'uuid'

const Form = () => {
	const dispatch = useDispatch()

	const [book, setBook] = useState({
		id: '',
		title: '',
		author: '',
	})

	const handleChange = e => {
		const { name, value } = e.target
		setBook(prevbook => ({
			...prevbook,
			id: uuidV4(),
			[name]: value,
		}))
	}

	return (
		<div>
			<h1>Add New Book</h1>
			<form>
				<Input type='text' placeholder='Book title' className='book-title' />
				<Input type='text' placeholder='Author' className='author' />
				<Button type='button' className='add-book-btn' onClick={() => dispatch(addBook())}>
					ADD BOOK
				</Button>
			</form>
		</div>
	)
}

export default Form
