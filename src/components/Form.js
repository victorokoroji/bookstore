import React from 'react';
import Button from './Button';
import Input from './Input';
import Option from './Option';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/books';

const Form = () => {
  const dispatch = useDispatch()

  const bookCategories = [
    { value: 'category1', content: 'Category 1' },
    { value: 'category2', content: 'Category 2' },
    { value: 'category3', content: 'Category 3' },
    { value: 'category4', content: 'Category 4' },
  ];

  const Options = () => bookCategories.map((category) => {
    const { value, content } = category;
    return <Option key={Math.random()} value={value} content={content} />;
  });

  return (
    <div>
      <h1>Add New Book</h1>
      <form>
        <Input type="text" placeholder="Book title" className="book-title" />
        <Input type="text" placeholder="Auto" className="auto" />
        <select name="books" id="books">
          {Options()}
        </select>
        <Button type="button" className="add-book-btn" onClick = {() => dispatch(addBook())}>
          ADD BOOK
        </Button>
      </form>
    </div>
  );
};

export default Form;
