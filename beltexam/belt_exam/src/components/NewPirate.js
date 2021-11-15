import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useRouteMatch, useHistory } from 'react-router-dom';


const NewPirate = () => {
    const [pirates, setPirates] = useState({})
    const [pirate, setPirate] = useState({
        name:"", url:"", catchphrase:"", position:"Captain", treasures:0, eyepatch:true, pegleg:true, hookhand:true
    })
    const handleToggleEyepatch = () => {
        const updatedPirate = {...pirate, eyepatch:!pirate.eyepatch}
        setPirate(updatedPirate);
    }
    const handleToggleHookHand = () => {
        const updatedPirate = {...pirate, hookhand:!pirate.hookhand}
        setPirate(updatedPirate);
    }
    const handleTogglePegLeg = () => {
        const updatedPirate = {...pirate, pegleg:!pirate.pegleg}
        setPirate(updatedPirate);
    }
    let match = useRouteMatch()
    const history= useHistory()
    const cancel = () => {
        axios.post('http://localhost:8000/api/pirates')
    }
    const submit = () => {
        axios.post('http://localhost:8000/api/pirates', pirate)
            .then((addNew) => {
                console.log(addNew)
                history.push('/pirates')
            })
            .catch(err => console.log(err))
    }
    const override = (e) => {
        e.preventDefault()
    }
    const validateName = (e) => {
        const updatedPirate = {...pirate, name:e.target.value}
        setPirate(updatedPirate);
    
    }
    const validateURL = (e) => {
        const updatedPirate = {...pirate, url:e.target.value}
        setPirate(updatedPirate);
    }
    const validateTreasures = (e) => {
        const updatedPirate = {...pirate, treasures:e.target.value}
        setPirate(updatedPirate);
    }
    const validateCatchphrase = (e) => {
        const updatedPirate = {...pirate, catchphrase:e.target.value}
        setPirate(updatedPirate);
        }

    return(
        <div>
            <h1>Add Pirate</h1>
            <Link to={`${match.url}/details`}>Crew Aboard</Link>
            <h3>Add ye scalleywag:</h3>
            <form onSubmit={override}>
                Pirate name:
                <input name="name" type="text" placeholder="Name" value={pirate.name} onChange={validateName} />
                Image url:
                <input name="url" type="text" placeholder="URL" value ={pirate.url} onChange={validateURL}/>
                # of Treasures Plundered:
                <input name="treasures" type="text" placeholder="Where be thy treasures?" value={pirate.treasures} onChange={validateTreasures}/>
                Pirate Catch Phrase:
                <input name="catchphrase" type = "text" placeholder="Yarrrr matey just won't work" value={pirate.catchphrase} onChange={validateCatchphrase}/>
                Crew Position:
                <select name = "position" id = "position">
                    <option value = "captain">Captain</option>
                    <option value = "firstmate">First Mate</option> 
                    <option value = "quartermaster">Quarter Master</option>
                    <option value = "boatswain">Boatswain</option>
                    <option value = "powdermonkey">Powder Monkey</option>
                </select>
                <br></br>
                <br></br>
                <input type="checkbox" id="pegleg" name="pegleg" checked={pirate.pegleg} onChange={(e) =>{
                    handleTogglePegLeg();}}/>
                    <label for="pegleg">Peg Leg</label><br></br>
                <input type="checkbox" id="eyepatch" name="eyepatch" checked={pirate.eyepatch} onChange={(event) => {
                    handleToggleEyepatch();}}/>
                    <label for="eyepatch">Eye Patch</label><br></br>
                <input type = "checkbox" id="hookhand" name="hookhand" checked={pirate.hookhand} onChange={(event) => {
                    handleToggleHookHand();}}/>
                    <label for="hookhand">Hook Hand</label><br></br>
                
            </form>
            <button onClick={cancel}>Cancel</button>
            <button onClick={submit}>Submit</button>
        </div>
    )
}

export default NewPirate;