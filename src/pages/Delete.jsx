import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Delete = ({ match }) => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        const apiUrl = "http://localhost:3000/books";
        fetch(apiUrl)
            .then((res) => res.json())
            .then((books) => {
                setBooks(books);

            });
    }, []);

    console.log("Books:", books)



    const { params: { bookID } } = match;
    let book = books.filter(book => {
        return (book._id.toLowerCase() === bookID)
    })

    const BookDisplay = book.map((book) => {

        function deleteData() { // Bliver brugt i onclick event på delete-knappen længere nede
            fetch('http://localhost:3000/books/' + bookID, {
                method: 'DELETE'
            });
            alert("Book has been deleted")
            window.location.href = "/Admin";
        }

        return (

            <main key={book._id}>
                <div>
                    <div className="container bookremove">

                        <div className="row px-3">
                            <div className="col">
                                <h1 className="mb-5">Are you sure you want to delete this book?</h1>
                                <img src={book.cover} alt="bookcover" className="bookdetailscover mb-3"/>
                                <h3 className="mb-3">{book.title}</h3>
                                <p>{book.summary}</p>
                            </div>
                        </div>

                        <div>
                            <Link to="/Admin"> <button type="button" class="btn btn-success">Cancel</button>  </Link>

                            <button type="button" onClick={deleteData} class="btn btn-danger">DELETE</button>

                        </div>



                    </div>
                </div>

            </main>
        )
    }
    )

    return (
        <section>
            {BookDisplay}
        </section>
    )
}




export default Delete
