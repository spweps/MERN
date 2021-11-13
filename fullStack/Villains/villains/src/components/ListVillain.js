import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useRouteMatch } from 'react-router-dom';



const ListVillains = (props) =>{
    const {removeFromDom} = props;
    let match = useRouteMatch();
    const [villains, setVillains] = useState ([])
    
    const deleteAnExistingVillain = (id) => {
        axios.delete('http://localhost:8000/api/villains/' + id)
            .then(res=>{getAllVillains()})
            .catch(err=>console.error(err));
    }
    const getAllVillians = () => {
        axios.get('http://localhost:8000/api/villains')
            .then(data=> {
                setVillains (data.data.villains)
                console.log(data)
            })
            .catch()
    }
    
    useEffect(() => {
        getAllVillains()
    }, [])
    return(
        <div className="App">
            <h1>Favorite Villains</h1>
            <Link to={`villains/new`}>Add Villain</Link>
            <h3>We have conquests by:</h3>
            <table>
                <tr><th>Villain</th><th>Action</th></tr>
                    {authors.map( villain =>
                        <tr>
                            <td>{villain.name}</td>
                            <td>
                                <Link to={`/villains/${villain._id}/edit`}>Edit</Link>
                                <button onClick={()=>{
                                    deleteAnExistingVillain (villain._id)}}>Delete</button>
                                
                            </td>
                        </tr>
                        )}
            </table>
            
        </div>
    )
}
export default ListVillains;