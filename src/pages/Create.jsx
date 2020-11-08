import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Create = () => {

    const [categories, setcategories] = useState([]);

    useEffect(() => {
        const apiUrl = "http://localhost:3000/categories";
        fetch(apiUrl)
            .then((res) => res.json())
            .then((categories) => {
                setcategories(categories);
            });
    }, []);

    console.log(categories)

    function createData() { // Bliver brugt i onclick event på knappen længere nede
        const Textarea0 = document.getElementById("Textarea0")
        const Textarea1 = document.getElementById("Textarea1")
        const Textarea2 = document.getElementById("Textarea2")
        const Textarea3 = document.getElementById("Textarea3")
        const Catselect = document.getElementById('Catselect');

        fetch('http://localhost:3000/books/', {
            headers: { "Content-Type": "application/json; charset=utf-8" },
            method: 'POST',
            body: JSON.stringify({
                cover: Textarea0.value,
                title: Textarea1.value,
                summary: Textarea2.value,
                author: Textarea3.value,
                category: [...Catselect.selectedOptions].map(option => option.value)
            })
        })
        console.log("book created")
        alert("Book has been added to the database")
        window.location.href = "/Admin";
    }

    const categoriesmap = categories.map(category => {

        return (
            <option value={category._id}>{category.category}</option>
        )

    })

    return (
        <div className="container bookcreate">

            <div className="row text-center">



                <div className="col-3"></div>

                <div className="col-6">

                    <div><h2>Add new book to collection</h2></div>

                    <form>

                        <div class="form-group">
                            <textarea class="form-control" id="Textarea0" rows="3" placeholder="Cover (URL)" required></textarea>
                        </div>

                        <div class="form-group">
                            <textarea class="form-control" id="Textarea1" rows="1" placeholder="Title" required></textarea>
                        </div>

                        <div class="form-group">
                            <textarea class="form-control" id="Textarea2" rows="3" placeholder="Summary" required></textarea>
                        </div>
                        <div class="form-group">
                            <textarea class="form-control" id="Textarea3" rows="1" placeholder="Author" required></textarea>
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

                <button type="button" onClick={createData} class="btn btn-primary">Submit</button>



            </div>

        </div>
    )
}

export default Create
