import React, { useState } from 'react';
import './Register.css';
import { auth } from './firebase';
import { useNavigate } from 'react-router-dom';

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');
    const navigate = useNavigate();

    const register = (e) => {
        e.preventDefault();

        if (password !== rePassword) {
            alert('Passwords do not match');
            return;
        }

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((authUser) => {
                // Successfully created a new user with email and password
                if (authUser) {
                    navigate('/');
                }
                console.log(authUser);
                alert('Account created successfully');
            })
            .catch((error) => alert(error.message));
    };

    return (
        <div className="login">
            <img
                className="login_logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
                alt="Amazon Logo"
            />

            <div className="login_container">
                <h1>Create Account</h1>

                <form>
                    <h5>Name</h5>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />

                    <h5>E-mail</h5>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

                    <h5>Re-enter Password</h5>
                    <input
                        type="password"
                        value={rePassword}
                        onChange={(e) => setRePassword(e.target.value)}
                    />

                    <button className='login_signInButton' type='submit' onClick={register}>
                        Register
                    </button>
                </form>

                <p>
                    By registering, you agree to AMAZON FAKE CLONE conditions of Use and sale. Please see our Privacy
                    Notice, our Cookies Notices, and our Interest-Based Ads
                </p>
            </div>
        </div>
    );
}

export default Register;