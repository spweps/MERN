import React, { useEffect, useState } from 'react' 
import axios from 'axios';
import { useParams, Link } from "react-router-dom";


const Detail = (props) => {
    const [pet, setPet] = useState({})
    const { id } = useParams();
    const [loaded, setLoaded] = useState(false)

    useEffect(() =>{
        axios.get('http://localhost:8000/api/pets/' +id)
            .then(res => {setPet(res.data.pet)
            setLoaded(true)})
            .catch(err => console.error(err));
    }, []);
    return (
        <>{
            loaded ? 
        <div>
            <h1>Pet Shelter</h1>
            <h3>Details about {pet.name}</h3>
            <form>
                <p>Pet type: {pet.type}</p>
                <p>Description: {pet.description}</p>
                <p>Skills: {pet.skill_1}, {pet.skill_2}, {pet.skill_3}</p>
                
                <Link to={"/pets/" + pet._id + "/edit"}>Edit</Link><br></br>
                <Link to={"/pets"}>Shelter</Link>
            </form>
        </div>: ""
        }
        </>
    )
}
export default Detail;