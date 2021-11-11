import React, { useEffect, useState } from 'react' 
import axios from 'axios';
import { useParams } from "react-router-dom";
import { estimatedDocumentCount } from '../../../server/models/author.model';

const Detail = (props) => {
    const [project, setAuthor] = useState([])
    const { id } = useParams();

    useEffect(() =>{
        axios.get('http://localhost:8000/api/author/' +id)
            .then(res => setPerson(res.data))
            .catch(err => console.error(err));
    }, []);
    return (
        <div>
            <p>Name: {author.name}</p>
        </div>
    )
    <Link to={"/project/" + project._id + "/edit"}>
        Edit
    </Link>
}
export default Detail;