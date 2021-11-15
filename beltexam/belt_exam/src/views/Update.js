import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useHistory } from "react-router-dom";

const Update = (props) => {
    const { id } = useParams();
    const [pirate, setPirate] = useState({});

    const history= useHistory();


    useEffect(() => {
        axios.get('http://localhost:8000/api/pirates/' + id)
            .then(res => {
                setPirate(res.data.pirate);
            })
    }, []);

    const updatePirate = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/pirates/' + id, pirate)
            .then(res=> history.push('/pirates'))
            .catch(err=> console.error(err));
    }
    return (
        <div>
            <h1>Update {pirate.name}</h1>
            <form onSubmit={updatePirate}>
                <p>
                    <label>Name</label><br></br>
                    <input type="text"
                    title = "name"
                    value = {pirate.name}
                    onChange = {(e) => {setPirate({...pirate, name:e.target.value})}} />
                </p>
                <p>
                    <label>Treasures</label><br></br>
                    <input type="text"
                    title="treasures"
                    value = {pirate.treasures}
                    onChange = {(e) =>{setPirate({...pirate, treasures:e.target.value})}} />
                </p>
                <p>
                    <label>Catch Phrase</label><br></br>
                    <input type="text"
                    title="catchphrase"
                    value = {pirate.catchphrase}
                    onChange = {(e) =>{setPirate({...pirate, catchphrase:e.target.value})}} />
                </p>
                <p>
                    <label>URL</label><br></br>
                    <input type="text"
                    title="url"
                    value = {pirate.url}
                    onChange = {(e) =>{setPirate({...pirate, url:e.target.value})}} />
                </p>
                <p>
                    <label>Peg Leg</label><br></br>
                    <input type="checkbox"
                    title="pegleg"
                    value = {pirate.pegleg}
                    onChange = {(e) =>{setPirate({...pirate, pegleg:e.target.value})}} />
                </p>
                <p>
                    <label>Eye Patch</label><br></br>
                    <input type="checkbox"
                    title="eyepatch"
                    value = {pirate.eyepatch}
                    onChange = {(e) =>{setPirate({...pirate, eyepatch:e.target.value})}} />
                </p>
                <p>
                    <label>Hook Hand</label><br></br>
                    <input type="checkbox"
                    title="hookhand"
                    value = {pirate.hookhand}
                    onChange = {(e) =>{setPirate({...pirate, hookhand:e.target.value})}} />
                </p>

                <input type="submit"/>
            </form>
        </div>
    )
}
export default Update;