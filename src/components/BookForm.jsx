import React, { useContext, useState } from 'react';
import { BookContext } from '../contexts/BookContext';

const NewBookForm = () => {
    //WITHOUT REDUCER
    //const { addBook } = useContext(BookContext)
    //WITH REDUCER
    const { dispatch} = useContext(BookContext)
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(title, author)
        //WITHOUT REDUCER
        //addBook(title, author);
        //WITH REDUCER
        dispatch({type: 'ADD_BOOK', book: {
            title, author
        } })
        setAuthor('');
        setTitle('');
    }
    return ( 
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='book title' value={title} 
            onChange={(e)=>{setTitle(e.target.value)}} required/>
            <input type="text" placeholder='book author' value={author} 
            onChange={(e)=>{setAuthor(e.target.value)}} required/>
            <input type="submit" value="add book" />
        </form>

     );
}
 
export default NewBookForm;