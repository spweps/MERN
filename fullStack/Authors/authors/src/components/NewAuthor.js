import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useRouteMatch } from 'react-router-dom';


const NewAuthor = () => {
    let match = useRouteMatch()
    const cancel = () => {

    }
    const submit = () => {

    }
    

    return(
        <div>
            <h1>Favorite Authors</h1>
            <Link to={`${match.url}/details`}>Add an author</Link>
            <h3>Add a new author:</h3>
            <form>
                Name:
                <input type="text" placeholder="Name" />
                <button onClick={cancel}>Cancel</button>
                <button onClick={submit}>Submit</button>
            </form>
            
        </div>
    )
}

export default NewAuthor;