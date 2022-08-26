import React, { createContext, useState, useReducer, useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import { bookReducer } from '../reducers/bookReducer';

export const BookContext = createContext();

const BookContextProvider = (props) => {
    //
    //WITHOUT REDUCER
    // const [books, setBooks] = useState([
    //     {title: 'name of the wind', author: 'patrick rothfuss', id:1},
    //     {title: 'the final empire', author: 'brandon sanderson', id:2},
    // ]);
    // const addBook = (title, author) => {
    //     setBooks([...books,{title, author, id: uuid()}])
    // };
    // const removeBook = (id) => {
    //     setBooks(books.filter( book => book.id !== id ))
    // };
    //WITH REDUCER
    //useReducer(first params = name of the reducer,second params = base value, third params = default value possibility to add function or sideffect...)
    const [books, dispatch] = useReducer(bookReducer, [
        {title: 'name of the wind', author: 'patrick rothfuss', id:1},
        {title: 'the final empire', author: 'brandon sanderson', id:2},
    ], () => {
        const localData = localStorage.getItem('books');
        return localData ? JSON.parse(localData) : []
    });
    useEffect(() => {
        //setItem(first params name given for these variable, second params is value)
        localStorage.setItem('books', JSON.stringify(books))
    }, [books])

    return(
        <BookContext.Provider value={{ books, dispatch}}>
            { props.children }
        </BookContext.Provider>
    )
}

export default BookContextProvider;