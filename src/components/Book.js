import React from 'react';
import propTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Button from './Button';
import { removeBook } from '../redux/books/books';

const Book = ({ book }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(removeBook(book.id));
  };

  const { title, category,} = book
  const [title2, author, completed, currChapter] = title.split('>');
  return (
		<div className='book'>
			<div className='book-desc'>
				<div className='book-obj'>
					<div className='category'>{category}</div>
					<div className='title'>{title2}</div>
					<div className='author'>{author}</div>
				</div>
				<div className='part1-second'>
					<Button className='comment-button' type='button'>
						Comment
					</Button>
					|
					<Button className='remove-button' type='button' onClick={handleDelete}>
						Remove
					</Button>
					|
					<Button className='edit-button' type='button'>
						Edit
					</Button>
				</div>
			</div>
			<div className='part2And3'>
				<div className='part2'>
					<svg className='svg' width='150' height='150'>
						<circle className='circle-back' cx='50' cy='80' r='40' />
						<circle className='circle-front' cx='50' cy='80' r='40' />
					</svg>
					<div>
						<div className='percent'>{completed}</div>
						<div className='completed'>completed</div>
					</div>
				</div>
				<div className='pipe' />
				<div className='part3'>
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
};

Book.propTypes = {
  book: propTypes.objectOf(propTypes.oneOfType([propTypes.string, propTypes.number])).isRequired,
};

export default Book;
