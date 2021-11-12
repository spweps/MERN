import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useRouteMatch } from 'react-router-dom';



const ListAuthors = (props) =>{
    const {removeFromDom} = props;
    let match = useRouteMatch();
    const [authors, setAuthors] = useState ([])
    
    const deleteAnExistingAuthor = () => {
        axios.delete('http://localhost:8000/api/authors' + authors.data.Id)
            .then(res=>{removeFromDom(authors.data.personalId)})
            .catch(err=>console.error(err));
    }
    const getAllAuthors = () => {
        axios.get('http://localhost:8000/api/authors')
            .then(authors=> setAuthors (authors.data.authors))
            .catch()
    }
    
    useEffect(() => {
        getAllAuthors()
    }, [])
    return(
        <div className="App">
            <h1>Favorite Authors</h1>
            <Link to={`new`}>Add an author</Link>
            <h3>We have quotes by:</h3>
            <table>
                <tr><th>Author</th><th>Action</th></tr>
                    {authors.map( author =>
                        <tr>
                            <td>{author.name}</td>
                            <td>
                                <Link to={`/authors/${author._id}/edit`}>Edit</Link>
                                <button onClick={deleteAnExistingAuthor}>Delete</button>
                                
                            </td>
                        </tr>
                        )}
            </table>
            
        </div>
    )
}
export default ListAuthors;