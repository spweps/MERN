import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useRouteMatch } from 'react-router-dom';



const ListAuthors = (props) =>{
    const {removeFromDom} = props;
    let match = useRouteMatch();
    const [authors, setAuthors] = useState ([])
    
    const deleteAnExistingAuthor = (id) => {
        axios.delete('http://localhost:8000/api/authors/' + id)
            .then(res=>{getAllAuthors()})
            .catch(err=>console.error(err));
    }
    const getAllAuthors = () => {
        axios.get('http://localhost:8000/api/authors')
            .then(data=> {
                setAuthors (data.data.authors)
                console.log(data)
            })
            .catch()
    }
    
    useEffect(() => {
        getAllAuthors()
    }, [])
    return(
        <div className="App">
            <h1>Favorite Authors</h1>
            <Link to={`authors/new`}>Add an author</Link>
            <h3>We have quotes by:</h3>
            <table>
                <tr><th>Author</th><th>Action</th></tr>
                    {authors.map( author =>
                        <tr>
                            <td>{author.name}</td>
                            <td>
                                <Link to={`/authors/${author._id}/edit`}>Edit</Link>
                                <button onClick={()=>{
                                    deleteAnExistingAuthor (author._id)}}>Delete</button>
                                
                            </td>
                        </tr>
                        )}
            </table>
            
        </div>
    )
}
export default ListAuthors;