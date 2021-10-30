import React, { useState, Component } from 'react'


function PersonCard (props){

    const [name, setName] = useState(props.name)
    const [age, setAge] = useState(props.age)
    const {firstName, lastName, hairColor} = props
    const updateBirthday = () =>{
        setAge(age => {
            return age + 1
        })
    }

    return (
        <div>
            <h1>{lastName}, {firstName}</h1>
            <p>{age}</p><p>{hairColor}</p>
            <button title="Birthday" onClick = { () => updateBirthday() }>Happy Birthday</button>
        </div>)

}

/* 
{/* class PersonCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:'',
            age: props.age
        }
    }

    render(){
        const {firstName, lastName, hairColor} = this.props;
        return (
            <div>
                <h1>{lastName}, {firstName}</h1>
                <p>{age}</p><p>{hairColor}</p>
                <button title="Birthday" onClick = { () => updateBirthday() }>Happy Birthday</button>
            </div>
        )
    }
    updateBirthday(){
        console.log("here")
        this.setState( state => {
            console.log(state)
        return{
            ...state,
            age: state.age +1
        }
        
    })}
} */


export default PersonCard