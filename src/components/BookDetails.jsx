import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const BookDetails = ({ book }) => {
    //WITHOUT REDUCER
    //const { removeBook } = useContext(BookContext)
    //WITH REDUCDER
    const { dispatch } = useContext(BookContext)

    return ( 
        //WITHOUT REDUCER
        //<li onClick={() => removeBook(book.id)}>
        //WITH REDUCDER
        <li onClick={() => dispatch({type: 'REMOVE_BOOK', id: book.id})}>
            <div className="title">{ book.title}</div>
            <div className="author">{ book.author}</div>
        </li>
     );

}
 
export default BookDetails;