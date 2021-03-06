import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [username, setUsername] = useState("");
    const [first_name, setfirst_name] = useState("")
    const [last_name, setlast_name] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    const [firstNameError, setfirstNameError] = useState("");
    const [lastNameError, setlastNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirmpasswordError, setconfirmpasswordError] = useState("")
    
    const verifyFirst_name = (newname) => {
        setfirst_name(newname);
        console.log(newname)
        if(newname.length < 1){
            setfirstNameError("First name is required.");
        } else if(newname.length < 3){
            setfirstNameError("First name must be 3 characters")
        } else {
            setfirstNameError("")
        }
    }   
    const verifyLast_name = (newname) => {
        setlast_name(newname);
        if(newname.length < 1){
            setlastNameError("Last name is required.");
        } else if(newname.length < 3){
            setlastNameError("Last name must be 3 characters")
        }else {
            setlastNameError("")
        }
    }   

    const verifyemail = (newemail) => {
        setEmail(newemail);
        if(newemail.length < 1){
            setEmailError("Email is required.");
        } else if(newemail.length < 3){
            setEmailError("Email must be 3 characters")
        }else {
            setEmailError("")
        }
    }    
    const verifypassword = (newpassword) => {
        setPassword(newpassword);
        if(newpassword.length < 1){
            setPasswordError("Password is required.");
        } else if(newpassword.length < 8){
            setPasswordError("Password must be 8 characters")
        }else {
            setPasswordError("")
        }
    }    
    const verifyconfirmpassword = (confpass) => {
        if(confpass !== password){
            setconfirmpasswordError("Passwords must match")
        } else {
            setconfirmpasswordError("")
        }
        
    }    

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
                <input type="text" onChange={ (e) => verifyFirst_name(e.target.value)} value = {first_name} />
                {
                    firstNameError ?
                    <p style={{color: 'red'}}>{ firstNameError}</p>:
                    ''
                }
            </div>
            <div>
                <label>Last Name: </label> 
                <input type="text" onChange={ (e) => verifyLast_name(e.target.value)} value = {last_name} />
                {
                    lastNameError ?
                    <p style={{color: 'red'}}>{ lastNameError}</p>:
                    ''
                }
            </div>
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ (e) => verifyemail(e.target.value) } value = {email} />
                {
                    emailError ?
                    <p style={{color: 'red'}}>{ emailError}</p>:
                    ''
                }
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ (e) => verifypassword(e.target.value) } value = {password} />
                {
                    passwordError ?
                    <p style={{color: 'red'}}>{ passwordError}</p>:
                    ''
                }
            </div>
            <div>
                <label>Confirm Password: </label> 
                <input type="text" onChange={ (e) => verifyconfirmpassword(e.target.value)} />
                {
                    confirmpasswordError ?
                    <p style={{color: 'red'}}>{ confirmpasswordError}</p>:
                    ''
                }
            </div>
            <input type="submit" value="Create User" />
        </form>
    );
};
    
export default UserForm;