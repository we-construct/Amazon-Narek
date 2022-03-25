import React, {useState} from "react";
import "../Css/loginStyless.css";
import {Link} from "react-router-dom";

export default function Login() {
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);


    const errors = {
        email: "invalid email",
        password: "invalid password"
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const usersLocal = JSON.parse(localStorage.getItem('users'));
        const {email, password} = document.forms[0]

        const userData = usersLocal.find((user) => user.email === email.value);

        if (userData) {
            if (userData.password !== password.value) {
                setErrorMessages({name: "password", message: errors.password});
            } else {
                setIsSubmitted(true);
            }
        } else {
            setErrorMessages({name: "email", message: errors.email});
        }
    };

    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );

    const renderForm = (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label>Email </label>
                    <input type="text" name="email" required/>
                    {renderErrorMessage("email")}
                </div>
                <div className="input-container">
                    <label>Password </label>
                    <input type="password" name="password" required/>
                    {renderErrorMessage("password")}
                </div>
                <div style={{display: "flex"}}>
                    <div className="button-container">
                        <input type="submit" value='Login'/>
                    </div>
                    <div className="button-container" style={{marginLeft: 80}}>
                        <Link to="/register" style={{textDecoration: 'none'}}> <input type="submit" value='Sign Up'/>
                        </Link>
                    </div>
                </div>
            </form>
        </div>
    );

    return (
        <div className="login">
            <div className="login-form">
                <div className="title">Sign In</div>
                {isSubmitted ? <div>User is successfully logged in</div> : renderForm}

            </div>
        </div>
    );
}