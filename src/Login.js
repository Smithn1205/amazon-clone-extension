import React, { useState } from 'react'
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { auth } from "./firebase";
// import { useHistory } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    // const history = useHistory();
    
    const navigateToregister = ()=>{
        navigate("/register")
    }
    const navigateToHome = () => {
        navigate("/")
    }

    const signIn = (e) => {
        e.preventDefault();

        auth  
            .signInWithEmailAndPassword(email, password)
            .then(auth=>{
                alert("Logged In successfully!")
                navigate('/')
            })
            .catch(error=> alert(error.message))
        // some fancy firebase login
    }

    return (
        <div className='login'>
            <img
                onClick={navigateToHome}
                className='login_logo'
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
            />

            <div className='login_container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e=>setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e=>setPassword(e.target.value)}></input>

                    <button className='login_signInButton' type='submit' onClick={signIn}>Sign In</button>
                </form>

                <p>by signing-in you agree to AMAZON FAKE CLONE conditions of Use and sale. Please see our Privacy Notice, our Cookies Noties and our Interest-Based Ads </p>
                
                <button className='login_registerButton' onClick={navigateToregister}>Create Amazon account</button>
            </div>
        </div>
    )
}

export default Login;

