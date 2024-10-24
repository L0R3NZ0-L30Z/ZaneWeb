import axios from "axios";
import React, { useState } from "react";
import { useAuth } from '../components/AuthContext';

const SignUp = ({ onClose }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const { isSignedIn, setIsSignedIn } = useAuth();

    const handleSignOn = async () =>{
        try{
            const response = await axios.post('http://localhost:8000/SignUp', {
               "username": username,
               "password": password,
               "email": email
            });
            console.log("user created: ", response.data);
            alert("Account created successfully");
            localStorage.setItem('Email', email);
            setIsSignedIn(true);
        }
        catch(error){
            console.log(error);
            alert("Account already exist or there is a problem with the server")
        }
       
       
    }
    const handleSubmit = (e) => {
        e.preventDefault(); 
        handleSignOn();
        onClose();
    };

    return (
        <div className="popup-overlay">
            <div className="popup">
                <h2>Sign Up</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>
                            Username:
                            <input
                                type="text"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Email:
                            <input 
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            Password:
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </label>
                    </div>
                    <button type="submit" onClick={handleSubmit}>Create Account</button>
                    <button type="button" onClick={onClose}>Close</button>
                </form>
            </div>
        </div>
    );
};

export default SignUp;
