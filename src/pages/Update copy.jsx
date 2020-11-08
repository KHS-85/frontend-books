// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';


// const Update = ({ match }) => {

//     const [books, setBooks] = useState([]);

//     useEffect(() => {
//         const apiUrl = "http://localhost:3000/books";
//         fetch(apiUrl)
//             .then((res) => res.json())
//             .then((books) => {
//                 setBooks(books);

//             });
//     }, []);

//     // const [kategorier, setKategorier] = useState([]);

//     // useEffect(() => {
//     //     const apiUrl2 = "http://localhost:3000/kategorier";
//     //     fetch(apiUrl2)
//     //         .then((res) => res.json())
//     //         .then((kategorier) => {
//     //             setKategorier(kategorier);

//     //         });
//     // }, []);

//     console.log("Books:", books)




//     const { params: { bookID } } = match;
//     let book = books.filter(book => {
//         return (book._id.toLowerCase() === bookID)
//     })

//     const BookDisplay = book.map((book) => {

//         function updateData() { // Bliver brugt i onclick event på knappen længere nede
//             const Textarea1 = document.getElementById("Textarea1")
//             const Textarea2 = document.getElementById("Textarea2")
//             const Textarea3 = document.getElementById("Textarea3")
//             const Catselect = document.getElementById("Catselect")
//             fetch('http://localhost:3000/books/' + bookID, {
//                 headers: { "Content-Type": "application/json; charset=utf-8" },
//                 method: 'PATCH',
//                 body: JSON.stringify({
//                     title: Textarea1.value,
//                     summary: Textarea2.value,
//                     author: Textarea3.value,
//                     category: Catselect.value,
//                 })

//             })
//             console.log("updated")
//             alert("Book has been updated")
//             window.location.href = "/Admin";
//         }

//         return (
//             <div key={book._id} className="container bookupdate">

//                 <div className="row text-center">

//                     <div className="col-3"></div>

//                     <div className="col-6">
//                         <form>
//                             <div class="form-group">
//                                 <textarea class="form-control" id="Textarea1" rows="1" defaultValue={book.title}></textarea>
//                             </div>
//                             <div class="form-group">
//                                 <select class="form-control" id="Catselect" defaultValue={book.category}>
//                                     <option>5fa01b52d890f3057012d833</option>
//                                     <option>5fa01be3d890f3057012d834</option>
//                                     <option>5fa01c23d890f3057012d835</option>
//                                 </select>
//                             </div>
//                             <div class="form-group">
//                                 <textarea class="form-control" id="Textarea2" rows="3" defaultValue={book.summary}></textarea>
//                             </div>
//                             <div class="form-group">
//                                 <textarea class="form-control" id="Textarea3" rows="1" defaultValue={book.author}></textarea>
//                             </div>
//                         </form>
//                     </div>

//                     <div className="col-3"></div>

//                 </div>

//                 <div>
//                     <Link to="/Admin"> <button type="button" class="btn btn-success">Cancel</button>  </Link>

//                     <button type="button" onClick={updateData} class="btn btn-primary">Update</button>

//                 </div>



//             </div>
//         )
//     }
//     )

//     return (
//         <section>
//             {BookDisplay}
//         </section>
//     )
// }




// export default Update
