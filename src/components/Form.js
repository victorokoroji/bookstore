import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidV4 } from 'uuid';
import Button from './Button';
import Input from './Input';
import { addBook } from '../redux/books/books';
import Option from './Option';

const Form = () => {
  const dispatch = useDispatch();

  const [book, setBook] = useState({
    item_id: '',
    title: '',
    author: '',
    category: 'Fiction',
  });

  const bookCategories = [
    { value: 'Fiction', content: 'Fiction' },
    { value: 'Nonfiction', content: 'Nonfiction' },
    { value: 'Drama', content: 'Drama' },
    { value: 'Folktale', content: 'Folktale' },
    { value: 'Poetry', content: 'Poetry' },
  ];

  const Options = () => bookCategories.map((category, index) => {
    const { value, content } = category;
    return <Option key={uuidV4()} index={index} value={value} content={content} />;
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook((prevbook) => ({
      ...prevbook,
      item_id: uuidV4(),
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addBook(book));
    document.querySelector('form').reset();
  };

  return (
    <div>
      <h1>Add New Book</h1>
      <form>
        <Input
          type="text"
          name="title"
          value={book.title}
          placeholder="Book title"
          className="book-title"
          onChange={handleChange}
        />
        <Input
          type="text"
          name="author"
          value={book.author}
          placeholder="Author"
          className="author"
          onChange={handleChange}
        />
        <select
          className="book-category"
          name="category"
          onChange={handleChange}
          value={book.category}
          id="books"
        >
          {Options()}
        </select>
        <Button type="button" className="add-book-btn" onClick={handleSubmit}>
          ADD BOOK
        </Button>
      </form>
    </div>
  );
};

export default Form;
