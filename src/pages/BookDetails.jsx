import React, { useEffect, useState } from 'react';


const BookDetails = ({ match }) => {

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

        let bookCategories = book.category.map(category => {
            return (
                <p key={category._id}> {category.category} </p>
            )
        })

        return (

            <main key={book._id}>

                <div className="container bookdetails">

                    <div className="row px-3">

                        <div className="col">
                            

                            <div className="row">
                                <div className="col-10">
                                <h2 className="mb-5">{book.title}</h2>
                                <h3>Summary:</h3>
                                <p>{book.summary}</p>

                                <h4>Written by:</h4>
                                <p>{book.author}</p>

                                </div>

                                <div className="col-2">
                                    <img src={book.cover} alt="a bookcover" className="bookdetailscover img-fluid mb-5"/>

                                    <h3>Genre(s)</h3>
                                <p>{bookCategories}</p>
                                </div>

                            </div>

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

export default BookDetails