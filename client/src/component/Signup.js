import React, {useState, useEffect, useContext} from 'react';
import {useNavigate, Link} from 'react-router-dom'
import { UserContext } from '../Context/UserContext';

const Signup = () => {
    const navigate = useNavigate()
    const {Signup} = useContext(UserContext)
    const [signup, setSignup] = useState({
        name: '',
        email: '',
        password: '',
        confirm_password: ''
    })

    const handleChange = (e) => {
        setSignup({...signup, [e.target.name]:e.target.value})
    }

    return (
        <form onSubmit={(e) => Signup(e, signup, navigate)}>
            <label>Name</label>
            <input type='text' name='name' value={signup.name} onChange={handleChange}/>
            <label>email</label>
            <input type='text' name='email' value={signup.email} onChange={handleChange}/>
            <label>password</label>
            <input type='password' name='password' value={signup.password} onChange={handleChange}/>
            <label>confirm_password</label>
            <input type='password' name='confirm_password' value={signup.confirm_password} onChange={handleChange}/>
            <input type='submit'/>

            <div>
            Already have an account? Login <Link to={'/login'}>Here</Link>
            </div>
        </form>
    );
}

export default Signup;
