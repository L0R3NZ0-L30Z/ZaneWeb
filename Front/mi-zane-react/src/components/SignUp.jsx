import axios from "axios";
import React, { useState } from "react";

const SignUp = ({ onClose }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const handleSignOn = async () =>{
        try{
            const response = await axios.post('http://localhost:8000/SignUp', {
               username,
               password 
            });
            console.log("user created: ", response.data);
       
        }
        catch(error){
            console.log(error);
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
