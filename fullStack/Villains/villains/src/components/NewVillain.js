import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useRouteMatch, useHistory } from 'react-router-dom';


const NewVillain = () => {
    const [villain, setVillain] = useState("")
    const [name, setName] = useState("")
    const [locale, setLocale] = useState("")
    const [accomplishments, setAccomplishments] = useState("")
    let match = useRouteMatch()
    const history= useHistory()
    const cancel = () => {
        axios.post('http://localhost:8000/api/villains')
    }
    const submit = () => {
        axios.post('http://localhost:8000/api/villains', {name: villain})
            .then((addNew) => {
                history.push('/villains')
            })
            .catch(err => console.log(err))
    }
    const override = (e) => {
        e.preventDefault()
    }
    const validateName = (e) => {
        setVillain (e.target.value)
    }
    const validateLocale = (e) => {
        setLocale (e.target.value)
    }
    const validateAccomplishments = (e) => {
        setAccomplishments (e.target.value)
    }
    

    return(
        <div>
            <h1>Best Villains</h1>
            <Link to={`${match.url}/details`}>Add Villain</Link>
            <h3>Add a new villain:</h3>
            <form onSubmit={override}>
                Name:
                <input type="text" placeholder="Name" value={villain} onChange={validateName} />
                Locale:
                <input type="text" placeholder="Locale" value={locale} onChainge={validateLocale}/>
                Accomplishments:
                <input type="text" placeholder="Accomplishments" value={accomplishments} onChange={validateAccomplishments}/>
                <button onClick={cancel}>Cancel</button>
                <button onClick={submit}>Submit</button>
            </form>
            
        </div>
    )
}

export default NewVillain