import React, { useEffect, useState } from 'react' 
import axios from 'axios';
import { useParams } from "react-router-dom";
import { estimatedDocumentCount } from '../../../server/models/projectmanager.model';

const Detail = (props) => {
    const [project, setProject] = useState([])
    const { id } = useParams();

    useEffect(() =>{
        axios.get('http://localhost:8000/api/project/' +id)
            .then(res => setPerson(res.data))
            .catch(err => console.error(err));
    }, []);
    return (
        <div>
            <p>Title: {project.title}</p>
            <p>Price: {project.price}</p>
            <p>Description: {project.description}</p>
        </div>
    )
    <Link to={"/project/" + project._id + "/edit"}>
        Edit
    </Link>
}
export default Detail;