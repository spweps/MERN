import React, { useEffect, useState } from 'react' 
import axios from 'axios';
import { useParams } from "react-router-dom";


const Detail = (props) => {
    const [author, setAuthor] = useState([])
    const { id } = useParams();

    useEffect(() =>{
        axios.get('http://localhost:8000/api/authors/' +id)
            .then(res => setAuthor(res.data))
            .catch(err => console.error(err));
    }, []);
    return (
        <div>
            <p>Name: {author.name}</p>
        </div>
    )
    <Link to={"/authors/" + author._id + "/edit"}>Edit</Link>
}
export default Detail;