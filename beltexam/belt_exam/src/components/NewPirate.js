import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useRouteMatch, useHistory } from 'react-router-dom';


const NewPirate = () => {
    const [pirate, setPirate] = useState("")
    let match = useRouteMatch()
    const history= useHistory()
    const cancel = () => {
        axios.post('http://localhost:8000/api/pirates')
    }
    const submit = () => {
        axios.post('http://localhost:8000/api/pirates', {name: pirate})
            .then((addNew) => {
                history.push('/pirates')
            })
            .catch(err => console.log(err))
    }
    const override = (e) => {
        e.preventDefault()
    }
    const validateName = (e) => {
        setPirate (e.target.value)
    }
    const validateURL = (e) => {
        setPirate (e.target.value)
    }
    const validateTreasures = (e) => {
        setPirate (e.target.value)
    }
    const validateCatchphrase = (e) => {
        setPirate (e.target.value)
    }

    return(
        <div>
            <h1>Add Pirate</h1>
            <Link to={`${match.url}/details`}>Crew Aboard</Link>
            <h3>Add ye scalleywag:</h3>
            <form onSubmit={override}>
                Pirate name:
                <input type="text" placeholder="Name" value={pirate} onChange={validateName} />
                Image url:
                <input type="text" placeholder="URL" value ={pirate.url} onChange={validateURL}/>
                # of Treasures Plundered:
                <input type="text" placeholder="Where be thy treasures?" value={pirate.treasures} onChange={validateTreasures}/>
                Pirate Catch Phrase:
                <input type = "text" placeholder="Yarrrr matey just won't work" value={pirate.catchphrase} onChange={validateCatchphrase}/>
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
                <input type="checkbox" id="pegleg" name="pegleg" value="Peg Leg">
                    <label for="pegleg">Peg Leg</label></input><br></br>
                <input type="checkbock" id="eyepatch" name="eyepatch" value="Eye Patch">
                    <label for="eyepatch">Eye Patch</label></input><br></br>
                <input type = "checkbox" id="hookhand" name="hookhand" value = "Hooke Hand">
                    <label for="hookhand">Hook Hand</label></input><br></br>
                
            </form>
            <button onClick={cancel}>Cancel</button>
            <button onClick={submit}>Submit</button>
        </div>
    )
}

export default NewPirate;