import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Update = ({ match }) => {

    const [books, setBooks] = useState([]);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const apiUrl1 = "http://localhost:3000/books";
        const apiUrl2 = "http://localhost:3000/categories";

        fetch(apiUrl1)
            .then((res) => res.json())
            .then((books) => {
                setBooks(books);
            });
        fetch(apiUrl2)
            .then((res) => res.json())
            .then((categories) => {
                setCategories(categories);
            });
    }, []);

    console.log("Books:", books)
    console.log("Categories:", categories)

    const { params: { bookID } } = match;
    let book = books.filter(book => {
        return (book._id.toLowerCase() === bookID)
    })

    const categoriesmap = categories.map(category => {

        return (
            <option value={category._id}>{category.category}</option>
        )

    })

    const BookDisplay = book.map((book) => {

        function updateData() { // Bliver brugt i onclick event på knappen længere nede
            const Textarea0 = document.getElementById("Textarea0")
            const Textarea1 = document.getElementById("Textarea1")
            const Textarea2 = document.getElementById("Textarea2")
            const Textarea3 = document.getElementById("Textarea3")
            const Catselect = document.getElementById("Catselect")
            fetch('http://localhost:3000/books/' + bookID, {
                headers: { "Content-Type": "application/json; charset=utf-8" },
                method: 'PATCH',
                body: JSON.stringify({
                    cover: Textarea0.value,
                    title: Textarea1.value,
                    summary: Textarea2.value,
                    author: Textarea3.value,
                    category: [...Catselect.selectedOptions].map(option => option.value)
                })

            })
            console.log("updated")
            alert("Book has been updated")
            window.location.href = "/Admin";
        }

        return (
            <div key={book._id} className="container bookupdate">

                <div className="row text-center">

                    <div className="col-3"></div>

                    <div className="col-6">
                        <form>

                            <label for="coverselect">Book Cover (URL)</label>
                            <div class="form-group" id="coverselect" name="coverselect">
                                <textarea class="form-control" id="Textarea0" rows="3" defaultValue={book.cover}></textarea>
                            </div>

                            <label for="titleselect">Title</label>
                            <div class="form-group" id="titleselect">
                                <textarea class="form-control" id="Textarea1" rows="1" defaultValue={book.title}></textarea>
                            </div>

                            <label for="summarytext">Summary</label>
                            <div class="form-group" id="summarytext">
                                <textarea class="form-control" id="Textarea2" rows="3" defaultValue={book.summary}></textarea>
                            </div>

                            <label for="authortext">Author</label>
                            <div class="form-group" id="authortext">
                                <textarea class="form-control" id="Textarea3" rows="1" defaultValue={book.author}></textarea>
                            </div>

                            <label for="Catselect">Select Category (CTRL for multiple)</label>
                            <div class="form-group">
                                <select multiple class="form-control" id="Catselect" name="Catselect[]" required>
                                    {categoriesmap}
                                </select>

                            </div>
                        </form>
                    </div>

                    <div className="col-3"></div>

                </div>

                <div>
                    <Link to="/Admin"> <button type="button" class="btn btn-success">Cancel</button>  </Link>

                    <button type="button" onClick={updateData} class="btn btn-primary">Update</button>

                </div>



            </div>
        )
    }
    )

    return (
        <section>
            {BookDisplay}
        </section>
    )
}

export default Update
