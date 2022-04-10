import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css'
import googlelogo from '../../images/google.png';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import React, { useState } from 'react';
import auth from '../../firebase.init';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    if (user) {
        navigate(from, { replace: true });
    }

    const handleUserSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password);
    }


    return (
        <div className='form-container'>
            <div>
                <h2 className="form-title">Login</h2>

                <form onSubmit={ handleUserSignIn } action="">
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={ handleEmailBlur } type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={ handlePasswordBlur } type="password" name="password" id="" required />
                    </div>
                    <p style={ { color: 'red', padding: '5px', borderRadius: '5px' } }>{ error?.message }</p>
                    {
                        loading && <p>Loading...</p>
                    }
                    <input className="form-submit" type="submit" value="Login" />
                </form>
                <p>New to ema-john?
                    <Link className="form-link" to="/signup">Create New Account</Link>
                </p>
                <div className="form-lowerPart">
                    <div className="first">
                        <hr />
                    </div>
                    <div className="middle">or </div>
                    <div className="second">
                        <hr />
                    </div>
                </div>
                <button className="btn_google">
                    <img width="20px" src={ googlelogo } alt="" />
                    Sign in with Google</button>
            </div>
        </div>
    );
};

export default Login;