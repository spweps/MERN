import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useRouteMatch } from 'react-router-dom';



const ListPirates = (props) =>{
    const {removeFromDom} = props;
    let match = useRouteMatch();
    const [pirates, setPirates] = useState ([])
    
    const deleteAnExistingPirate = (id) => {
        axios.delete('http://localhost:8000/api/pirates/' + id)
            .then(res=>{getAllPirates()})
            .catch(err=>console.error(err));
    }
    const getAllPirates = () => {
        axios.get('http://localhost:8000/api/pirates')
            .then(data=> {
                setPirates (data.data.pirates)
                console.log(data)
            })
            .catch()
    }
    
    useEffect(() => {
        getAllPirates()
    }, [])
    return(
        <div className="App">
            <h1>Pirate Crew</h1>
            <Link to={`pirates/new`}>Add Pirate</Link>
            <table>
                <tr><th>Pirate</th><th>Action</th></tr>
                    {pirates.map( pirate =>
                        <tr>
                            <td>{pirate.name}</td>
                            <td>
                                <Link to={`/pirates/${pirate._id}/edit`}>Get Scurvy</Link>
                                <button onClick={()=>{
                                    deleteAnExistingPirate (pirate._id)}}>Walk the Plank</button>
                                
                            </td>
                        </tr>
                        )}
            </table>
            
        </div>
    )
}
export default ListPirates;