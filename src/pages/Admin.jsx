import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import pencil from '../gfx/pencil.png'
import eraser from '../gfx/eraser.png'
import addgreen from '../gfx/add.png'

function Admin() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        const apiUrl = "http://localhost:3000/books";
        fetch(apiUrl)
            .then((res) => res.json())
            .then((books) => {
                setBooks(books);

            });
    }, []);

    console.log(books)
    const bookmap = books.map(book => {

        let bookCategories = book.category.map(category => {
            return (
                <p key={category._id} className="catlist"> {category.category} </p>
            )
        })

        return (

            <tr key={book._id}>
                <th scope="row"><p className="sumtext">{book._id}</p></th>
                <td>{bookCategories}</td>
                <td> <Link to={"/Book/" + (book._id)}> {book.title} </Link></td>
                <td><p className="sumtext"> {book.summary} </p></td>
                <td> <Link to={"/Update/" + (book._id)}> <img src={pencil} alt="update" className="icon" /> </Link> </td>
                <td> <Link to={"/Delete/" + (book._id)}> <img src={eraser} alt="delete" className="icon" /> </Link> </td>
            </tr>

        )
    })

    return (
        <div className='booktable container'>

            <div className="table-responsive">
            <table className="table table-sm table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Category</th>
                        <th scope="col">Title</th>
                        <th scope="col">Summary</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <Link to="/Create">
                            <img src={addgreen} alt="Opret ny" className="icon pb-1" /> New Book
                        </Link>
                    </tr>
                    {bookmap}
                </tbody>
            </table>
            </div>

        </div>
    );
}

export default Admin
