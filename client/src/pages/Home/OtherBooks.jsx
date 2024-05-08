import React, { useEffect, useState } from 'react'
import BookCards from '../shared/BookCards';

const OtherBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/all-books").then(res => res.json()).then(data => setBooks(data.slice(5, 12)))
    }, [])

}

export default OtherBooks