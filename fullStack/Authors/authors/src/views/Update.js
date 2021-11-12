import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from "react-router-dom";

const Update = (props) => {
    const { id } = useParams();
    const [author, setAuthor] = useState('');


    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/' + id)
            .then(res => {
                setAuthor(res.data.author);
            })
    }, []);

    const updateAuthor = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/authors/' + id, author)
            .then(res=> console.log(res))
            .catch(err=> console.error(err));
    }
    return (
        <div>
            <h1>Update an Author</h1>
            <form onSubmit={updateAuthor}>
                <p>
                    <label>Name</label><br></br>
                    <input type="text"
                    title = "name"
                    value = {author.name}
                    onChange = {(e) => {setAuthor({...author, name:e.target.value})}} />
                </p>
                <input type="submit" />
            </form>
        </div>
    )
}
export default Update;