import React, { useEffect, useState } from 'react' 
import axios from 'axios';
import { useParams } from "react-router-dom";


const Detail = (props) => {
    const [villain, setVillain] = useState([])
    const { id } = useParams();

    useEffect(() =>{
        axios.get('http://localhost:8000/api/villains/' +id)
            .then(res => setVillain(res.data))
            .catch(err => console.error(err));
    }, []);
    return (
        <div>
            <p>Name: {villain.name}</p>
            <p>Locale: {villain.locale}</p>
            <p>Accomplishments: {villain.accomplishments}</p>
            <Link to={"/villains/" + villain._id + "/edit"}>Edit</Link>
        </div>
    )
}
export default Detail;