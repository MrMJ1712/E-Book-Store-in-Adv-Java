import React, { useState } from 'react';
import "./style/addbook.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function AddBook() {

    const navigate = useNavigate();
    const [bookDetails, setBookDetails] = useState({
        title: '',
        author: '',
        price: 0,
        coverImg: null,
        stock: 0,
        description: '',
        category: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setBookDetails({ ...bookDetails, [name]: value });
    };

    const handleFileChange = (e) => {
        setBookDetails({ ...bookDetails, coverImg: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', bookDetails.title);
        formData.append('author', bookDetails.author);
        formData.append('price', bookDetails.price);
        formData.append('coverImg', bookDetails.coverImg);
        formData.append('stock', bookDetails.stock);
        formData.append('description', bookDetails.description);
        formData.append('category', bookDetails.category);
        try {
            
            await axios.post('http://localhost:9090/book/v3', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            navigate("/adminpage");
            console.log('Book added successfully');

        } catch (error) {
            console.error('Error adding book', error);
        }
    };



    return (
        <div className="app">
            <div className="form-container">
                <h1 className="main-heading">Add Book</h1>
                <form onSubmit={handleSubmit}>
                    <label>Title:</label>
                    <input
                        type="text"
                        name="title"
                        value={bookDetails.title}
                        onChange={handleInputChange}
                        placeholder="Enter Book Title"
                        required
                    />

                    <label>Author:</label>
                    <input
                        type="text"
                        name="author"
                        value={bookDetails.author}
                        onChange={handleInputChange}
                        className="form-control"
                        placeholder="Enter Book Auther Name"
                        required
                    />

                    <label>Price:</label>
                    <input
                        type="number"
                        name="price"
                        value={bookDetails.price}
                        onChange={handleInputChange}
                        className="form-control"
                        placeholder="Enter Book Price"
                        required
                    />

                    <label>Quantity:</label>
                    <input
                        type="number"
                        name="stock"
                        value={bookDetails.stock}
                        onChange={handleInputChange}
                        className="form-control"
                        placeholder="Enter Book Stock"
                        required
                    />

                    <label>Description:</label>
                    <input
                        type="text"
                        name="description"
                        value={bookDetails.description}
                        onChange={handleInputChange}
                        className="form-control"
                        placeholder="Enter Book Description"
                        required
                    />

                    <label>Cover Image:</label>
                    <input
                        type="file"
                        name="coverImg"
                        className="form-control"
                        accept='image/*'
                        onChange={handleFileChange}
                        required
                    />
                      <label>Category:</label>
                    <select
                        name="category"
                        value={bookDetails.category}
                        onChange={handleInputChange}
                        className="form-control"
                        required
                    >
                        <option value="Auto Biography">Auto Biography</option>
                        <option value="Comics">Comics</option>
                        <option value="Programming">Programming</option>
                        <option value="History">History</option>
                        <option value="Thriller">Thriller</option>
                       
                    </select>
                    <button type="submit">Add Book</button>
                </form>
            </div>
        </div>
    );
};

