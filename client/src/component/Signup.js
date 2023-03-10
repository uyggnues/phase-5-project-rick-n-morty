import React, {useState, useEffect, useContext} from 'react';
import {useNavigate, Link} from 'react-router-dom'
import { UserContext } from '../Context/UserContext';
import { ErrorContext } from '../Context/ErrorContext';

const Signup = () => {
    const { errors, mappedErrors } = useContext(ErrorContext);
    const navigate = useNavigate()
    const {Signup} = useContext(UserContext)
    const [signup, setSignup] = useState({
        name: '',
        email: '',
        password: '',
        confirm_password: '',
        key_words: 'new'
    })

    const handleChange = (e) => {
        setSignup({...signup, [e.target.name]:e.target.value})
    }

    return (
        <>
            {errors ? mappedErrors : null}
        <div className="form">
        <form className='signup' onSubmit={(e) => Signup(e, signup, navigate)}>
            <h1 className='LOGIN'>SIGNuP</h1>
            <div className='formBox'>
            <label className='signupText'>Name</label>
            <input className='signupInput' type='text' name='name' value={signup.name} onChange={handleChange} placeholder='your name ...'/>
            <label className='signupText'>email</label>
            <input className='signupInput' type='text' name='email' value={signup.email} onChange={handleChange} placeholder='email please ...'/>
            <label className='signupText'>password</label>
            <input className='signupInput' type='password' name='password' value={signup.password} onChange={handleChange} placeholder='dont tell anyone ...'/>
            <label className='signupText'>confirm_password</label>
            <input className='signupInput' type='password' name='confirm_password' value={signup.confirm_password} onChange={handleChange} placeholder='are you sure ... ?'/>
            </div>
            <button className='letsGo' type='submit'>welcome...</button>

            <div className='here'>
            Already have an account? Login <Link to={'/login'}>Here</Link>
            </div>
        </form>
        </div>
        </>
    );
}

export default Signup;
