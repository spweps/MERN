import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useHistory } from "react-router-dom";

const Update = (props) => {
    const { id } = useParams();
    const [villain, setVillain] = useState('');

    const history= useHistory();


    useEffect(() => {
        axios.get('http://localhost:8000/api/villains/' + id)
            .then(res => {
                setVillain(res.data.villain);
            })
    }, []);

    const updateVillain = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/villains/' + id, villain)
            .then(res=> history.push('/villains'))
            .catch(err=> console.error(err));
    }
    return (
        <div>
            <h1>Update Villain</h1>
            <form onSubmit={updateVillain}>
                <p>
                    <label>Name</label><br></br>
                    <input type="text"
                    title = "name"
                    value = {villain.name}
                    onChange = {(e) => {setVillain({...villain, name:e.target.value})}} />
                </p>
                <p>
                    <label>Locale</label><br></br>
                    <input type = "text"
                    title = "locale"
                    value = {villain.locale}
                    onChange = {(e) => {setVillain({...villain, locale:e.target.value})}}/>
                </p>
                <p>
                    <label>Accomplishments</label><br></br>
                    <input type = "text"
                    title = "accomplishments"
                    value = {villain.accomplishments}
                    onChange = {(e) => {setVillain({...villain, accomplishments:e.target.value})}}/>
                </p>
                <input type="submit"/>
            </form>
        </div>
    )
}
export default Update;