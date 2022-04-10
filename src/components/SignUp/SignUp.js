import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css'
import googlelogo from '../../images/google.png'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('')
    const navigate = useNavigate()
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth);

    const handleEmailBlur = event => {
        setEmail(event.target.value);
        console.log(event.target.value)
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
        console.log(event.target.value)
    }

    const handleConfirmPasswordBlur = event => {
        setConfirmPassword(event.target.value);
    }
    if (user) {
        navigate('/login')
    }
    const handleCreateUser = event => {
        event.preventDefault()
        if (password !== confirmPassword) {
            setError("Password didn't match!!! Please Try Again")
            return;
        }
        if (password.length < 6) {
            setError("Password length must be at least 6 characters");
            return;
        }
        createUserWithEmailAndPassword(email, password)
            .then(result => {
                console.log(result);
                const user = result.user;
                console.log(user);
            })
    }
    return (
        <div className='form-container'>
            <div>
                <h2 className="form-title">SignUp Please</h2>

                <form onSubmit={ handleCreateUser } action="">
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={ handleEmailBlur } type="email" name="email" id="" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={ handlePasswordBlur } type="password" name="password" id="" required />

                    </div>
                    <div className="input-group">
                        <label htmlFor="ConfirmPassword">Confirm Password</label>
                        <input onBlur={ handleConfirmPasswordBlur } type="password" name="ConfirmPassword" id="" required />

                    </div>
                    <p style={ { color: 'red', padding: '5px', borderRadius: '5px' } }>{ error }</p>
                    <input className="form-submit" type="submit" value="Signup" />
                </form>
                <p>Already have an account?
                    <Link className="form-link" to="/login">Login</Link>
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

export default SignUp;