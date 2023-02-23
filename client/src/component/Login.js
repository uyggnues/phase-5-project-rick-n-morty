import React, {useState, useEffect, useContext} from 'react';
import { UserContext } from '../Context/UserContext';
import { useNavigate, Link } from 'react-router-dom';
import OauthLogin from './Oauth_login';


const Login = () => {
    const navigate = useNavigate()
    const {Login} = useContext(UserContext)
    const [login, setLogin] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        setLogin({...login, [e.target.name]:e.target.value})
    }


    return (
        <>
        <form onSubmit={(e) => Login(e, login, navigate)}>
            <label>Email</label>
            <input type='text' name='email' value={login.email} onChange={handleChange}/>
            <label >Password</label>
            <input type='password' name='password' value={login.password} onChange={handleChange} />
            <input type='submit'/>
            <div>
                Don't have an account? Signup <Link to={'/signup'}>Here</Link>
            </div>
        </form>
        {/* <OauthLogin /> */}
        </>
    );
}

export default Login;
