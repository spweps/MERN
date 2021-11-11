import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";

const Update = (props) => {
    const { id } = useParams();
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        axios.get('http://localhost:8000/api/project/' + id)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
    }, []);

    const updateProject = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/project/' + id, {
            title,
            price,
            description
        })
            .then(res=> console.log(res))
            .catch(err=> console.error(err));
    }
    return (
        <div>
            <h1>Update a Project</h1>
            <form onSubmit={updateProject}>
                <p>
                    <label>Title</label><br></br>
                    <input type="text"
                    title = "title"
                    value = {title}
                    onChange = {(e) => {setTitle(e.target.value)}} />
                </p>
                <p>
                    <label>Price</label><br></br>
                    <input type="text"
                    price = "price"
                    value = {price}
                    onChange = {(e) => {setPrice(e.target.value)}} />
                </p>
                <p>
                    <label>Description</label><br></br>
                    <input type="text"
                    description = "description"
                    value = {description}
                    onChange = {(e) => {setDescription(e.target.value)}} />
                </p>
                <input type="submit" />
            </form>
        </div>
    )
}
export default Update;