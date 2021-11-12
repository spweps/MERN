import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useRouteMatch, useHistory } from 'react-router-dom';


const NewAuthor = () => {
    const [author, setAuthor] = useState("")
    let match = useRouteMatch()
    const history= useHistory()
    const cancel = () => {
        axios.post('http://localhost:8000/api/authors')
    }
    const submit = () => {
        axios.post('http://localhost:8000/api/authors', {name: author})
            .then((addNew) => {
                history.push('/authors')
            })
            .catch()
    }
    const override = (e) => {
        e.preventDefault()
    }
    const validateName = (e) => {
        setAuthor (e.target.value)
    }
    

    return(
        <div>
            <h1>Favorite Authors</h1>
            <Link to={`${match.url}/details`}>Add an author</Link>
            <h3>Add a new author:</h3>
            <form onSubmit={override}>
                Name:
                <input type="text" placeholder="Name" value={author} onChange={validateName} />
                <button onClick={cancel}>Cancel</button>
                <button onClick={submit}>Submit</button>
            </form>
            
        </div>
    )
}

export default NewAuthor;