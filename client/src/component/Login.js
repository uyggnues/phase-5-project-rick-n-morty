import React, {useState, useEffect, useContext} from 'react';
import { UserContext } from '../Context/UserContext';
import { useNavigate, Link } from 'react-router-dom';
import OauthLogin from './Oauth_login';
import { ErrorContext } from '../Context/ErrorContext';


const Login = () => {
    const navigate = useNavigate()
    const {errors, mappedErrors} = useContext(ErrorContext)
    const {Login} = useContext(UserContext)
    const [login, setLogin] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        setLogin({...login, [e.target.name]:e.target.value})
    }

    

    console.log(errors)
    return (
        <>
            {errors ? mappedErrors : null}
        <div className='form'>
            <form className='login' onSubmit={(e) => Login(e, login, navigate)}>
                <h1 className='LOGIN'>LOGIN</h1>
                <label>EMAIL</label>
                <input type='text' name='email' value={login.email} onChange={handleChange}/>
                <label >PASSWORD</label>
                <input type='password' name='password' value={login.password} onChange={handleChange} />
                <button className='letsGo' type='submit'>LETS GO</button>
                <br/>
                <div className='here'>
                    Don't have an account? Signup <Link to={'/signup'}>Here</Link>
                </div>
            </form>
            <OauthLogin />
        </div>
        </>
    );
}

export default Login;
