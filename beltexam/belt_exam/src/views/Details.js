import React, { useEffect, useState } from 'react' 
import axios from 'axios';
import { useParams } from "react-router-dom";


const Detail = (props) => {
    const [pirate, setPirate] = useState([])
    const { id } = useParams();

    useEffect(() =>{
        axios.get('http://localhost:8000/api/pirates/' +id)
            .then(res => setPirate(res.data))
            .catch(err => console.error(err));
    }, []);
    return (
        <div>
            <p>Name: {pirate.name}</p>
            <p>Treasures: {pirate.treasures}</p>
            <p>Catch Phrase: {pirate.catchphrase}</p>
            <p>Peg Leg: {pirate.pegleg}</p>
            <p>Eye Patch: {pirate.eyepatch}</p>
            <p>Hook Hand: {pirate.hookhand}</p>
        </div>
    )
    <Link to={"/pirates/" + pirate._id + "/edit"}>Edit</Link>
}
export default Detail;