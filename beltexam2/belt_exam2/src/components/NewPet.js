import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useRouteMatch, useHistory } from 'react-router-dom';


const NewPet = () => {
    const [pets, setPets] = useState({})
    const [pet, setPet] = useState({
        name:"", type:"", description:"", skill_1:"", skill_2:"", skill_3:""
    })
    const [errors, setErrors] = useState([]);
    
    let match = useRouteMatch()
    const history= useHistory()
    const cancel = () => {
        axios.post('http://localhost:8000/api/pets')
    }
    const submit = (e) => {
        e.preventDefault()
        console.log("in the submit function")
        axios.post('http://localhost:8000/api/pets', pet)
            .then((addNew) => {
                console.log(addNew)
                console.log("adding pet")
                history.push('/pets')
            })
            .catch(err => {
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                console.log("in the error method")
                for(const key of Object.keys(errorResponse)){
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            });
            console.log("testing testing one two three")
    }
    const override = (e) => {
        e.preventDefault()
    }
    const validateName = (e) => {
        const updatedPet = {...pet, name:e.target.value}
        setPet(updatedPet);
    }
    const validateType = (e) => {
        const updatedPet = {...pet, type:e.target.value}
        setPet(updatedPet);
    }
    const validateDescription = (e) => {
        const updatedPet = {...pet, description:e.target.value}
        setPet(updatedPet);
    }
    const validateSkill_1 = (e) => {
        const updatedPet = {...pet, skill_1:e.target.value}
        setPet(updatedPet);
    }
    const validateSkill_2 = (e) => {
        const updatedPet = {...pet, skill_2:e.target.value}
        setPet(updatedPet);
    }
    const validateSkill_3 = (e) => {
        const updatedPet = {...pet, skill_3:e.target.value}
        setPet(updatedPet);
    }

    return(
        <div>
            <h1>Pet Shelter</h1>
            <h3>Know a pet needing a home?</h3>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
            <Link to={`${match.url}/details`}>Pets</Link>
            <form onSubmit={submit}>
                Pet name:
                <input name="name" type="text" placeholder="Name" value={pet.name} onChange={validateName} />
                Pet Type:
                <input name="type" type="text" placeholder="Type" value ={pet.type} onChange={validateType}/>
                Pet Description:
                <input name="description" type="text" placeholder="Description" value={pet.description} onChange={validateDescription}/>
                Skills (optional):
                Skill 1:
                <input name="skill_1" type = "text" placeholder="skill_1"  value={pet.skill_1} onChange={validateSkill_1}/>
                Skill 2:
                <input name="skill_2" type = "text" placeholder="skill_2" value={pet.skill_2} onChange={validateSkill_2}/>
                Skill 3:
                <input name="skill_3" type = "text" placeholder="skill_3" value={pet.skill_3} onChange={validateSkill_3}/>
                <br></br>
                <br></br>
                <button onClick={cancel}>Cancel</button>
                <input type="submit" value="Add Pet"/>
                
            </form>
        </div>
    )
}

export default NewPet;