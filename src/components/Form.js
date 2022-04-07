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
		const {title, author} = book
		<div>
			<h1>Add New Book</h1>
			<form>
				<Input type='text' name='title' value={title} placeholder='Book title' className='book-title' onChange={handleChange}/>
				<Input type='text' name='author' value={author} placeholder='Author' className='author' onChange={handleChange}/>
				<Button type='button' className='add-book-btn' onClick={() => dispatch(addBook())}>
					ADD BOOK
				</Button>
			</form>
		</div>
	)
}

export default Form
