import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useRouteMatch } from 'react-router-dom';



const ListPets = (props) =>{
    const {removeFromDom} = props;
    let match = useRouteMatch();
    const [pets, setPets] = useState ([])
    
    const deleteAnExistingPet = (id) => {
        axios.delete('http://localhost:8000/api/pets/' + id)
            .then(res=>{getAllPets()})
            .catch(err=>console.error(err));
    }
    const getAllPets = () => {
        axios.get('http://localhost:8000/api/pets')
            .then(data=> {
                setPets (data.data.pets)
                console.log(data)
            })
            .catch()
    }
    
    useEffect(() => {
        getAllPets()
    }, [])
    return(
        <div className="App">
            <h1>Pet Shelter</h1>
            <Link to={`/pets/new`}>Add a new Pet</Link>
            <table>
                <tr><th>Name</th><th>Type</th><th>Actions</th></tr>
                    {pets.map( pet =>
                        <tr>
                            <td>
                                <Link to= {`/pets/details/${pet._id}`}>{pet.name}</Link>
                            </td>
                            <td>{pet.type}</td>
                            <td>
                                <Link to={`/pets/${pet._id}/edit`}>edit</Link>
                                <button onClick={()=>{
                                    deleteAnExistingPet (pet._id)}}>Adopt Immediately</button>
                                
                            </td>
                        </tr>
                        )}
            </table>
            
        </div>
    )
}
export default ListPets;