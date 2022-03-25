import React, {useState} from "react";
import "../Css/loginStyless.css";
import {Link} from "react-router-dom";

export default function Register() {

    const [errorMessages, setErrorMessages] = useState({});
    const [isRegistered, setIsRegistered] = useState(false);
    const users = []
    const errors = {
        email: "user exist",
        re_pass: "password not the same",
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const {first_name, last_name, email, password, re_pass} = document.forms[0]

        const user = {
            first_name: first_name.value,
            last_name: last_name.value,
            email: email.value,
            password: password.value
        }

        localStorage.setItem('users', JSON.stringify(users))
        const usersLocal = JSON.parse(localStorage.getItem('users'));
        const userData = usersLocal.find((item) => item.email === email.value)
        if (userData) {
            setErrorMessages({name: "email", message: errors.email});
        } else if (password.value !== re_pass.value) {
            setErrorMessages({name: "re_pass", message: errors.re_pass});
        } else {
            users.push(user)
            localStorage.setItem('users', JSON.stringify(users))
            setIsRegistered(true);
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
                    <label>First Name </label>
                    <input type="text" name="first_name" required/>
                </div>
                <div className="input-container">
                    <label>Last Name </label>
                    <input type="text" name="last_name" required/>
                </div>
                <div className="input-container">
                    <label>Email</label>
                    <input type="text" name="email" required/>
                    {renderErrorMessage("email")}
                </div>
                <div className="input-container">
                    <label>Password </label>
                    <input type="password" name="password" required/>
                </div>
                <div className="input-container">
                    <label>Re-enter password </label>
                    <input type="password" name="re_pass" required/>
                    {renderErrorMessage("re_pass")}
                </div>
                <div style={{display: "flex"}}>
                <div className="button-container">
                    <input type="submit" value='Register'/>
                </div>
                <div className="button-container" style={{marginLeft:80}}>
                    <Link to="/login" style={{ textDecoration: 'none' }}>  <input type="submit" value='Sign In'/>  </Link>
                </div>
                </div>
            </form>
        </div>
    );

    return (
        <div className="login">
            <div className="login-form">
                <div className="title">Sign Up</div>
                {isRegistered ? <div>User is successfully registered in</div> : renderForm}

            </div>
        </div>
    );
}