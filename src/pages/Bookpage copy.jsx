// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom'

// function Bookpage() {
//   const [books, setBooks] = useState([]);

//   useEffect(() => {
//     const apiUrl = "http://localhost:3000/books";
//     fetch(apiUrl)
//       .then((res) => res.json())
//       .then((books) => {
//         setBooks(books);
        
//       });
//   }, []);

//   console.log(books)
//   const bookmap = books.map(book => {

//     return (
//       <section key={book._id}>

//         <h3>{book.title}</h3>
//         <p>{book.summary}</p>
       
//         <div className="mb-5">
//         <Link to={"/Book/" + (book._id)}> <button type="button" class="btn btn-info">Details</button> </Link> <br></br>
        
//         </div>
        

//       </section>

//     )

//   })


//   console.log(bookmap)
//   return (
//     <div className='bookfrontpage'>

//       <div className='container'>

//         <div className="bookarea">

//         {bookmap}

//         </div>
      
//       </div>

//     </div>
//   );
// }

// export default Bookpage;

