import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [username, setUsername] = useState("");
    const [first_name, setfirst_name] = useState("")
    const [last_name, setlast_name] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { username, first_name, last_name, email, password };
        console.log("Welcome", newUser);
        setHasBeenSubmitted(true);
    };

    const formMessage = () => {
        if( hasBeenSubmitted ) {
            return "Thank you for submitting the form!";
        } else {
            return "Welcome, please submit the form";
        }
    };
    
    return(
        <form onSubmit={ createUser }>
            {
                hasBeenSubmitted ?
                <h3>Thank you for submitting the form!</h3>:
                <h3>Welcome, please submit the form.</h3>
            }
            <div>
                <label>Username: </label> 
                <input type="text" onChange={ (e) => setUsername(e.target.value)} value = {username} />
            </div>
            <div>
                <label>First Name: </label> 
                <input type="text" onChange={ (e) => setfirst_name(e.target.value)} value = {first_name} />
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" onChange={ (e) => setlast_name(e.target.value)} value = {last_name} />
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => setEmail(e.target.value) } value = {email} />
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ (e) => setPassword(e.target.value) } value = {password} />
            </div>
            <div>
                <label>Confirm Password: </label> 
                <input type="text" onChange={ (e) => setPassword(e.target.value)} value = {password} />
            </div>
            <input type="submit" value="Create User" />
        </form>
    );
};
    
export default UserForm;