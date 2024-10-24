import React, { useState } from "react";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import { useAuth } from '../components/AuthContext';

const View = () => {
    const { isSignedIn, setIsSignedIn } = useAuth();
    const [isSignedUp, setIsSignedUp] = useState(false);
    const handleSignUpClick = () => {
        setIsSignedUp(true);
    };
    const handleSignInClick = () =>{
        setIsSignedIn(true);
    }
    const handleLogOutClick = () =>{
        setIsSignedIn(false);
        alert("Logged out successfully");
    }
    const closePopup = () => {
        setIsSignedUp(false);
        setIsSignedIn(false);
    };

    return (
        <div>
            <div className="top-navigation">
                {!isSignedIn && <button className="nav-button" onClick={handleSignInClick}>Sign In</button>}
                {!isSignedIn && <button className="nav-button" onClick={handleSignUpClick}>Sign Up</button>}
                {isSignedIn && <button className="nav-button" onClick={handleLogOutClick}>Log Out</button>}
                <div className="hamburger-menu">
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>

                <div className="dropdown-menu hidden">
                    <a href="#contact">Contact</a>
                    <a href="#product">Product</a>
                    <a href="#social-media">Social Media</a>
                </div>
            </div>

            <div className="container">
                <div className="subheading">Zane</div>
                <h1>DRONES</h1>
                <div className="elemento">
                    <img 
                        className="lemonade-image" 
                        src="https://i.ibb.co/HdDxWjy/D-NQ-NP-968415-MLU73105490906-122023-O.png" 
                        alt="Lemonade Image" 
                    />
                </div>
            </div>

            <div id="product" className="section">
                <div className="section-title">Our Product</div>
                <p>Details….</p>
            </div>

            <div id="contact" className="section">
                <div className="section-title">Contact Us</div>
                <p>Email or phone</p>
            </div>

            <div id="social-media" className="section">
                <div className="section-title">Follow Us</div>
                <p>Social media platforms.</p>
            </div>
            {isSignedUp && <SignUp onClose={closePopup} />}
            {isSignedIn && <SignIn onClose={closePopup} />}
        </div>
    );
}

export default View;