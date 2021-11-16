import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useHistory } from "react-router-dom";

const Update = (props) => {
    const { id } = useParams();
    const [pet, setPet] = useState({});

    const history= useHistory();


    useEffect(() => {
        axios.get('http://localhost:8000/api/pets/' + id)
            .then(res => {
                setPet(res.data.pet);
            })
    }, []);

    const updatePet = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/pets/' + id, pet)
            .then(res=> history.push('/pets'))
            .catch(err=> console.error(err));
    }
    return (
        <div>
            <h1>Pet Shelter</h1>
            <h3>Update {pet.name}</h3>
            <form onSubmit={updatePet}>
                <p>
                    <label>Pet Name</label><br></br>
                    <input type="text"
                    title = "name"
                    value = {pet.name}
                    onChange = {(e) => {setPet({...pet, name:e.target.value})}} />
                </p>
                <p>
                    <label>Pet Type</label><br></br>
                    <input type="text"
                    title="type"
                    value = {pet.type}
                    onChange = {(e) =>{setPet({...pet, type:e.target.value})}} />
                </p>
                <p>
                    <label>Pet Description</label><br></br>
                    <input type="text"
                    title="description"
                    value = {pet.description}
                    onChange = {(e) =>{setPet({...pet, description:e.target.value})}} />
                </p>
                <p>
                    <label>Skill 1</label><br></br>
                    <input type="text"
                    title="skill_1"
                    value = {pet.skill_1}
                    onChange = {(e) =>{setPet({...pet, skill_1:e.target.value})}} />
                </p>
                <p>
                    <label>Skill 2</label><br></br>
                    <input type="text"
                    title="skill_2"
                    value = {pet.skill_2}
                    onChange = {(e) =>{setPet({...pet, skill_2:e.target.value})}} />
                </p>
                <p>
                    <label>Skill 3</label><br></br>
                    <input type="text"
                    title="skill_3"
                    value = {pet.skill_3}
                    onChange = {(e) =>{setPet({...pet, skill_3:e.target.value})}} />
                </p>
                
                <input type="submit"/>
            </form>
        </div>
    )
}
export default Update;