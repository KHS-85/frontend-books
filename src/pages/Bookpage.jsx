import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

function Bookpage() {
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

    return (

      <section key={book._id} style={{marginLeft: 'auto', marginRight: 'auto'}}>

        <div class="card my-3 mx-3" style={{width: '18rem'}}>
          <img class="card-img-top" src={book.cover} alt="Book Cover" />
          <div class="card-body">
            <h4 class="card-title">{book.title}</h4>
            <p class="card-text" >{book.summary}</p>
            <Link to={"/Book/" + (book._id)}> <button type="button" class="btn btn-info">More</button> </Link>
          </div>
        </div>

      </section>

    )

  })

  console.log(bookmap)
  return (
    <div className='container'>

      <div className='row'>

          {bookmap}

      </div>

    </div>
  );
}

export default Bookpage;

