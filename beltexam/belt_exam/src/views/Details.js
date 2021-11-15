import React, { useEffect, useState } from 'react' 
import axios from 'axios';
import { useParams, Link } from "react-router-dom";


const Detail = (props) => {
    const [pirate, setPirate] = useState({})
    const { id } = useParams();
    const [loaded, setLoaded] = useState(false)

    useEffect(() =>{
        axios.get('http://localhost:8000/api/pirates/' +id)
            .then(res => {setPirate(res.data.pirate)
            setLoaded(true)})
            .catch(err => console.error(err));
    }, []);
    return (
        <>{
            loaded ? 
        <div>
            <p>Name: {pirate.name}</p>
            <p>Treasures: {pirate.treasures}</p>
            <p>Catch Phrase: {pirate.catchphrase}</p>
            <p>Peg Leg: {pirate.pegleg ? "Yes":"No"}</p>
            <p>Eye Patch: {pirate.eyepatch ? "Yes":"No"}</p>
            <p>Hook Hand: {pirate.hookhand ? "Yes":"No"}</p>
            <Link to={"/pirates/" + pirate._id + "/edit"}>Edit</Link><br></br>
            <Link to={"/pirates"}>Crew</Link>
            <div>
                <img src={pirate.url} width="400px"/>
            </div>
        </div>: ""
        }
        </>
    )
}
export default Detail;