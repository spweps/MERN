import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useRouteMatch } from 'react-router-dom';


const ListAuthors = (props) =>{
    let match = useRouteMatch();
    const [authors, setAuthors] = useState ([])
    const getAllAuthors = () => {

    }
    
    useEffect(() => {
        getAllAuthors()
    }, [])
    return(
        <div>
            <h1>Favorite Authors</h1>
            <Link to={`new`}>Add an author</Link>
            <h3>We have quotes by:</h3>
            <table>
                <tr><td>Author</td><td>Action</td></tr>
                    {authors.map( author =>
                        <tr>
                            <td>(author.name)</td>
                            <td>ACTIONS</td>
                        </tr>
                        )}
            </table>
            
        </div>
    )
}
export default ListAuthors;