import React, {useContext, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {AuthContext} from "../context/AuthContext";
import axios from "axios";


function SignIn() {
    const {login} = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/login',
                {
                    email: email,
                    password: password
                })
            console.log(response);
            navigate('/profile');
            login(response.data.accessToken);
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <>
            <h1>Inloggen</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab alias cum debitis dolor dolore fuga id
                molestias qui quo unde?</p>

            <form onSubmit={handleSubmit}>
                <label htmlFor="emailadress">
                    emailadres
                    <input
                        type="email"
                        id="emailadress"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <label htmlFor="password">
                    wachtwoord
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}/>
                </label>


                <button
                    type="submit"
                >
                    Inloggen
                </button>
            </form>

            <p>Heb je nog geen account? <Link to="/register">Registreer</Link> je dan eerst.</p>
        </>
    );
}

export default SignIn;